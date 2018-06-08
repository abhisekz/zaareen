<?php
//set error handler
function customError($errno, $errstr) {
  	$out = array(
		"status" => 0,
		"msg" => $errstr,
	);
	header('Content-type: application/json');
	print json_encode($out);
	exit;
}
set_error_handler("customError");
?>