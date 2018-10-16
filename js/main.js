var strng = "kjgkgjkgjk";
var iterator = 1;
var workingstrng ="";
var chara = "d";
var donestrng = "";
var display = "true";
var namestrng = "kjgkgjkgjk";
var adlibstring2 = "has a lot of back moles.";
$(document).ready(function(){
  $("#yournamesubmit").click(function()
  {
    yourname();
  });

  $("#submitter").click(function()
  {

  reversetext();
  $("#ho").toggle();
  $("#yo").toggle();
  });
  });


function reversetext()
  {
    donestrng = "";
    strng = document.getElementById("inputtext").value;
    iterator = strng.length;
    while(iterator > 0)
      {
          iterator -= 1;
          chara = strng[iterator];
          donestrng += chara;
      }
      console.log(donestrng);
           document.getElementById("inputtext").value = donestrng;
    }
function yourname()
{
namestrng = document.getElementById("form").value;
$("#adlib").inlineHTML = namestrng;
 adlibstring2 = $("#adlib2").val();
console.log(namestrng);
console.log(adlibstring2);
console.log(document.getElementById("adlib2").inlineHTML);
}
