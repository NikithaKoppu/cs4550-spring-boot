
(function () {
    var $usernameFld, $passwordFld;
    var userService = new UserServiceClient();
    $("#loginBtn").click(login);

    function login() {
        console.log($usernameFld+ " "+ $passwordFld);
        $usernameFld = $("#usernameFld").val();
        $passwordFld = $("#passwordFld").val();
    	if(userService.login($usernameFld, $passwordFld) != null) {
    	    console.log("boom chicka boom");
    	    window.location.href = '../profile/profile.template.client.html'
        }
        else {
    	    alert('Invalid login details')
        }
    }
})();
