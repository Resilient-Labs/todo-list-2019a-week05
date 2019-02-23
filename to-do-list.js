// create List
// user must be able to add to List
//remove from list
//clear list
//keep running total of items in list

$(document).ready(function(){

  $("#addToList").on("click", function(){
    var toDoItem = $('input').val()
    $('ul').append(`<li>` + toDoItem + `</li>`);
    var total = $('ul').children().length;
    $('#total').html(`total list items: ${total}`);

    $('li').on('click',function(){
      $(this).remove()
      var total = $('ul').children().length;
      $('#total') = html(`total list items: ${total}`);
    })
  })
  $('#clearList').on('click', function(){
    $('li').remove()
    var total = $('ul').children().length;
    $('#total') = html(`total list items: ${total}`);

  })

})
