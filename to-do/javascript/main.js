//Create a to-do list that a user can add a single task to, remove single tasks from, remove all tasks from and there should be a running total of how many items are in the list
// input related things: get value from it, moving that value into the list,
// type into the input. you're going to click the submit. the value you typed in is going to go into the list and be visible.
// click on list item. List item gets hidden/removed
// click on a clear button. All list items get hidden/removed
// need a counter to see how many items are in the list

$(document).ready(function(){
  $("#taskButton").on("click", function(e){
    e.preventDefault();

    var toDo = $("input").val()

    $("ul").append("<li>"+toDo+"</li>");
    var total = $("ul").children().length;
    $("#total").html(`Total list items: ${total}`);

    $("li").on("click", function(){
      $(this).remove()
      var total = $("ul").children().length;
      if(total === 0){
        counter = 0;
      }
      $("#total").html(`Total list items: ${total}`);
    })
  });


  $("#clearButton").on("click", function(){
    $("li").remove()
    var total = $("ul").children().length;
    $("#total").html(`Total list items: ${total}`);
  });
});
