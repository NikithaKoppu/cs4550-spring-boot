
function User(username, password, firstName, lastName, role) {
  this.username = username;
  this.password = password;
  this.firstName = firstName;
  this.lastName = lastName;
  this.role = role;
  
  this.setUsername = setUsername;
  this.getUsername = getUsername;
  this.setPassword = setPassword;
  this.getPassword = getPassword;
  this.setFirstName = setFirstName;
  this.getFirstName = getFirstName;
  this.setLastName = setLastName;
  this.getLastName = getLastName;
  this.setRole = setRole;
  this.getRole = getRole;

  function setUsername(username) {
    this.username = username;
  }
  function getUsername() {
    return this.username;
  }
  function getPassword() {
	return password;
  }
  function setPassword(password) {
	this.password = password;
  }
  function getFirstName() {
	 return firstName;
  }
  function setFirstName(firstName) {
	this.firstName = firstName;
  }
  function getLastName() {
	return lastName;
  }
  function setLastName(lastName) {
	this.lastName = lastName;
  }
  function getRole() {
	return role;
  }
  function setRole(role) {
	this.role = role;
  }
}
