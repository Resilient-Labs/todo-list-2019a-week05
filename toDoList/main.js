//to do List
//make a list that user can add to
//take away individual items
//take away all items at the same
//

$(document).ready(function(){
  $("#clickMe").on("click", function(){
    var item = $('#things').val()
    $("#toDo").append('<li>'+item+'</li>');
    var total = $('ul').childern().length;
    
  });


});
