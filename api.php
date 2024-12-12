<?php
require_once "config.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

require 'vendor/autoload.php';

if (isset($_POST["type"])) {
  if ($_POST["type"] == "contact") {
    contact();
  }
}

function contact()
{
  global $smtp_host, $username, $password, $to_address;
  $res = [
    "status" => "fail"
  ];

  $params = [
    "name",
    "street",
    "city",
    "phone",
    "email",
    "msg"
  ];

  $paramsNotExists = [];
  foreach ($params as $param) {
    if (!isset($_POST[$param])) {
      if ($param == "msg") {
        $param = "Message";
      }
      $paramsNotExists[] = ucfirst($param);
    }
  }

  if (count($paramsNotExists) > 0) {
    $res["msg"] = implode(", ", $paramsNotExists) . " field required";
    echo json_encode($res);
    return;
  }

  if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
    $res["msg"] = "Email is not valid";
    echo json_encode($res);
    return;
  }

  $mail = new PHPMailer(true);
  try {
    //Server settings
    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                    //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host = $smtp_host;                                //Set the SMTP server to send through
    //$mail->SMTPAuth   = true;                                 //Enable SMTP authentication
    $mail->Username = $username;                       //SMTP username
    $mail->Password = $password;                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;          //Enable implicit TLS encryption
    $mail->Port = 25; //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom($username);
    $mail->addAddress($to_address); //Add a recipient

    //Content
    $mail->isHTML(true);  //Set email format to HTML
    $mail->Subject = 'Message from ' . $_POST["email"];

    $content = file_get_contents("email.html");
    $content = str_replace("{name}", $_POST["name"], $content);
    $content = str_replace("{street}", $_POST["street"], $content);
    $content = str_replace("{city}", $_POST["city"], $content);
    $content = str_replace("{phone}", $_POST["phone"], $content);
    $content = str_replace("{email}", $_POST["email"], $content);
    $content = str_replace("{msg}", $_POST["msg"], $content);
    $mail->Body = $content;

    $mail->send();

    $res["status"] = "ok";
    $res["msg"] = "Message has been sent";
  } catch (Exception $e) {
    //$res["msg"] = $mail->ErrorInfo; //Debug
    $res["msg"] = "Failed to sent message";
  }

  echo json_encode($res);
}

