(function() {
    var $username;
    var $phone;
    var $email;
    var $dob;
    var $role;
    var userId;
    var userService = new UserServiceClient();

    $(init);

    function init() {
        $username = $("#usernameFld");
        $phone = $("#phoneFld");
        $email = $("#emailFld");
        $dob = $("#dateOfBirthFld");
        $role = $("#roleFld");
        userId = getUrlVars();

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

        userService.updateUser(userId, user)
            .then(success,
                function (response) {
                    $('#alertFail').show('fade');
                    $('#linkCloseFail').click(function() {
                        $('#alertFail').hide('fade');
                    })
                });
    }

    function logout() {
        $('#alertLogout').show();
        setTimeout(function() {window.location.href = "../login/login.template.client.html"}, 220);
    }

    function success(response) {
            $('#alertPass').show('fade');
            $('#linkClosePass').click(function() {
                $('#alertPass').hide('fade');
            });
    }

    //Cited from: https://stackoverflow.com/questions/4656843/jquery-get-querystring-from-url?
    //				utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
    function getUrlVars()
    {
        var hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
            hash = hashes[i].split('=');
        }
        return hash[1];
    }

    function findUserById(userId) {
        userService.findUserById(userId)
            .then(renderUser);
    }

    function renderUser(user) {
        $username.val(user.username);
        $phone.val(user.phone);
        $email.val(user.email);
        $dob.val(user.dateOfBirth);
        $role.val(user.role);
    }

})();
