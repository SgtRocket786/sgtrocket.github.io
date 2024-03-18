<?php
if(isset($_POST['send'])) {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set up email
    $to = "hmdahmd.wrk786@gmail.com";
    $subject = "New message from $name";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";

    // Send email
    if(mail($to, $subject, $body)) {
        echo "<script>alert('Message sent successfully');</script>";
    } else {
        echo "<script>alert('Failed to send message');</script>";
    }
}
?>
