
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
                    $('#alertFail').show('fade');
                    $('#linkCloseFail').click(function() {
                        $('#alertFail').hide('fade');
                    });
            });
        }
    
    function direct() {
        $('#alertPass').show('fade');
        $('#linkClosePass').click(function() {
            $('#alertPass').hide('fade');
        });
        userService.findUserByUsername($("#usernameFld").val()).then(goToProfile);
    }
    
    function goToProfile(user) {
    	window.location.href = '../profile/profile.template.client.html?userId=' + user.id;
    }
})();
