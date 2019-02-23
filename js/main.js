//create to do list
// create ids
//grab value by inputs
//append list items
var total = 0;
var i = 0;
$(document).ready(function(){

    $("#add").on("click",function(){
        var toDo = $("input").val()
        //Append list items grab value from input
        $("ul").append("<li>"+toDo+"</li>");
      total++;
      $("p").html(`your total list items are ${total}`);

        //on to the li
        //items can be removed
    });
    //clears the selected li
    $("ul").on("click", "li", function(){
      // total - 1;
      $(this).remove();
      total= total -1
      $("p").html(`your total list items are ${total}`);
    })
    //clears the entire list
    $("#removeAll").on("click", function(){
      $("li").remove();
      total = 0;
      $("p").html(`your total list items are ${total}`);
    })
//another button to remove all items
});
