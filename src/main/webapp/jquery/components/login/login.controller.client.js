
(function () {
    var userService;
    $(main);
    
    function main() {
    	userService = new UserServiceClient();
        $("#loginBtn").click(login);
    }

    function login() {
        console.log('entering login')
        var $usernameFld = $("#usernameFld").val();
        var $passwordFld = $("#passwordFld").val();

        userService
            .login($usernameFld, $passwordFld)
            .then(direct,
                function (reason) {
                    alert("invalid login details")
            });
        }
    
    function direct() {
        alert('valid login');
        userService.findUserByUsername($("#usernameFld").val()).then(goToProfile);
    }
    
    function goToProfile(user) {
    	console.log(user);
    	window.location.href = '../profile/profile.template.client.html?userId=' + user.id;
    }
})();
