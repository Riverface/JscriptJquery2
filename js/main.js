var iterator = 1;
var workingstrng ="";
var chara = "d";
var donestrng = "";
var display = "true";
var namestrng = "kjgkgjkgjk";
var insult1 = "has a lot of back moles.";
var insult2 = "doesn't understand the appeal of sonic games at all.";
var insult3 = "likes anime.";
var prankname = "Brian"
var prankname2 = "Mark"
/* Roasts all around, friends. */
var insultiterator = 0;
var insultalternator = 0;
var decidedinsult;
var peekaboo;
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

      }
      function yourname()
      {
        if(insultalternator == 3)
        {
        insultalternator = 0;
        if(insultiterator == 3)
        {
          insultiterator = 0;
        }

        }





        switch(insultalternator)
        {
          case 0:
          namestrng = $("#nameform").val();
          insultalternator = 1;
          $("#adlib").text(namestrng);
          break;
          case 1:
          insultalternator = 2;
          namestrng = prankname;
          $("#adlib").text(namestrng);
          break;
          case 2:
          insultalternator = 3;
          namestrng = prankname2;
          $("#adlib").text(namestrng);
          break;
        }

        switch(insultiterator)
        {
          case 0:
          decidedinsult = insult1;
          break;

          case 1:
          decidedinsult = insult2;
          break;

          case 2:
          decidedinsult = insult3;
          break;
        }

        if(insultalternator == 3)
        {

          insultiterator++;
          insultalternator = 0;
          if (insultiterator >= 3)
          {
            insultalternator = 0;
            insultiterator = 0;
          }
}

        $("#adlib2").text(decidedinsult);
        console.log("the name is: " + namestrng);
        console.log("the decided insult is: " + decidedinsult);
        console.log("insult iterator = " + insultiterator);
        console.log("insult alternator = " + insultalternator);
      }
