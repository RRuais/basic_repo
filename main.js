  $(document).ready(function () {
      $("#slide").click(function () {
          $("#sm57").slideToggle();
      });
      $("#hideshow").click(function () {
          $("#akg").toggle();
      });
      $("#fade").click(function () {
          $("#d112").fadeToggle();
      });
      $("#change_text").click(function () {
          $("#change_paragraph").text("Text is now changed");
      });
      $("#submit").click(function () {
          var num1 = $("#first_number").val();
          var num2 = $("#second_number").val();
          var total = parseInt(num1) + parseInt(num2)
          $("#calc p").text(total)
      });
      //end document ready
  });