
<?php
include "db.php";

header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST, GET'); 
header('Access-Control-Allow-Headers: Content-Type');

require 'vendor/autoload.php';

require 'mailClass.php';

require_once 'vendor/swiftmailer/swiftmailer/lib/swift_required.php';


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





 $input = file_get_contents('php://input');

    
 $data = json_decode($input,true);

 $Email = $data['email'];

$generatedPass=(randomPassword(10,1,"lower_case,upper_case,numbers")[0]);
//print_r($generatedPass) ;           



 
$subject = 'NASA Space Apps Account Reset Password';

$sendto = $Email;

$body = "You have requested to reset your password your new password is ".$generatedPass; 



$mailClient = new MailClass();

$swiftmail = $mailClient->sendMail($subject,$sendto,$body);



$q = mysqli_query($con, "UPDATE participant_form SET password='".$generatedPass."' WHERE Email='".$Email."'");
 


if ($q) {
   $message['status'] = "success";
   

   
} else {
   $message['status'] = "this team not exist!";
}


echo json_encode($message);
    

    
    
    

?>