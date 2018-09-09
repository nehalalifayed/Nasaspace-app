<?php

class MailClass

{

    function sendMail($subject,$sendto,$body,$targetpath = null)

    {


$transport = \Swift_SmtpTransport::newInstance();

$message = Swift_Message::newInstance();

$message->setTo($sendto);

$message->setSubject($subject);

$message->setBody($body);

$message->setFrom("feryalhisham19@gmail.com", "NasaSpaceappsCairo");

if(!empty($targetpath)){

$message->attach(Swift_Attachment::fromPath($targetpath));

}

$mailer = Swift_Mailer::newInstance($transport);

$result = $mailer->send($message);

    if ($result) {

        echo "Number of emails sent: $result";

    } else {

        echo "Couldn't send email";

    }
        }
}
?>