(function () {

	var tbody;
    var template;
    jQuery(main);

    function main() {
        tbody = $('tbody')
        template = jQuery('.template');
        $('#createUser').click(createUser);

        var promise = fetch("http://localhost:8080/api/user");
        promise.then(function (response) {
            return response.json();
        }).then(renderUsers);
    }

    function createUser() {
        console.log('createUser');
        var username = $('#usernameFld').val();
        var password = $('#passwordFld').val();
        var firstName = $('#firstNameFld').val();
        var lastName = $('#lastNameFld').val();

        var user = {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName
        };

        fetch("http://localhost:8080/api/user", {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    function renderUsers(users){
        for(var i=0; i<users.length; i++) {
            var user = users[i];
            console.log(user);
            var clone = template.clone();
            clone.find('.username').html(user.username);
            tbody.append(clone);
        }
    }
})();