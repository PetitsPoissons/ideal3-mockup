<?php
if (isset($_POST['email'])) {

    // Email information
    $admin_email = "sandrine@juliettewilliamson.online";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Send email
    mail($admin_email, "New Contact Submission", $message . ' - ' . $name, "From:" . $email);

    header('Location: http://sandrinepoissonnet.online/success.html');
}