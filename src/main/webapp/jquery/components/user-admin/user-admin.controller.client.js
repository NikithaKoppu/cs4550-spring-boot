(function () {

	var tbody;
    var template;
    jQuery(main);

    function main() {
        tbody = $('tbody')
        template = jQuery('.template');

        var promise = fetch("http://localhost:8080/api/user");
        promise.then(function (response) {
            return response.json();
        }).then(renderUsers);
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