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
