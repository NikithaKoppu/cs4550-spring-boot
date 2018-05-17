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
            userService.register(user).then(direct, alert('Invalid registration'));
        }
        else {
            alert('invalid registration');
        }
    }

    function direct() {
        alert('Valid Login');
        var user = userService.findUserByUsername($("#usernameFld").val());
        window.location.href = '../profile/profile.template.client.html?userId=' + user.id;
    }
})();
