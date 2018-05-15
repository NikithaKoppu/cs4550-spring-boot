
function User(username, password, firstName, lastName) {
  this.username = username;
  this.password = password;
  this.firstName = firstName;
  this.lastName = lastName;
  
  this.setUsername = setUsername;
  this.getUsername = getUsername;
  this.setPassword = setPassword;
  this.getPassword = getPassword;
  this.setFirstName = setFirstName;
  this.getFirstName = getFirstName;
  this.setLastName = setLastName;
  this.getLastName = getLastName;

  function setUsername(username) {
    this.username = username;
  }
  function getUsername() {
    return this.username;
  }
  function getPassword() {
	return password;
  }
  function setPassword(String password) {
	this.password = password;
  }
  function getFirstName() {
	 return firstName;
  }
  function setFirstName(String firstName) {
	this.firstName = firstName;
  }
  function getLastName() {
	return lastName;
  }
  function setLastName(String lastName) {
	this.lastName = lastName;
  }
}
