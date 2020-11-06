const preCheck = () => {

	console.log("start");

	let partArray = sortingArray[progress];

	

	if (partArray == undefined) {
		nextStage();
	} else {

	if (typeof(partArray) != "number") {
		let leftSize = partArray[0].length;
		let rightSize = partArray[1].length;
		if ( leftSize == 0 || rightSize == 0) {
			if ( leftSize == 0 && rightSize == 0) {
				console.log("middle");
				if (sortingArray.length == 1) {
					$("#left").css("display", "none");
					$("#right").css("display", "none");
					display(true);
				} else {
					progress++;
					preCheck();
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
			$("#left").text(partArray[0][0]);
			$("#right").text(partArray[1][0]);
		};
		
	}};

	console.log("end");

};

const makeChoice = (choice) => {
	let partArray = sortingArray[progress];
	if ( choice == "left" ) {
		partArray[2].push(partArray[0].shift());
	} else {
		partArray[2].push(partArray[1].shift());
	}
	sortingArray[progress] = partArray;
	preCheck();
	display();
};

const nextStage = () => {
	let newArray = [];
	for (i = 0; i < sortingArray.length; i += 2) {
		let tempArray = [];
		let value0 = sortingArray[i];
		let value1 = sortingArray[i+1];
		if (value1 != undefined) {
			if (typeof(value0) == "number") {
				value0 = [value0];
			} else {
				value0 = value0[2];
			};
			if (typeof(value1) == "number") {
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

const mergeSort = () => {
	for (i = 0; i < sortingArray.length; i++) {
		if (typeof(sArray[i]) != "number") {
			updateArray(sortingArray[i]);
		}
	};
};

const display = (final = false) => {
	let displayString = '';
	
	if (final) {
		displayString += sortingArray[0][2];
	} else {
	for ( i = 0; i < sortingArray.length; i++ ) {
		if (typeof(sortingArray[i]) == "number") {
			displayString += sortingArray[i];
		} else {
			displayString += "[ (";
			displayString += sortingArray[i][0];
			displayString += ") (";
			displayString += sortingArray[i][1];
			displayString += ") (";
			displayString += sortingArray[i][2];
			displayString += ") ]";
		}
		displayString += "&nbsp; &nbsp; &nbsp; &nbsp;";
	};
	
	$("#display").html(displayString);
}

const pageload = () => {
	sortingArray = [10, 3, 4, 6, 11, 2, 12, 9, 5, 7, 13, 8, 1, 14];
	nextStage();
};

window.onload = pageload;
