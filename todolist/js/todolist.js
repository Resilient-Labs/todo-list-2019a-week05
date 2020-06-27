//make a to do list
// have a form in the to do list
// have a value in the form
// have a button to add into your to do list addEventListener
var number = 0;

$("#enterItem").click(function(){
  // get value and add it to the dom
  var userInput = $("#userInput").val();
  //added var li to hold an element that we created
  var li = $("<li>" + userInput + "</li>");
  $("#list").append(li);
  li.click(function(){
    $(this).addClass("done");
  });
  number ++;
  $("#number").text(number);
});
//have a button to clear list
$("#clearList").click(function(){
  $("#list").empty();
  number = 0;
  $("#number").text("0");
});
// have button to clear complete
$("#clearIndividual").click(function(){
  number = number - $(".done").length
  $("#number").text(number);
  $(".done").remove();
});
