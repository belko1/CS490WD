/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 $(document).ready(function () { 
     $(".google").on('click',search);
 });

function search() {
    var names = ["samir", "sodd", "sigga", "mustafa", "titus", "Aurelian", "Baraka"];
    var html = "";
    var value = $(".search").val(); //get the value of the text field
    var show=false; //don't show suggestions

    $.each(names, function (i, val) {
        var start = names[i].toLowerCase().search(value.toLowerCase().trim());
        if (start != -1) { //if there is a search match
            html += "<div class='sub_suggestions' id='" + names[i] + "' >";
            html += names[i];
            html += "</div>";
            show=true; //show suggestions
        }
    });
    if(show){
        $("#suggestions_box").html(html);
        $("#suggestions_box").show();
    }
    else
       $("#suggestions_box").hide();
}