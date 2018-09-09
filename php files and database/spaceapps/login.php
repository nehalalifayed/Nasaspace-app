<?php
include "db.php";
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();
$message['7laeen'] = "true";
if($data['action'] == "login"){
	
 $Email = $data['Email'];
 $password = $data['password'];
 
 $sql = "SELECT Name,Email,edu_institute,team,user_id from participant_form WHERE Email='".$Email."' AND password='".$password."'";

 $q = mysqli_query($con,$sql);
 if($row=mysqli_fetch_object($q)){

 $message['status'] = "success";
 
  array_push($message,$row);

 }
 else{
 $message['status'] = "error";
 }
 echo json_encode($message);
}
echo mysqli_error($con);
?>