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
        console.log($usernameFld);
        console.log($passwordFld);

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
                        alert('User already exists')
                    });
        }
        else {
            alert('Passwords do not match');
        }
    }

    function direct(response) {
        alert('valid registration');
        userService.findUserByUsername($("#usernameFld").val()).then(goToProfile);
    }

    function goToProfile(user) {
        console.log(user);
        window.location.href = '../profile/profile.template.client.html?userId=' + user.id;
    }
})();
