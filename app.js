  (function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCuc5xxdS2c51twDF5t5DTWuR0jHUumcrE",
    authDomain: "strict-duck.firebaseapp.com",
    databaseURL: "https://strict-duck.firebaseio.com",
    projectId: "strict-duck",
    storageBucket: "strict-duck.appspot.com",
    messagingSenderId: "231062651686"
  };
  firebase.initializeApp(config);

   
   
    // Get elements
   
        
    var user = firebase.auth().currentUser;
    var database = firebase.database();
    
    var profilePhoto = document.getElementById('profilePhoto');
    var profile = document.getElementById('profile');
    

           
      // Add a realtime listener
      firebase.auth().onAuthStateChanged(firebaseUser => {
          if(user){
                 
            //Change UI
            console.log(user);
           
            
            firebase.database().ref('users/' + firebaseUser.uid ).once('value').then(function(snapshot){
            profilePhoto.src = snapshot.val().profilePhoto;
            profile.innerHTML= snapshot.val().name;
                        
            });
             }
          
          else{
            //Change UI
            console.log('not logged in');
            //перенаправить на страницу регитрации
            window.location = "https://strict-duck.github.io/";

          }
      });
 
      
      
      
      
      
      
  }());