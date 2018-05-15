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
        if($passwordFld == $verifyPasswordFld) {
            userService.register($usernameFld, $passwordFld);
        }
    	else {
            alert('Passwords do not match');
        }
    }
})();
