const niceString = (array) => {
	let string = '';
	if ( typeof(array) != "object" ) {
		string += array;
	} else if ( array.length != 0 ) {
		string += array[0].toString();
		for ( let i = 1; i < array.length; i++ ) {
			string += ", ";
			string += array[i];
		}
	}
	return string;
};

const showOptions = (left, right) => {
	$("#left").text(left);
	$("#right").text(right);
}

const pageload = () => {
	sortingArray = [10, 3, 4, 6, 11, 2, 12, 9, 5, 7, 13, 8, 1];
	sortingComplete = false;
	nextStage();
};

window.onload = pageload;
