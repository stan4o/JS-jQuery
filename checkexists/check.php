<?php

// Connect to the database
try {
    $db = new PDO('mysql:host=localhost;dbname=checkexists', 'root', 'root');
} catch (PDOException $e) {
    die("Error: " . $e->getMessage());
}

if (isset($_GET['type']) && isset($_GET['value'])) {

    // Prepare the variables
    $type = mb_strtolower(trim($_GET['type']));
    $value = trim($_GET['value']);
    $output['exists'] = false;

    // Check the type
    switch ($type) {
        case 'username':

            $check = $db->prepare("
                SELECT COUNT(*) AS count
                FROM users
                WHERE username = :value
            ");

            break;

        case 'email':

            $check = $db->prepare("
                SELECT COUNT(*) AS count
                FROM users
                WHERE email = :value
            ");

            break;
    }

    // Execute the query
    $check->execute(['value' => $value]);

    // Check if it's returning positive or negative answer
    $output['exists'] = $check->fetchObject()->count ? true : false;

    // Output json value for ajax request
    echo json_encode($output['exists']);
}