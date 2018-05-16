(function () {
    var $userRowTemplate, $tbody;
    var uId;
    var userService = new UserServiceClient();
    jQuery(main);

    function main() {
        $tbody = $('tbody')
        $userRowTemplate = jQuery('.template');
        $('#create').click(createUser);
        findAllUsers();
    }
    
    function findUserById(event) {
    	var searchBtn = $(event.currentTarget);
        var userID = searchBtn.attr('id');
    	userService.findUserById(userId).then(renderUser);
    }

    function findAllUsers() {
        userService.findAllUsers().then(renderUsers);
    }

    function createUser() {
        console.log('createUser');
        var username = $('#usernameFld').val();
        var password = $('#passwordFld').val();
        var firstName = $('#firstNameFld').val();
        var lastName = $('#lastNameFld').val();
        var role = $('#roleFld').val();

        var user = {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            role: role
        };

        userService.createUser(user)
            .then(findAllUsers);
    }
    
    function renderUser(user){
    		$tbody.empty();
            var clone = $userRowTemplate.clone();
            clone.attr('id', user.id);
            
            clone.find('.username')
                .html(user.username);
            clone.find('.password')
            .html(user.password);
            clone.find('.first-name')
            .html(user.firstName);
            clone.find('.last-name')
            .html(user.lastName);
            clone.find('.role')
            .html(user.role);

            clone.find('#remove').click(deleteUser);
            clone.find('#edit').click(selectUser);
            $tbody.append(clone);
    }

    function renderUsers(users){
        $tbody.empty();
        for(var i=0; i<users.length; i++) {
            var user = users[i];
            var clone = $userRowTemplate.clone();
            clone.attr('id', user.id);

            clone.find('.username')
                .html(user.username);
            clone.find('.password')
            .html(user.password);
            clone.find('.first-name')
            .html(user.firstName);
            clone.find('.last-name')
            .html(user.lastName);
            clone.find('.role')
            .html(user.role);

            clone.find('#remove').click(deleteUser);
            clone.find('#edit').click(selectUser);
            $tbody.append(clone);
        }
    }

    function deleteUser(event) {
        var deleteBtn = $(event.currentTarget);
        var userID = deleteBtn.parent().parent().parent().attr('id');
        userService.deleteUser(userID)
            .then(findAllUsers);
    }
    
    function selectUser(event) {
    	var updateBtn = $(event.currentTarget);
        uId = updateBtn.parent().parent().parent().attr('id');
        console.log(uId);

        var username = updateBtn.parent().parent().parent().find(".username").text();
        console.log(username);
        var password = updateBtn.parent().parent().parent().find(".password").text();
        var firstName= updateBtn.parent().parent().parent().find(".first-name").text();
        var lastName= updateBtn.parent().parent().parent().find(".last-name").text();
        var role= updateBtn.parent().parent().parent().find(".role").text();

        $('#usernameFld').val(username);
        console.log($('#usernameFld').val());
        $('#passwordFld').val(password);
        $('#firstNameFld').val(firstName);
        $('#lastNameFld').val(lastName);
        $('#roleFld').val(role);
        
        $(updateUser);
    }

    function updateUser() {
     
        $('#updateFinish').click(function () {
        	var user = {
                    username: $('#usernameFld').val(),
                    password: $('#passwordFld').val(),
                    firstName: $('#firstNameFld').val(),
                    lastName: $('#lastNameFld').val(),
                    role: $('#roleFld').val()
                };
        	userService.updateUser(uId, user).then(findAllUsers);
        });
        }
     

})();