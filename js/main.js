var i = 0;
$(document).ready(function(){

	$("#add").on("click",function(){

		var toDo = $("input").val()
		//Append list items grab value from input
		$("ul").append("<li id=" + i + " onClick=hideListItem(" + i + ")>"+toDo+"</li>")
		// $("ul").on("<li>"+toDo+"</li>")
		//on to the li
		//items can be removed
			i++;
		$("p").text(i);
		console.log(i);
	

	});

$("#eraseAll").on("click", function(){
	$(".toDoList").empty()
	i=0;
	$("p").text(i);
});



//another button to remove all items
});
function hideListItem(myItem) {
var x = document.getElementById(myItem);

	x.style.display = "none";
	i--;
	$("p").text(i);
	console.log(i);
};
