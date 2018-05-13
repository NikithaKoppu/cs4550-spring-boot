function UserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    // this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    // this.updateUser = updateUser;
    this.url =
        'http://localhost:8080/api/user';
    var self = this;

    function findAllUsers() {
        return fetch(self.url).then(function (response) {
            return response.json();
        });
    }


    function createUser(user) {
        return fetch(self.url, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        });
    }

    function deleteUser(userId) {
        return fetch(
            self.url + '/' + userId,
            {method: 'delete'})
            .then(function(response) {
                return response;
            });
    }
}
//
// function findUserById(userId) {
//     return fetch(
//         self.url + '/' + userId);
// }


// function updateUser(userId, user) {
//     return fetch(self.url + '/' + userId, {
//         method: 'PUT',
//         body: JSON.stringify(user)
//     });
// }


