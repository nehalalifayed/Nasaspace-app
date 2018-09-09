<?php
 //header("Access-Control-Allow-Origin: *");
 define('HOST','localhost');
 define('USER','root');
 define('PASS','');
 define('DB','spaceapp_nasadb');
 
 $con = mysqli_connect(HOST,USER,PASS,DB) or die('Unable to Connect');
 
 