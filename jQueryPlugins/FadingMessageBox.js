(function($){
    $.fn.messageSuccess = function () {
            var message = $("#message").html("Success");
            $(message).height( 50 ).css({   
                                            "background-color":"green" ,
                                            "fontSize": "40px" ,
                                            "width":"20%",
                                            "margin-top":"2%",
                                            "border-radius":"20%",
                                            "text-align":"center"
                                        });
            $('#message').delay(2000).fadeOut(3000);
       };

    $.fn.messageError = function () {
            var message = $("#message").html("Error");
            $(message).height( 50 ).css({   
                                            "background-color":"red" ,
                                            "fontSize": "40px" ,
                                            "width":"20%",
                                            "margin-top":"2%",
                                            "border-radius":"20%",
                                            "text-align":"center"
                                        });
            $('#message').delay(2000).fadeOut(3000);
       };

}(jQuery));