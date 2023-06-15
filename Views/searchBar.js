$(document).ready(function() {
    // Handler for search input keyup event
    $('#searchInput').keyup(function() {
      var searchText = $(this).val().toLowerCase();
  
      // Clear previous results
      $('#results').empty();
  
      // Perform search
      if (searchText.length > 0) {
        $.ajax({
          url: '/search',
          type: 'POST',
          data: { searchText: searchText },
          success: function(data) {
            // Display search results
            data.forEach(function(item) {
              var listItem = '<li>' + item.name + ' - ' + item.description + '</li>';
              $('#results').append(listItem);
            });
          },
          error: function(error) {
            console.error(error);
          }
        });
      }
    });
  });
  