
    $(document).ready(function () {
        $("#gform").validate({
          rules: {
            emailaddress: {
              required: true,
              email: true
            }
          }
         
          
        });
      });