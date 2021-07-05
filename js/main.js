//add a to do
//remove a to do
//remove all of the to dos
//calculating total number of to dos

var list = 0;

$( "#addToDo" ).click(function() {

  event.preventDefault()
  var theItem = $("#addToDoItem");
  $("#save").append('<li id="item-' + list + '">' + theItem.val() + '<button id="removeToDoItem">Remove</button></li>');
  theItem.val("");

    //alert($("#addToDoItem").val());
});

$("#save").on("click", "li #removeToDoItem", function(){
  $(this).parent().remove()
});

$( "#clear" ).click(function() {
  $("#save").text("");
});
