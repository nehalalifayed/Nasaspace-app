
<?php


// function debug_to_console( $data ) {
//     $output = $data;
//     if ( is_array( $output ) )
//         $output = implode( ',', $output);

//     echo "<script>console.log( 'Debug Objects: " . $output . "' );</script>";
// }

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



require 'PHPMailer/PHPMailerAutoload.php';


 $input = file_get_contents('php://input');

    
 $data = json_decode($input,true);

 $Email = $data['email'];

$generatedPass=(randomPassword(10,1,"lower_case,upper_case,numbers")[0]);
//print_r($generatedPass) ;           

$mail = new PHPMailer;

$mail->isSMTP();                                   // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';                    // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                            // Enable SMTP authentication
$mail->Username = 'teamna1st@gmail.com';          // SMTP username
$mail->Password = 'teamna1staffh'; // SMTP password
$mail->SMTPSecure = 'tls';                         // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                 // TCP port to connect to

$mail->setFrom('email@HAND IN HAND.com', 'HAND IN HAND');
$mail->addReplyTo('email@HAND IN HAND.com', 'HAND IN HAND');
$mail->addAddress($Email);   // Add a recipient
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

$mail->isHTML(true);  // Set email format to HTML



$mail->Subject = 'NASA Space Apps Account Reset Password';
$mail->Body    = "You have requested to reset your password your new password is ".$generatedPass;


 
    
    //$mail->addAddress($Email);   // Add a recipient
    if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
	
	
	
} else {
            console.log("msg sent");

    echo 'Message has been sent';
	
	




	}
    

// $q = mysqli_query($con,"INSERT INTO participant_form (Name,password,Email,edu_institute,team) VALUES ('$Name','$password','$Email','$edu_institute','$team')");
// if($q){
//	
// $message['status'] = "success";
// }
// else{
// $message['status'] = "error";
// }
// echo json_encode($message);
    
    
    

?>