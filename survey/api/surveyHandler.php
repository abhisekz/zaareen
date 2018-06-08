<?php
// This include below is for DB Handler Class - defines the DB connection string, user etc.
include_once('includes/dbconn.php');
//include_once('includes/functions.php');
Class surveyHandler {
	/*----------------------------------------add Order-----------------------*/
	public function addSurvey($name,$email,$phone,$ordernum,$orderdate,
							   $q1,$q2,$q3,$q4,$comments){
		$conn = dbHandler::dbConnect();
		//Create the address row
		$sql = "INSERT INTO surveyresults (name,
										email,
										phone,
										ordernum,
										orderdate,
										q1,
										q2,
										q3,
										q4,
										comments)
								VALUES('$name',
									   '$email',
									   '$phone',
									   '$ordernum',
									   '$orderdate',
										'$q1',
										'$q2',
										'$q3',
										'$q4',
										'$comments')";
		if (mysqli_query($conn, $sql)){
			// get the last inserted id 
			$surveypk = mysqli_insert_id($conn);	
			$out = array(
				"status" => 0,
				"msg" => "Survey Inserted",
				);	
			return $out;
		} else {
			$out = array(
				"status" => mysqli_error($conn),
				"msg" => "Orders not inserted",
				);
			return $out;
		}
	}		
}
?>
