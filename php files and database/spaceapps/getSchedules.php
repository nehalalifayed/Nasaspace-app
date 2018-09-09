<?php
include "db.php";
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();
$messages= array();
//$message['7laeen'] = "true";
if($data['action'] == "getSchedules"){
	
 
 $sql = "SELECT * from schedule where session_date=25";

 $q = mysqli_query($con,$sql);
 while($row=mysqli_fetch_object($q)){
 
  $message[]=$row;
 }
 
 $messages[]=$message;
 
 $message= array();
 $sql = "SELECT * from schedule where session_date=26";

 $q = mysqli_query($con,$sql);
 while($row=mysqli_fetch_object($q)){
	 
  $message[]=$row;
 }
 $messages[]=$message;
 
 $message= array();
 $sql = "SELECT * from schedule where session_date=27";

 $q = mysqli_query($con,$sql);
 while($row=mysqli_fetch_object($q)){
 
  $message[]=$row;
 }
 $messages[]=$message;
 
 
 echo json_encode($messages);
}

?>