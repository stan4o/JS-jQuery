// Create a plugin for jQuery
$.fn.checkexists = function () {
    return this.each(function () {

        var interval;

        $(this).on('keyup', function() {
            var self = $(this),
                    selfType = self.data('type'),
                    selfValue,
                    feedback = $('span.check-exists-feedback[data-type=' + selfType + ']');

            if (interval === undefined) {
                interval = setInterval(function () {

                    // If no value is presented asign it
                    if (selfValue !== self.val()) {

                        // Trim the white space
                        selfValue = $.trim(self.val());

                        if (selfValue.length > 2) {

                            // Process the ajax call only if the input field has more than 2 characters
                            $.ajax({
                                url: 'check.php',
                                type: 'get',
                                dataType: 'json',
                                data: {
                                    type: selfType,
                                    value: selfValue
                                },
                                success: function(data) {

                                    // Process the success message for the <span>
                                    if (data) {
                                        feedback.text("The " + selfType + " is allready taken!");
                                    } else {
                                        feedback.text("The " + selfType + " is free to use!");
                                    }

                                },
                                error: function (jqXHR, textStatus, errorThrown) {

                                    // Process the error code thrown from the ajax call
                                    $("p.error").text(errorThrown);

                                }
                            });
                        } else {

                            // Clear the <span> if the input field is empty or has less than 2 characters
                            feedback.text("");

                        }
                    };
                }, 1500); // Time interval for the check function
            }

        });

    });
};