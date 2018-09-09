<?php
require 'PHPMailer/PHPMailerAutoload.php';
include "db.php";
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();
$message['7laeen'] = "true";






function randomPassword($length,$count, $characters) {
 
    // $length - the length of the generated password
    // $count - number of passwords to be generated
    // $characters - types of characters to be used in the password
     
    // define variables used within the function    
        $symbols = array();
        $passwords = array();
        $used_symbols = '';
        $pass = '';
     
    // an array of different character types    
        $symbols["lower_case"] = 'abcdefghijklmnopqrstuvwxyz';
        $symbols["upper_case"] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $symbols["numbers"] = '1234567890';
        $symbols["special_symbols"] = '!?~@#-_+<>[]{}';
     
        $characters = explode(",",$characters); // get characters types to be used for the passsword
        foreach ($characters as $key=>$value) {
            $used_symbols .= $symbols[$value]; // build a string with all characters
        }
        $symbols_length = strlen($used_symbols) - 1; //strlen starts from 0 so to get number of characters deduct 1
         
        for ($p = 0; $p < $count; $p++) {
            $pass = '';
            for ($i = 0; $i < $length; $i++) {
                $n = rand(0, $symbols_length); // get a random character from the string with all characters
                $pass .= $used_symbols[$n]; // add the character to the password string
            }
            $passwords[] = $pass;
        }
         
        return $passwords; // return the generated password
    }

	
if($data['action'] == "signup"){
 //$Name = $data['Name'];
 $Email = $data['Email'];
//$password = $data['password'];
 $edu_institute = $data['edu_institute'];
 $team = $data['team'];

 $password=(randomPassword(10,1,"lower_case,upper_case,numbers")[0]);
 $user_id=(randomPassword(10,1,"lower_case,upper_case,numbers")[0]);
 
$sql = "SELECT Name,Email,edu_institute,team from participant_form WHERE Email='".$Email."'";

$q = mysqli_query($con,$sql);

 if(mysqli_num_rows($q)>0){
	 
 $row=mysqli_fetch_object($q);
 array_push($message,$row);
 $q = mysqli_query($con, "UPDATE participant_form SET password='".$password."',edu_institute='".$edu_institute."',team='".$team."',user_id='". $user_id."' WHERE Email='".$Email."'");
 

$mail = new PHPMailer;

$mail->isSMTP();                                   // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';                    // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                            // Enable SMTP authentication
$mail->Username = 'teamna1st@gmail.com';          // SMTP username
$mail->Password = 'teamna1staffh'; // SMTP password
$mail->SMTPSecure = 'tls';                         // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                 // TCP port to connect to

$mail->setFrom('email@NasaSpaceapps.com', 'Nasa Space Apps');
$mail->addReplyTo('email@NasaSpaceapps.com', 'Nasa Space Apps');
$mail->addAddress($Email);   // Add a recipient
$mail->isHTML(true);  // Set email format to HTML



$mail->Subject = 'NASA Space Apps Account Register Password';
$mail->Body    = "You have registered with this email, here is your password ".$password;


 if ($q) {
    $message['status'] = "success";
	
	//to do ->feryal send the password to the mail here i prepared it for you in $password
    

 
    
    if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
	
	
	
} else {
            console.log("msg sent");

    echo 'Message has been sent';
	

	}
    

	
	
} else {
    $message['status'] = "this team not exist!";
}
 
 
 echo json_encode($message);
}
else
{
	$message['status'] = "register first";
	echo json_encode($message);
}
}
//echo mysqli_error($con);

?>