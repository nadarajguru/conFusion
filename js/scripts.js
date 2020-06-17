$(document).ready(function () {
  $("#mycarousel").carousel({ interval: 2000 });
  $("#carouselButton").click(function () {
    if ($("#carouselButton").children("span").hasClass("fa-pause")) {
      $("#mycarousel").carousel("pause");
      $("#carouselButton").children("span").removeClass("fa-pause");
      $("#carouselButton").children("span").addClass("fa-play");
    } else if ($("#carouselButton").children("span").hasClass("fa-play")) {
      $("#mycarousel").carousel("cycle");
      $("#carouselButton").children("span").removeClass("fa-play");
      $("#carouselButton").children("span").addClass("fa-pause");
    }
  });

  $("#btnLogin").click(function () {
    $("#loginModal").modal("show");
  });

  $("#loginCancel").click(function () {
    $("#loginModal").modal("hide");
  });

  $("#loginClose").click(function () {
    $("#loginModal").modal("hide");
  });

  $("#btnReserve").click(function () {
    $("#reserveModal").modal("show");
  });

  $("#reserveCancel").click(function () {
    $("#reserveModal").modal("hide");
  });

  $("#reserveClose").click(function () {
    $("#reserveModal").modal("hide");
  });
});
