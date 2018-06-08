<?php
Class dbHandler{
	public static function dbConnect() {
		$conn = mysqli_connect("localhost","zaare9ue_root","Z@@reen@Technology","zaare9ue_survey");
		if (!$conn) {
			die("Connection failed: " . mysqli_connect_error());
		}
		return $conn;
	}
	public static function dbDisconnect($conn) {
		mysqli_close($conn);
	}		
}
?>