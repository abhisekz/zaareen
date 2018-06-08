$(function () {

    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator

    $('#contact-form').validator();


    // when the form is submitted
    $('#contact-form').on('submit', function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    // data = JSON object that contact.php returns

                    // we recieve the type of the message: success x danger and apply it to the 
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    // let's compose Bootstrap alert box HTML
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    
                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        // inject the alert to .messages div in our form
                        $('#contact-form').find('.messages').html(alertBox);
                        // empty the form
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});

$(document).ready(function(){
	$("#submitbtn").click(function(){
		updateRecords();
	});
	function updateRecords(){
		var sendInfo = new Object;
		sendInfo.name = $("#name").val();
		sendInfo.email = $("#email").val();
		sendInfo.phone = $("#phone").val();
		sendInfo.ordernum = $("#ordernum").val();
		sendInfo.orderdate = $("#orderdate").val();
		sendInfo.q1 = $("#q1").val();
		sendInfo.q2 = $("#q2").val();
		sendInfo.q3 = $("#q3").val();
		sendInfo.q4 = $("#q4").val();	
		sendInfo.comments = $("#comments").val();		
		sendInfostring = JSON.stringify(sendInfo);
		var request = $.ajax({ 
			type: "POST",
			url: "api/surveyController.php",			
			dataType: "JSON",
			data: sendInfostring,
			success: function(data){
				if (data.status == 0){
					alert("Your data is saved, thanks for the survey");
					location.reload();
				}
			},
			error: function(data){
				alert("There is some error, please call us, we will take your message!");
			}
		});	
	}		
})