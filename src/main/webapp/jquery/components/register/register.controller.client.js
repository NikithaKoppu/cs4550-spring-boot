(function () {
    var $usernameFld, $passwordFld, $verifyPasswordFld;
    var $registerBtn;
    var userService = new UserServiceClient();
    $(main);

    function main() {
    	$usernameFld = $("#usernameFld");
    	$passwordFld = $("#passwordFld");
    	$verifyPasswordFld = $("#verifyPasswordFld");
    	$registerBtn = $("#registerBtn").click(register);

    }
    function register() {
        if($passwordFld.toString() == $verifyPasswordFld.toString()
            && userService.register($usernameFld, $passwordFld) != null) {
        	window.location = "../profile/profile.template.client.html";
        }
    	else {
            alert('Invalid registration');
        }
    }
})();
