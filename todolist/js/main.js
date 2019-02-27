$(document).ready(function(){
 $("#submit").on("click", function(e){
   e.preventDefault();
   //grab value from input
   var toDo = $("input").val()
   //append list items into the ul
   $("ul").append("<li>"+toDo+"</li>");
   var total = $("ul").children().length;
   $("#total").html(`Number of things to do: ${total}`);
   //items can be removed
   $("li").on("click", function(){
     $(this).remove()
     var total = $("ul").children().length;
     if(total === 0){
       counter = 0;
     }
     $("#total").html(`Number of things to do: ${total}`);
   })
 }); //closes add list item button

 //another button to remove all items
 $("#deleteAll").on("click", function(){
   $("li").remove()
   var total = $("ul").children().length;
   $("#total").html(`Number of things to do: ${total}`);
 }); //closes erase all button
}); //closes ready document

//page to not refresh when clicking on button
