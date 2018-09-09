<?php
include "db.php";
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();
//$message['7laeen'] = "true";


if($data['action'] == "getUserInfo"){
 $Email =  $data['email'];
//$Email ='fargalaxy24@gmail.com';

$sql = "SELECT Name,edu_institute,team from participant_form WHERE Email='".$Email."'";

$q = mysqli_query($con,$sql);

 if(mysqli_num_rows($q)>0){
	 
 $row=mysqli_fetch_object($q);
 array_push($message,$row);
 //$q = mysqli_query($con, "UPDATE participant_form SET password='".$password."',edu_institute='".$edu_institute."',team='".$team."',user_id='". $user_id."' WHERE Email='".$Email."'");
 


    echo json_encode($message);
    
}

//echo mysqli_error($con);
}
?>