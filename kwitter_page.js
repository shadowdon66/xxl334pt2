//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCMNmaON9Nw27w47HOprZXoUquMgf9hEEA",
      authDomain: "letschat-2addd.firebaseapp.com",
      databaseURL: "https://letschat-2addd-default-rtdb.firebaseio.com",
      projectId: "letschat-2addd",
      storageBucket: "letschat-2addd.appspot.com",
      messagingSenderId: "57960524258",
      appId: "1:57960524258:web:0ceff5b7c21ce220c5f1bb"
};
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
