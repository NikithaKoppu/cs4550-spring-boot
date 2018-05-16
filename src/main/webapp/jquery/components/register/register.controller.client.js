(function () {
    var $usernameFld, $passwordFld, $verifyPasswordFld;
    var $registerBtn;
    var userService = new UserServiceClient();
    $("#registerBtn").click(register);

    function main() {
    	$usernameFld = $("#usernameFld").val();
    	$passwordFld = $("#passwordFld").val();
    	$verifyPasswordFld = $("#verifyPasswordFld").val();
    }

    function register() {
        $(main);
        if($passwordFld == $verifyPasswordFld
            && userService.register($usernameFld, $passwordFld) != null) {
        	window.location = "../profile/profile.template.client.html";
        }
    	else {
            alert('Invalid registration');
        }
    }
})();
