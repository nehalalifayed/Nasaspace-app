<?php
include "db.php";
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();
$messages= array();
//$message['7laeen'] = "true";
if($data['action'] == "getSpeakers"){
	
 
 $sql = "SELECT * from event_participants where type='speaker'";

 $q = mysqli_query($con,$sql);
 while($row=mysqli_fetch_object($q)){
 
  $message[]=$row;
 }
 
 $messages[]=$message;
 
 $message= array();
 $sql = "SELECT * from event_participants where type='mentor'";

 $q = mysqli_query($con,$sql);
 while($row=mysqli_fetch_object($q)){
	 
  $message[]=$row;
 }
 $messages[]=$message;
 
 $message= array();
 $sql = "SELECT * from event_participants where type='judge'";

 $q = mysqli_query($con,$sql);
 while($row=mysqli_fetch_object($q)){
 
  $message[]=$row;
 }
 $messages[]=$message;
 
 
 echo json_encode($messages);
}

?>