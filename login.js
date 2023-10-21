const firebaseConfig = {
    apiKey: "AIzaSyC-iWcCOcfYXnLUo_evxw0mn30T_sBH2XM",
    authDomain: "campusconnect-blogsite.firebaseapp.com",
    databaseURL: "https://campusconnect-blogsite-default-rtdb.firebaseio.com",
    projectId: "campusconnect-blogsite",
    storageBucket: "campusconnect-blogsite.appspot.com",
    messagingSenderId: "881920353055",
    appId: "1:881920353055:web:ad197d658de2166b85c62a",
    measurementId: "G-65EG3K5MYS"
    };
  
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contact-form').addEventListener('Login', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var password = getInputVal('password');
   
    // Save message
    saveMessage(name, email, password);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contact-form').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name,email, password){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      password,
    });
  }