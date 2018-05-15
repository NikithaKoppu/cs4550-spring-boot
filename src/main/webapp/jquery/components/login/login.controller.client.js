
(function () {
    var $usernameFld, $passwordFld;
    var $loginBtn;
    var userService = new UserServiceClient();
    $(main);

    function main() {
    	$usernameFld = $("#usernameFld");
    	$passwordFld = $("#passwordFld");
    	$loginBtn = $("#loginBtn").click(login);
    }
    function login() {
    	if(userService.login($usernameFld, $passwordFld) != null) {
    	    window.location = '../profile/profile.template'
        }
        else {
    	    alert('Invalid login details')
        }
    }
})();
