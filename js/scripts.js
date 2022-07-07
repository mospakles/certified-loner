
$(document).ready(function () {

    $("#cert-form").submit(function (e) {
        
        e.preventDefault();
        
        var input_values =  $(this).serializeArray();
        console.log(input_values);
        // Do whatever it is you wish to do
        //...
        // Now submit it 
        // Don't use $(this).submit() FFS!
        // You'll never leave this function & smash the call stack! :D
        //e.currentTarget.submit();
    });

});