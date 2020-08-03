<?php
if(!isset($_POST['submit']))

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$visitor_email = $_POST['email'];
$visitor_phone = $_POST['phone'];
$websiteProduct = $_POST['websiteProduct'];
$completionDate = $_POST['completionDate'];
$message = $_POST['commentsQuestions'];

//Validate first
if(empty($fname) || empty($lname) || empty($visitor_email) || empty($message) || empty($completionDate)) 
{
  echo "First Name, Last Name, Email, Selected Products, and Questions, Comments or Suggestions are required!";
  exit;
}

if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}

$websiteProductList = '';
$productCount = count($websiteProduct);
for($i = 0; $i < $productCount; $i++) {
  $websiteProductList .= "$websiteProduct[$i]\n";
}

$to = "benjiman.nolan1@gmail.com";
$email_subject = "Android Product Form";
$email_body = "You have received a new android product form from:\n".
"Name: $fname $lname\n".
"Email: $visitor_email\n".
"Phone: $visitor_phone\n".
"Products:\n$websiteProductList\n".
"Questions, Comments, or Suggestions: $message\n".

// Always set content-type when sending HTML email 
$headers = "MIME-Version: 1.0" . "\r\n"; 
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n"; 

$headers = 'From:'.$fname. ' ' .$lname.' <'.$visitor_email.'>' . "\r\n"; 

//Send the email
mail($to,$email_subject,$email_body,$headers);

//Redirect Page
header('Location: confirmation.html');

// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
?>