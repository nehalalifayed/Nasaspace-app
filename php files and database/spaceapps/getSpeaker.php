<?php
include "db.php";
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();
//$message['7laeen'] = "true";
if($data['action'] == "getSpeaker"){
	
$name = $data['name'];


 
 $sql = "SELECT * from event_participants WHERE name='".$name."'";

 $q = mysqli_query($con,$sql);

 if($row=mysqli_fetch_object($q)){


  $message[]=$row;
 }
 echo json_encode($message);
}


?>