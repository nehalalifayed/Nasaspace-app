<?php
include "db.php";
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();
//$message['7laeen'] = "true";
//if($data['action'] == "getPromotions"){
	
 $notification="notification";
 $sql = "SELECT * from alerts where type=  '".$notification."' ";

 $q = mysqli_query($con,$sql);
 while($row=mysqli_fetch_object($q)){
  
  $message[]=$row;
 }
 echo json_encode($message);
//}

?>