<?php 

$errors = '';
$to = 'stephlane544@gmail';

if(empty($_POST['name'])  || empty($_POST['email']) || empty($_POST['message'])){
    $errors .= "\n Error: all fields are required";
}

$name = $_POST['name']; 
$email_address = $_POST['email']; 
$message = $_POST['message'];

if (!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", $email_address)){
    $errors .= "\n Error: Invalid email address";
}

if( empty($errors))
{
	$email_subject = "Contact form submission: $name";
	$email_body = "You have received a new message. ".
	" Here are the details:\n Name: $name \n Email: $email_address \n Message \n $message"; 
	
	$headers = "From: $myemail\n"; 
	$headers .= "Reply-To: $email_address";
	
	$success = mail($to,$email_subject,$email_body,$headers);
	if (!$success) {
		$errorMessage = error_get_last()['message'];
	}
	debug_to_console($success);
} 

echo nl2br($errors);
echo nl2br($success);
echo nl2br($errorMessage);

function debug_to_console( $data ) {
    $output = $data;
    if ( is_array( $output ) )
        $output = implode( ',', $output);

    echo "<script>console.log( 'Debug Objects: " . $output . "' );</script>";
}
debug_to_console($errors);

?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
<html>
<head>
	<title>Contact form handler</title>
</head>

<body>
<!-- This page is displayed only if there is some error -->
<?php
echo nl2br($errors);
echo nl2br($success);
echo nl2br($errorMessage);
?>


</body>
</html>