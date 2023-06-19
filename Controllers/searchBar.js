$(document).ready(function() {
    // Get search input and search results container
    var searchInput = $('#search-input');
    var searchResults = $('#search-results');
  
    // Attach event listener on search input
    searchInput.on('input', function() {
      var userInput = $(this).val().trim();
      if (userInput.length >= 2) {
        // Make an AJAX request to retrieve products from MongoDB based on user input
        $.ajax({
          url: '/search',
          method: 'POST',
          data: { query: userInput },
          success: function(data) {
            // Clear previous search results
            searchResults.empty();
  
            // Add each product to the search results container
            data.products.forEach(function(product) {
              var productItem = $('<div class="slider-item">' + product.name + '</div>');
              searchResults.append(productItem);
            });
  
            // Show the search results container
            searchResults.addClass('active');
          },
          error: function() {
            console.log('Error occurred during search.');
          }
        });
      } else {
        // If user input is less than 2 characters, hide the search results container
        searchResults.removeClass('active');
      }
    });
  });
  