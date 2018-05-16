
(function () {
    var $usernameFld, $passwordFld;
    var userService = new UserServiceClient();
    $(main);

    function main() {
    	$usernameFld = $("#usernameFld");
    	$passwordFld = $("#passwordFld");
    	$("#loginBtn").click(login);
    }
    function login() {
    	if(userService.login($usernameFld, $passwordFld) != null) {
    	    window.location.href = '../profile/profile.template.client.html'
        }
        else {
    	    alert('Invalid login details')
        }
    }
})();
