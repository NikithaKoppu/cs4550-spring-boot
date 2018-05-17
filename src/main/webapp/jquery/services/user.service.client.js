function UserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.findUserByUsername = findUserByUsername;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.register = register;
    this.login = login;
    this.url =
        'http://localhost:8080/api/user';
    this.loginURL =
        'http://localhost:8080/api/login';
    this.registerURL =
        'http://localhost:8080/api/register';
    this.profileURL =
        'http://localhost:8080/api/profile';
    var self = this;

    function login(username, password) {
        return fetch(self.loginURL, {
            method: 'POST',
            body: JSON.stringify({username: username, password: password}),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response) {
                return response.json();
        });
    }

    function register(user) {
    	return fetch(self.registerURL, {
            method: 'POST',
            credentials: 'same-origin',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response) {
            if(response.bodyUsed) {
                console.log("I am responding to u");
                return response.json();
            }
            else{
                return null;
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

    function findUserByUsername(username) {
        return fetch(
            self.registerURL + '/' + username)
            .then(function(response) {
                return response.json();
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
    	   return response;
       });
   }
}




