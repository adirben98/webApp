$(document).ready(function () {
  // Load the header HTML
  $.ajax({
    url: "/header.html",
    method: "GET",
    success: function (html) {
      $("#header-placeholder").html(html);
      $("#search-input").on("input", searchProducts);

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
