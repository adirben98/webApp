$(document).ready(function() {
    $.ajax({
      url: "/footer.html",
      method: "GET",
      success: function(html) {
        $("#footer-placeholder").html(html);
      },
      error: function(xhr, status, error) {
        console.error("Error loading header:", error);
      }
    });
  });