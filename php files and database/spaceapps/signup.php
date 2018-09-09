<?php
include "db.php";
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();
$message['7laeen'] = "true";
if($data['action'] == "signup"){
 $Name = $data['Name'];
 $Email = $data['Email'];
 $password = $data['password'];
 $edu_institute = $data['edu_institute'];
 $team = $data['team'];

 $q = mysqli_query($con,"INSERT INTO participant_form (Name,password,Email,edu_institute,team) VALUES ('$Name','$password','$Email','$edu_institute','$team')");
 if($q){
	
 $message['status'] = "success";
 
 $sql = "SELECT * from participant_form WHERE Email='".$Email."' AND password='".$password."'";

 $q = mysqli_query($con,$sql);
 if($row=mysqli_fetch_object($q)){


  array_push($message,$row);

 }
 
 }
 else{
 $message['status'] = "error";
 }
 echo json_encode($message);
}
echo mysqli_error($con);
?>