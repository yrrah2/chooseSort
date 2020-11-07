const niceString = (array) => {
	let string = '';
	let finalString = '">image</a>';
	if ( typeof(array) != "object" ) {
		string += '<a href="';
		string += array;
	} else if (array.length != 0) {
		string += '<a href="';
		string += array[0].toString();
		for ( let i = 1; i < array.length; i++ ) {
			string += '">image</a>, <a href="';
			string += array[i];
		}
	} else {
		finalString = '';
	};
	return string + finalString;
}

const showOptions = (left, right) => {
	$("#left").attr("src", left);
	$("#right").attr("src", right);
}

const pageload = () => {
	sortingArray = ["https://i.imgur.com/imDCn1v.jpg", "https://i.imgur.com/2x4n776.jpg", "https://i.imgur.com/8PsLHJ7.jpg", "https://i.imgur.com/6hB0JIO.jpg", "https://i.imgur.com/vbeK6YW.jpg", "https://i.imgur.com/4sXCzxQ.jpg", "https://i.imgur.com/8RFpSAj.jpg", "https://i.imgur.com/B14Epbk.jpg", "https://i.imgur.com/RFXCmAx.jpg", "https://i.imgur.com/98VEgnZ.jpg", "https://i.imgur.com/e89hrJx.jpg", "https://i.imgur.com/ZDOLJzy.jpg", "https://i.imgur.com/GefZLkJ.jpg", "https://i.imgur.com/vwbn7Uk.jpg", "https://i.imgur.com/1JdwKPb.jpg", "https://i.imgur.com/dShJR4z.jpg", "https://i.imgur.com/nHsabjm.jpg"];
	sortingComplete = false;
	nextStage();
};

window.onload = pageload;
