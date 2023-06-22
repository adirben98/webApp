$(document).ready(function() {
    $.ajax({
      url: "/header.html",
      method: "GET",
      success: function(html) {
        $("#header-placeholder").html(html);
      },
      error: function(xhr, status, error) {
        console.error("Error loading header:", error);
      }
    });
  });