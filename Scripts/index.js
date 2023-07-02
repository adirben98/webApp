$(document).ready(function () {
 let socket=io('http://localhost:3000')
  socket.on('connect',()=>{
    


    socket.on("someone-bought-an-ostrich", () => {
      alert("someone Bought an ostrich!!")
    })
  })
  
  $.ajax({
    url: "/header.html",
    method: "GET",
    success: function (html) {
      $("#header-placeholder").html(html);
      $("#search-input").on("input", searchProducts);
      $('input[type="checkbox"]').on('change', applyFilters);

      $.ajax({
        url: "/footer.html",
        method: "GET",
        success: function (html) {
          $("#footer-placeholder").html(html);
        },
        error: function (xhr, status, error) {
          console.error("Error loading footer:", error);
        },
      });
    },
    error: function (xhr, status, error) {
      console.error("Error loading header:", error);
    },
  });

  // Add event listener for clicking outside the dropdown
  $(document).on("click", function (e) {
    const searchInput = $("#search-input");
    const searchResults = $("#search-results");

    // Close search results dropdown if the clicked element is not part of the search bar or the dropdown
    if (
      !searchInput.is(e.target) &&
      searchInput.has(e.target).length === 0 &&
      !searchResults.is(e.target) &&
      searchResults.has(e.target).length === 0
    ) {
      searchResults.empty().hide();
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
        success: function (data) {
          const products = data.products;

          // Display search results as a dropdown
          const dropdown = $("<div>").addClass("search-results-dropdown");
          products.forEach((product) => {
            const resultItem = $("<div>").addClass("search-results-item");
            const productName = $("<span>").text(product.name);
            const productLink = $("<a>")
              .attr("href", `/products/${product.name}`)
              .append(productName);
            resultItem.append(productLink);
            dropdown.append(resultItem);
          });

          // Show the dropdown with search results
          searchResults.empty().append(dropdown).show();
        },
        error: function (xhr, status, error) {
          console.error("Error retrieving search results:", error);
        },
      });
    }
  }
});
function applyFilters() {
  // Get the selected filter options
  var selectedSize = [];
  var selectedBreed = [];
  var selectedTraySize = [];

  $('input[type="checkbox"]').each(function() {
    if (this.checked) {
      var checkboxValue = $(this).attr('value');
      var checkboxId = $(this).attr('id');

      if (checkboxId.startsWith('Small') || checkboxId.startsWith('Medium') || checkboxId.startsWith('Large')) {
        selectedSize.push(checkboxValue);
      } else if (checkboxId.startsWith('breed')) {
        selectedBreed.push(checkboxValue);
      } else if (checkboxId.startsWith('trayOf') || checkboxId === 'singles') {
        selectedTraySize.push(checkboxValue);
      }
    }
  });

  // Create the filter object
  var filters = {
    eggSize: selectedSize,
    category: selectedBreed,
    traySize: selectedTraySize
  };

  // Send the filter data to the server
  $.ajax({
    url: '/filters',
    method: 'POST',
    data: filters,
    dataType: 'json',
    success: function(response) {
      // Handle the response from the server
      var products = response.products;

      // Update the product listing based on the filtered results
      var productContainer = $('#product-list');
      productContainer.empty(); // Clear previous products

      if (products && products.length > 0) {
        products.forEach(function(Product) {
          var productHtml = `
            <div class="egg-card">
              <h2>${Product.name}</h2>
              <img src="${Product.image}" alt="${Product.name}">
              <p>${Product.category} eggs</p>
              <p>Size: ${Product.EggSize}</p>
              <p>Tray of-${Product.traysize}</p>
              <p>Price: $${Product.price}</p>
              <a href="/products/${Product.name}" class="btn btn-info">View Product</a>
            </div>
          `;
          $('#product-list').append(productHtml);

        });
      } else {
        var noResultsElement = $('<div>').text('No products found.');
        productContainer.append(noResultsElement);
      }
    },
    error: function(xhr, status, error) {
      console.error('Error applying filters:', error);
    }
  });
}
