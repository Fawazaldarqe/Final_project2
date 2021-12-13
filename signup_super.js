//signup function
function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
  
    auth.createUserWithEmailAndPassword(email.value,password.value).then(cred=> {

     


      var user = firebase.auth().currentUser;
         // save in collection's Admin 
    /*db.collection("Users").doc(cred.user.email).set({
       
  
      email :  user.email
  
        },
  
       
    );*/
     // var email = user.email;
      return db.collection('Users').doc(cred.user.email).set({
        email : user.email
         });
       
      })
    //
    .catch(e=>alert(e.message));
       alert("SignUp Successfully");
  
     // When no errors create the account
  
    
  
  }
  
    //signOut
  
    /*function signOut(){
      auth.signOut();
      alert("SignOut Successfully from System");
    }*/
  
    ///jjjji
  
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        
        var email = user.email;
        //alert("Active user "+email);
        db.collection("Users").onSnapshot(snapshot=>{
          const Favorite =(snapshot.docs);
        })
      }else{
        console.log("No Active user Found")
      }
    }) 