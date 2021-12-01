$(function() {

    /*  validate form  */
    $("form").each(function() {


        $(this).validate({
            rules: {
                FirstName: {
                    required: true,
                    minlength: 3
                },
                LastName: {
                    required: true,
                    minlength: 3
                },
                email: {
                    required: true,
                    email: true
                },
                Phone: {
                    required: true
                },
                password: {
                    required: true,
                    minlength: 5
                }
            },
            messages: {
                FirstName: {
                    required: "Enter a valid name",
                    minlength: jQuery.validator.format("need {0} and more symbols")
                },

                email: {
                    required: "Enter a valid Email",
                    email: "Wrong format Email"
                },

                password: {
                    required: "Enter a valid password",
                    minlength: jQuery.validator.format("need {0} and more symbols")
                }
            }
        });
    });
    /*  validate form  */

});