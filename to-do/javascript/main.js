//Create a to-do list that a user can add a single task to, remove single tasks from, remove all tasks from and there should be a running total of how many items are in the list
// input related things: get value from it, moving that value into the list,
// type into the input. you're going to click the submit. the value you typed in is going to go into the list and be visible.
// click on list item. List item gets hidden/removed
// click on a clear button. All list items get hidden/removed
// need a counter to see how many items are in the list
//plans: Make Javascript, Make removable on red x, recover deleted, ask if sure on deleting all, add with enter, store/display completed, undo deleted, set alarm/dead-line, effect/sound on deletion, effect on add
$(document).ready(function(){
  $("#taskButton").on("click", function(e){
    //Click on button to add task from input, use prevent default to stop refresh
    e.preventDefault();
    const toDo = $("input").val();
    $("ul").append("<li>"+toDo+"</li>");
    let total = $("ul").children().length;
    $("#total").html(`Total list items: ${total}`);
    //click to remove list item
    $("li").on("click", function(){
      $(this).remove()
      let total = $("ul").children().length;
      //Have running count of list items
      $("#total").html(`Total list items: ${total}`);
    })
  });
  $("#clearButton").on("click", function(){
    $("li").remove()
    let total = $("ul").children().length;
    $("#total").html(`Total list items: ${total}`);
  });
});
