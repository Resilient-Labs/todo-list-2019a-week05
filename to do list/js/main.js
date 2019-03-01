// $("#search").on("click", EnterToDo);
// $("#buttonadd").on("click", toDo);
// $("#buttonsub").on("click", notTodo);
// $("#buttonclear").on("click", clear);
// function EnterToDo(){
// }
$(document).ready(function(){
    $("#buttonadd").on("click",function(event){
        event.preventDefault();
        var toDo = $("input").val();
        //Append list items grab value from input
        $("ul").append("<li>" + toDo + "</li>")
        //on to the li
        var total = (document.getElementsByTagName("ul").length);
        $("#total").html(`total list items: ${total}`);
    })
})

$("#buttonsub").on("click",function(event){
    event.preventDefault();
    // alert('hello')

    $('li').remove()
})

$("ul").on('click', 'li', function(){
    $(this).remove();



});
//         $("li").on('click', function(){
//             
//             var total = $('ul').children().length;
//             if (total===0){
//                 counter = 0
//             }else{
//                 console.log("error");
//             }
//         });
//     });
// });
//     $('#eraseAll').on('click', function(){
//         $('eraseAll').on('click', function(){
//                 $(li).removel()
//             var total = 0;
//             $('#total')
//         }
//     });
// another button to remove all items  
// empty p tag = #totalclear 
// list button = #earseAll
//  add to list button = #addTo
//     });