<?php
$to = "kevin@brund.run";
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];
$number = $_POST['number'];
$message = $_POST['message'];

	$message = "First name: $first_name\nLast name: $last_name\nEmail: $email\nNumber: $number\nMessage: $message";
	$subject = "=?utf-8?B?".base64_encode("message from the site")."?=";
	$headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/plain; charset=utf-8\r\n";

	if(mail($to, $subject, $message, $headers))
		echo "Good";
	else
		echo "Error";

?>