var personObj = {
  firstName : "Pankaj",
  lastName : "Kumar",
  getFirstName : function(){
    return this.firstName;
  },
  getLastName : function(){
    return this.lastName;
  }
}
console.log(personObj.firstName);
console.log(personObj.getFirstName());

function createFunction(){
  var firstName = "Pankaj"; 
  var  lastName = "Kumar";
  var returnObj = {
    getFirstName : function(){
      return firstName;
    },
    getLastName : function(){
      return lastName;
    }
  }
  return returnObj; 
}
var person = createFunction();
console.log(person.firstName);
console.log(person.getFirstName());