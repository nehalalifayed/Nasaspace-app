<?php
require 'PHPMailer/PHPMailerAutoload.php';
include "db.php";
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();
$message['7laeen'] = "true";


	
if($data['action'] == "editProfile"){
 $Name = $data['Name'];
 $Email = $data['Email'];

 $edu_institute = $data['edu_institute'];
 $team = $data['team'];



 $q = mysqli_query($con, "UPDATE participant_form SET Name='".$Name."',edu_institute='".$edu_institute."',team='".$team."' WHERE Email='".$Email."'");
 


 if ($q) {
    $message['status'] = "success";
	

	
} else {
    $message['status'] = "this team not exist!";
}
 
 
 echo json_encode($message);
}

//echo mysqli_error($con);

?>