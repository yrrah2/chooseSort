const preCheck = () => {
	/*
	This function completes tasks that
	are do not need user input.
	*/
	let partArray = sortingArray[progress];

	if (typeof(partArray) == "object") {
		let leftSize = partArray[0].length;
		let rightSize = partArray[1].length;
		if ( leftSize == 0 || rightSize == 0) {
			if ( leftSize == 0 && rightSize == 0) {
				if (sortingArray.length == 1) {				// If the sorting array has one element
					$("#left").css("display", "none");		// and it has no left or right components
					$("#right").css("display", "none");		// then the whole list is completely sorted.
					sortingComplete = true;				// Hide the buttons and set sorting to complete.
				} else {
					progress++;					// If the current array has no left or right
					preCheck();					// elements: it is sorted. Move to next array.
				}
			} else if (leftSize == 0) {
				partArray[2] = partArray[2].concat(partArray[1]);
				partArray[1] = [];
				sortingArray[progress] = partArray;
				preCheck();
			} else {
				partArray[2] = partArray[2].concat(partArray[0]);
				partArray[0] = [];
				sortingArray[progress] = partArray;
				preCheck();
			}
		} else {
			showOptions(partArray[0][0], partArray[1][0]); // Display the choices
		};
	} else {
		nextStage();
	};
};

const makeChoice = (choice) => {
	/*
	This triggers only when the buttons are pressed.
	It rearranges the sorting arrays and displays them.
	*/
	let partArray = sortingArray[progress];			
	if ( choice == "left" ) {				// Move the first element of the list
		partArray[2].push(partArray[0].shift());	// from the chosen list to the final
	} else {						// sorted list and remove it from the 
		partArray[2].push(partArray[1].shift());	// chosen list.
	}
	sortingArray[progress] = partArray;
	preCheck();
	display();
};

const nextStage = () => {
	/*
	This function takes the list of sorted arrays and
	combines them into groups of twos. These grouped
	arrays must be further sorted into one bigger array.
	*/
	let newArray = [];
	for (i = 0; i < sortingArray.length; i += 2) {
		let tempArray = [];
		let value0 = sortingArray[i];
		let value1 = sortingArray[i+1];
		if (value1 != undefined) {
			if (typeof(value0) != "object") {
				value0 = [value0];
			} else {
				value0 = value0[2];
			};
			if (typeof(value1) != "object") {
				value1 = [value1];
			} else {
				value1 = value1[2];
			};
			tempArray.push(value0);
			tempArray.push(value1);
			tempArray.push([]);
			newArray.push(tempArray);
		} else {
			newArray.push(value0);
		};

	};

	sortingArray = newArray;
	progress = 0;

	preCheck();
	display();
};

const display = () => {
	/*
	This function simply displays the entire
	sorting array in a nicer way to understand.
	*/
	let displayString = '';
	
	if (sortingComplete) {						// If the display is the final display
		displayString += niceString(sortingArray[0][2]);	// it can be simpler.
	} else {
		for (let i = 0; i < sortingArray.length; i++ ) {
			if (typeof(sortingArray[i]) != "object") {
				displayString += niceString(sortingArray[i]);
			} else {
				displayString += "[ (";
				displayString += niceString(sortingArray[i][0]);
				displayString += ") (";
				displayString += niceString(sortingArray[i][1]);
				displayString += ") (";
				displayString += niceString(sortingArray[i][2]);
				displayString += ") ]";
			};
			displayString += "&nbsp; &nbsp; &nbsp; &nbsp;";
		};
	};
	
	$("#display").html(displayString);
};
