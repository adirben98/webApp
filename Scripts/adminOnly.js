
 function redirectNonAdmin() {
    $.ajax({
      url: '/check-admin',
      method: 'GET',
      success: function(response) {
        if (!response.userType || response.userType !== 'admin') {
          window.location.href = "/";
        }
      },
      error: function() {
        // Handle error
        console.log('Error checking admin status');
        window.location.href = "/";
      }
    });
  }
  redirectNonAdmin();