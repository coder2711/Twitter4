var firebaseConfig = {
    apiKey: "AIzaSyAfUrztVrOC5BkTOOSdGqQ2pZDcZyOEvsU",
    authDomain: "twitter-25372.firebaseapp.com",
    databaseURL: "https://twitter-25372-default-rtdb.firebaseio.com",
    projectId: "twitter-25372",
    storageBucket: "twitter-25372.appspot.com",
    messagingSenderId: "687348250179",
    appId: "1:687348250179:web:41fa888eb880d1ed5e06f6",
    measurementId: "G-LNX6TQ5GF6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("name");
document.getElementById("welcome").innerHTML= "Welcome "+username+" !!!!";
function add(){
    room_name = document.getElementById("room_name").value;
    localStorage.setItem("room_name" , room_name);
    
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"   
     });
     window.location = "chat.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   
   console.log("room name = " + Room_names);
   row= "<div class='room_name' id="+Room_names+" onclick='redirectToPage(this.id)'>"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML += row;
   
   });});}
getData();

function redirectToPage(name){
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location = "chat.html";
}

function logout(){
    localStorage.removeItem("room_name");
    localStorage.removeItem("name");
    window.location="index.html";
}