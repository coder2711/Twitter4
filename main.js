function login(){
    username=document.getElementById("name").value;
    localStorage.setItem("name", username);
    window.location="start.html";
}