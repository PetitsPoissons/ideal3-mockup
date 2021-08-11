<?php
if (isset($_POST['email'])) {

    // Email information
    $admin_email = "info@ideal3.com";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Send email
    mail($admin_email, "New Contact Submission", $message . ' - ' . $name, "From:" . $email);

    header('Location: https://www.ideal3.com/success.html');
}