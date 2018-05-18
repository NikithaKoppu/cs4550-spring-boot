(function () {
    var userService;
    $(main);

    function main() {
        userService = new UserServiceClient();
        $("#registerBtn").click(register);
    }

    function register() {
        var $usernameFld = $("#usernameFld").val();
        var $passwordFld = $("#passwordFld").val();
        var $verifyPasswordFld = $("#verifyPasswordFld").val();

        var user = {
            username: $usernameFld,
            password: $passwordFld
        }
        if($passwordFld == $verifyPasswordFld) {
            userService
                .register(user)
                .then(
                    direct,
                    function(response) {
                        $('#alertFail').show('fade');
                        $('#linkCloseFail').click(function() {
                            $('#alertFail').hide('fade');
                        });
                    });
        }
        else {
            $('#alertFailPassword').show('fade');
            $('#linkCloseFailPass').click(function() {
                $('#alertFailPassword').hide('fade');
            });
        }
    }

    function direct(response) {
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
