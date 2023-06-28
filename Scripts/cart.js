$(document).ready(function() {
    let socket=io('http://localhost:3000')



    // AJAX request to fetch cart items
    $.ajax({
      url: '/cart/items',
      method: 'GET',
      success: function(data) {
        // Iterate over the cart items and populate the table
        var totalPrice = 0;
        data.forEach(function(cartItem) {
          var row = '<tr>' +
            '<td>' + cartItem.productName + '</td>' +
            '<td><input type="number" class="form-control quantity-input" value="' + cartItem.quantity + '" data-cart-item="' + cartItem.productId + '"></td>' +
            '<td>' + cartItem.totalPrice + '</td>' +
            '<td><button class="btn btn-primary update-btn" data-cart-item="' + cartItem.productId + '">Update</button></td>' +
            '<td><button class="btn btn-danger remove-btn" data-cart-item="' + cartItem.productId + '">Remove</button></td>' +
            '</tr>';
          $('#cartTable').append(row);
          totalPrice += cartItem.totalPrice;
        });
        // Display the total price
        $('#totalPrice').html('<span>Total Price: $' + totalPrice + '</span>');

        // Attach event handlers for update and remove buttons
        $('.update-btn').click(function() {
          var productItemId = $(this).data('cart-item');
          var newQuantity = parseInt($(this).closest('tr').find('.quantity-input').val(), 10);
          if (!isNaN(newQuantity)) {
            // AJAX request to update cart item
            $.ajax({
              url: '/cart/items/' + productItemId,
              method: 'PUT',
              data: { productItemId:productItemId
                ,quantity: newQuantity },
              success: function() {
                console.log('Cart item updated successfully');
                // Refresh the page to reflect the updated quantity
                location.reload();
              },
              error: function() {
                console.log('Error: Failed to update cart item');
              }
            });
          }
        });

        $('.remove-btn').click(function() {
          var productItemId = $(this).data('cart-item');
          // AJAX request to remove cart item
          $.ajax({
            url: '/cart/items/' + productItemId,
            method: 'DELETE',
            data:{productId:productItemId},
            success: function() {
              console.log('Cart item removed successfully');
              // Refresh the page to reflect the removed item
              location.reload();
            },
            error: function() {
              console.log('Error: Failed to remove cart item');
            }
          });
        });

        // Attach event handler for checkout button
        $('.checkout-btn').click(function() {
          // AJAX request for checkout
          $.ajax({
            url: '/cart/checkout',
            method: 'POST',
            success: function(response) {
              if(response.boughtOstrich===true)
                socket.emit('bought-ostrich')
              
               if(response.isloggedin===false)
              window.location.href="/login"
              else
              window.location.href="/"
            },
            error: function() {
              console.log('Error: Checkout failed');
              // Handle the failed checkout scenario
            }
          });
        });
      },
      error: function() {
        // Handle error if AJAX request fails
        console.log('Error: Failed to fetch cart items');
      }
    });
  });