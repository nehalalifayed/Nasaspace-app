<?php
include "db.php";
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();
//$message['7laeen'] = "true";
if($data['action'] == "getTitles"){
	
 
 $sql = "SELECT * from titles";

 $q = mysqli_query($con,$sql);
 while($row=mysqli_fetch_object($q)){
  $row->{'sub_title'}=substr($row->{'title_body'}, 0, 20);
  $message[]=$row;
 }
 echo json_encode($message);
}

?>