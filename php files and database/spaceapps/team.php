<?php
include "db.php";
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();


$isValid=true;
$ReturnMsg="This email is not registered, member # ";



$field_name =$data['name'];
$field_member1 = $data['email1'];
$field_member2 =$data['email2'];
$field_member3 =$data['email3'];
$field_member4 =$data['email4'];
$field_member5=$data['email5'];
$field_edu=$data['education'];
$field_challenge = $data['challengeName'];
$field_Idea = $data['idea'];
$field_HW = $data['HW'];
$field_Precentage = $data['work'];
$field_contactNo = $data['contact'];
$field_challengeTrack = $data['track'];
$field_videoURL = $data['video'];

// $field_name ="batman";
// $field_member1 = 's@gmail.com';
// $field_member2 ='s@gmail.com';
// $field_member3 ='s@gmail.com';
// $field_member4 ='';
// $field_member5='';
// $field_edu='school';
// $field_challenge = 'danger';
// $field_Idea = 'blabla';
// $field_HW ='arduino';
// $field_Precentage = '20';
// $field_contactNo = '01120945';
// $field_challengeTrack ='danger';
// $field_videoURL = 'gdfdf@youtube';



if (empty($field_member5)) {
    $field_member5=" ";
}
if (empty($field_member4)) {
    $field_member4=" ";
}




$isValid=true;
if($isValid==true){

/* $sql = "INSERT INTO teamsdata (TeamName, TeamMember1, TeamMember2,TeamMember3, TeamMember4, TeamMember5, ChallengeName, IdeaBrief, PrecentageOfWorkDone, ConactNumber  )
VALUES ('".$field_name."', '".$field_member1."', '".$field_member2."','".$field_member3."','".$field_member4."','".$field_member5."','".$field_challenge."','".$field_Idea."','".$field_Precentage."','".$field_contactNo."')";

 */
 
 //,challenge_track,videoURL 
 
 $sql = "INSERT INTO teams (team_name, team_member1, team_member2,team_member3, team_member4, team_member5,
  eductaion, challenge_name, idea_brief,HW_need,  percentage_of_work_done, contact_number )

VALUES ('{$field_name}', '{$field_member1}', '{$field_member2}','{$field_member3}','{$field_member4}','{$field_member5}',
'{$field_edu}','{$field_challenge}','{$field_Idea}','{$field_HW}','{$field_Precentage}','{$field_contactNo}')";

//,'{$field_challengeTrack}','{$field_videoURL}'

if (mysqli_query($con,$sql)) {
    
    echo '0';
			

} else {
    
        echo '1';
        echo mysqli_error($con);
		
}}
else{
	$ReturnMsg=rtrim($ReturnMsg, ", ");

	echo $ReturnMsg;
}

?>