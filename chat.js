// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCHjnUjp0s5zcVUGYfZKSStkD4Y1wgWhRQ",
    authDomain: "lets-chat-7247e.firebaseapp.com",
    projectId: "lets-chat-7247e",
    storageBucket: "lets-chat-7247e.appspot.com",
    messagingSenderId: "916033902411",
    appId: "1:916033902411:web:0c8532e9df67f6e5ebbace"
  };
  


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



