(function() {
    var $username;
    var $phone;
    var $email;
    var $dob;
    var $role;
    var userId = 12;
    var userService = new UserServiceClient();

    $(init);

    function init() {
        $username = $("#usernameFld");
        $phone = $("#phoneFld");
        $email = $("#emailFld");
        $dob = $("#dateOfBirthFld");
        $role = $("#roleFld");

        $("#logoutBtn").click(logout);
        $("#updateBtn").click(updateUser);

        findUserById(userId);
    }

    function updateUser() {
        var user = {
            username: $username.val(),
            phone: $phone.val(),
            email: $email.val(),
            dateOfBirth: $dob.val(),
            role: $role.val()
        };
        console.log(user);

        userService.updateUser(userId, user).then(success);
    }

    function logout() {
        window.location.href = "../login/login.template.client.html"
        alert('You have been logged out');
    }

    function success(response) {
    	response.then(alert('Profile successfully updated'), alert('unable to update'));
    }

    function findUserById(userId) {
        userService.findUserById(userId)
            .then(renderUser);
    }

    function renderUser(user) {
        //console.log(user);
        $username.val(user.username);
        $phone.val(user.phone);
        $email.val(user.email);
        $dob.val(user.dateOfBirth);
        $role.val(user.role);
    }

})();
