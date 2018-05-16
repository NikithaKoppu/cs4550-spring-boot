(function() {
    var $username;
    var $phone;
    var $email;
    var $dob;
    var $role;
    $("#logoutBtn").click(logout);
    $("#updateBtn").click(updateProfile);
    var userService = new UserServiceClient();

    $(init);

    function init() {
        $username = $("#usernameFld");
        $phone = $("#phoneFld");
        $email = $("#emailFld");
        $dob = $("#dateOfBirthFld");
        $role = $("#roleFld");

        findUserById(12);
    }

    function updateProfile() {
        var user = {
            username: $("#usernameFld").val(),
            phone: $("#phoneFld").val(),
            email: $("#emailFld").val(),
            dateOfBirth: $("#dateOfBirthFld").val(),
            role: $("#roleFld").val()
        };

        userService.updateUser(12, user).then(success);
    }

    function logout() {
        window.location.href = "../login/login.template.client.html"
        alert('You have been logged out');
    }

    function success(response) {
        if(response == null) {
            alert('unable to update')
        }
        else {
            findUserById(12);
            alert('Profile successfully updated');
        }
    }

    function findUserById(userId) {
        userService.findUserById(userId)
            .then(renderUser);
    }

    function renderUser(user) {
        console.log(user);
        $username.val(user.username);
        $phone.val(user.phone);
        $email.val(user.email);
        $dob.val(user.dateOfBirth);
        $role.val(user.role);
    }

})();
