<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Check existing names in form</title>
    </head>
    <body>

        <p class="error"></p>

        <form action="check.php" method="post" autocomplete="off">

            <div class="field">
                <label for="username">Enter username</label>
                <input type="text" id="username" name="username" class="check" data-type="username">
                <span class="check-exists-feedback" data-type="username"></span>
            </div>

            <div class="field">
                <label for="email">Enter email</label>
                <input type="email" id="email" name="email" class="check" data-type="email">
                <span class="check-exists-feedback" data-type="email"></span>
            </div>

            <input type="submit" value="Register">

        </form>

        <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <script src="js/main.js"></script>
        <script>

            // Start the function when the document is ready
            $("input.check").checkexists();

        </script>

    </body>
</html>