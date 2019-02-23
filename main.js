$(document).ready(function(){
   var i = 0;
   var n = $(".toDoList li").length;



    $(".add").on("click", function(){

        var toDo = $("input").val();
        event.preventDefault()

        //Append list items grab value from input
        $(".toDoList").append("<li id="+ i +" onClick=hideListItem("+ i +")>"+ toDo +"</li>")

        i++;

        $("span").text(i);
        //on to the  //items can be removed
    });
    //remove button
    $(".remove").on("click", function(){
      $(".toDoList").empty();
    });
//another button to remove individual items
});

function hideListItem(myItem){
  var x = document.getElementById(myItem);

    x.style.display = "none";
}
