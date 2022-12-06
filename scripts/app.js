$(document).ready(function () {
    $(".event").slice(0, 4).show();
    $("#show-more").on("click", function (e) {
      e.preventDefault();
      $(".event:hidden").slice(0, 4).slideDown();
      if ($(".event:hidden").length == 0) {
        $("#show-more").text("No Content").addClass("noContent");
      }
    });
  });