$( document ).ready(function() {
 
    $('p') // element selector
    $('#item1') // id selector
    $('.item') //class selector
    $("*") // All element selector
    $("p.intro") // selects the paragraph with intro class 


    // click() event 
    $("p").click(function(){
        $(this).hide();
      });



    // dblclick() event
    $("p").dblclick(function(){
        $(this).hide();
      });

    // hover() event
    $("#p1").hover(function(){
        alert("You entered p1!");
      },
      function(){
        alert("Bye! You now leave p1!");
      });

    //on () function
    $("p").on("click", function(){
        $(this).hide();
      });


    //hide and show methods 
    $("#hide").click(function(){
        $("p").hide();
      });
      
    $("#show").click(function(){
        $("p").show();
      });

    //toggle function
    $("button").click(function(){
        $("p").toggle();
      });


    //fade in 
    $("button").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
      });

    //fade out 
    $("button").click(function(){
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);
      });

    //fade to 
    $("button").click(function(){
        $("#div1").fadeTo("slow", 0.15);
        $("#div2").fadeTo("slow", 0.4);
        $("#div3").fadeTo("slow", 0.7);
      });

    //slide down
    $("#flip").click(function(){
        $("#panel").slideDown();
      });

    //slid up
    $("#flip").click(function(){
        $("#panel").slideUp();
      });

    //animate() Method
    $("button").click(function(){
        $("div").animate({left: '250px'});
      }); 

      
    //animate() - Manipulate Multiple Properties
    $("button").click(function(){
        $("div").animate({
          left: '250px',
          opacity: '0.5',
          height: '150px',
          width: '150px'
        });
      }); 






 
});