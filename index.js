
// Hides the account div and login div depending on the login status.
   
     
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
          uid = user.uid;
        }
      });
      firebase.database().ref(uid).once('value').then(function(snapshot){
        document.getElementById('firstname').innerText = snapshot.val().firstname;
        document.getElementById('lastname').innerText = snapshot.val().lastname;
      });
      firebase.database().ref(uid).set({
        firstname: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value
      }).then(function(){
        console.log('User added!');
      });
  // What happens when logging in.
  function login(){
  
  
    // Pulls data from the input boxes.
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
  
  
    // Sends the data to firebase, and notifies 'errorMessage' incase of errors.
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      document.getElementById('login-error-space').innerHTML = "Error : " + errorMessage;
    });
  
  }
  
  
  
  
  // What happens when logging out.
  function logout(){
    firebase.auth().signOut();
  }
  
  
  
  
  // What happens when signing up.
  function signup() {
  
    // Pulls data from the input boxes.
    var email = document.getElementById('signup-email_field').value;
    var password = document.getElementById('signup-password_field').value;
  
  
    // Sends the data to firebase, and notifies 'errorMessage' incase of errors.
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      document.getElementById('signup-error-space').innerHTML = errorMessage;
  
  
  
  });}
  
  var firstName = document.getElementById('signup-firstName_field').value;
  var lastName = document.getElementById('signup-lastName_field').value;
  
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var userId = user.uid;
        var user = firebase.auth().currentUser;
        console.log(user, proFirstName, proLastName)
        writeUserDataUser(user);
        var proFirstName = window.firstName
        var proLastName = window.lastName
  
      } else {
        // No user is signed in.
      }
    });
  
  
    function writeUserData(user, firstName, lastName) {
      firebase.database().ref('users/' + user.uid).set({
       firstName: "firstName",
       lastName: "lastName"
      });
    }
  
  
  function writeUserData(user, firstName, lastName) {
      console.log(user.uid + " " + firstName + " " + lastName)
  }