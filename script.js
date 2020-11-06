const updateArray = (partArray) => {
	let leftSize = partArray[0].length;
	let rightSize = partArray[1].length;
	

	if ( leftSize == 0 || rightSize == 0) {
		console.log("Left: "+leftSize+", Right: "+rightSize);
		if ( leftSize == 0 && rightSize == 0) {
		} else if (leftSize == 0) {
			partArray[2] = partArray[2].concat(partArray[1]);
			partArray[1] = [];
		} else {
			partArray[2] = partArray[2].concat(partArray[0]);
			partArray[0] = [];
		}

	} else {
		
		if ( partArray[0][0] < partArray[1][0] ) {
			partArray[2].push(partArray[0].shift());
		} else {
			partArray[2].push(partArray[1].shift());
		}
	}
};

const nextStage = (sArray) => {
	let newArray = [];
	for (i = 0; i < sArray.length; i += 2) {
		let tempArray = [];
		let value0 = sArray[i];
		let value1 = sArray[i+1];





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
	return newArray;
};

const mergeSort = (sArray) => {
	for (i = 0; i < sArray.length; i++) {
		if (typeof(sArray[i]) != "number") {
			updateArray(sArray[i]);
		}
	};
};


const pageload = () => {
	x = [1,3,5,4,2,7,6,9,8];
};

window.onload = pageload;
