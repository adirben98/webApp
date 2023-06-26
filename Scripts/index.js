$(document).ready(function() {
  // Load the header HTML
  $.ajax({
    url: "/header.html",
    method: "GET",
    success: function(html) {
      $("#header-placeholder").html(html);
      $("#search-input").on("input", searchProducts);

      $.ajax({
        url: "/footer.html",
        method: "GET",
        success: function(html) {
          $("#footer-placeholder").html(html);
        },
        error: function(xhr, status, error) {
          console.error("Error loading footer:", error);
        }
      });
    },
    error: function(xhr, status, error) {
      console.error("Error loading header:", error);
    }
  });

  function searchProducts() {
    const searchInput = $("#search-input");
    const searchValue = searchInput.val().toLowerCase();
    const searchResults = $("#search-results");

    // Clear previous results and hide the dropdown
    searchResults.empty().hide();

    // Perform search after at least two characters are entered
    if (searchValue.length >= 2) {
      // Make AJAX request to server
      $.ajax({
        url: `/search?query=${encodeURIComponent(searchValue)}`,
        method: "GET",
        dataType: "json",
        success: function(data) {
          const products = data.products;

          // Display search results as a dropdown
          const dropdown = $("<div>").addClass("search-results-dropdown");
          products.forEach(product => {
            const resultItem = $("<div>").addClass("search-results-item");
            const productName = $("<span>").text(product.name);
            const productLink = $("<a>").attr("href", `/products/${product.name}`).append(productName);
            resultItem.append(productLink);
            dropdown.append(resultItem);
          });

          // Show the dropdown with search results
          searchResults.html(dropdown).show();
        },
        error: function(xhr, status, error) {
          console.error("Error retrieving search results:", error);
        }
      });
    }
  }

  // Update the cart count periodically (e.g., every 10 seconds)
  setInterval(updateCartCount, 10000);

  // Function to update the cart count
  function updateCartCount() {
    $.ajax({
      url: '/cart/items/count',
      method: 'GET',
      success: function(data) {
        const cartCount = $('#cartCount');
        if (data.count > 0) {
          cartCount.text(data.count).show();
        } else {
          cartCount.hide();
        }
      },
      error: function(err) {
        console.error('Error fetching cart count:', err);
      }
    });
  }
});
