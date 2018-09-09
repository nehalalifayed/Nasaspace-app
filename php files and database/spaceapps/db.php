<?php
 header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
 header("Access-Control-Allow-Origin: *");
 define('HOST','localhost');
 define('USER','spaceapp');
 define('PASS','mennaHamza000?');
 define('DB','spaceapp_nasadb_2018');
 
 $con = mysqli_connect(HOST,USER,PASS,DB) or die('Unable to Connect');
 
 