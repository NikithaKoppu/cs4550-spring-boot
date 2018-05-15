function UserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.register = register;
    this.login = login;
    this.url =
        'http://localhost:8080/api/user';
    this.login =
        'http://localhost:8080/api/login';
    var self = this;

    function login(username, password) {
        return fetch(self.login, {
            method: 'POST',
            body: JSON.stringify({username: username, password: password}),
            headers: {
                'content-type': 'application/json'
            }
        });
    }

    function register(username, password) {
    	return fetch(self.url, {
            method: 'POST',
            body: JSON.stringify({username: username, password: password}),
            headers: {
                'content-type': 'application/json'
            }
        });
    }
    
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

   function findUserById(userId) {
       return fetch(
           self.url + '/' + userId)
           .then(function(response) {
               return response.json();
           });
   }

    function updateUser(userId, user) {
       return fetch(self.url + '/' + userId, {
           method: 'PUT',
           body: JSON.stringify(user),
           headers: {
               'content-type': 'application/json'
           }
       }).then(function(response) {
           if(response.bodyUsed) {
               return response.json();
           }
           else{
               return null;
           }
       });
   }
}




