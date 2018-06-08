<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once("surveyHandler.php");
include("configs/errorHandler.php");

$data = json_decode(file_get_contents('php://input'), true);

$name = $data["name"];
$email = $data["email"];
$phone = $data["phone"];
$ordernum = $data["email"];
$orderdate = $data["orderdate"];
$q1 = $data["q1"];
$q2 = $data["q2"];
$q3 = $data["q3"];
$q4 = $data["q4"];
$comments = $data["comments"];

$surveyHandler = new surveyHandler();
$out = $surveyHandler->addSurvey($name,$email,$phone,$ordernum,$orderdate,
							   $q1,$q2,$q3,$q4,$comments);  

echo json_encode($out);
?>
