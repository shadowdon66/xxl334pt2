const firebaseConfig = {
      apiKey: "AIzaSyCMNmaON9Nw27w47HOprZXoUquMgf9hEEA",
      authDomain: "letschat-2addd.firebaseapp.com",
      projectId: "letschat-2addd",
      storageBucket: "letschat-2addd.appspot.com",
      messagingSenderId: "57960524258",
      appId: "1:57960524258:web:0ceff5b7c21ce220c5f1bb"
};
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}
function getData(){
    firebase.database().ref("/").on('value',function(snapshot)
     {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_name);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
//End code
});});}
getData();
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}