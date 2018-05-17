
(function () {
    var userService;
    $(main);
    
    function main() {
    	userService = new UserServiceClient();
        $("#loginBtn").click(login);
    }

    function login() {
        console.log('entering login');
        var $usernameFld = $("#usernameFld").val();
        var $passwordFld = $("#passwordFld").val();
        console.log($usernameFld+ " "+ $passwordFld);

        userService.login($usernameFld, $passwordFld).then(direct,
            alert("invalid login details"));
        }
    
    function direct() {
        var user = userService.findUserByUsername($("#usernameFld").val());
    	window.location.href = '../profile/profile.template.client.html?userId=' + user.id;
    }
})();
