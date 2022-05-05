const nameButton = document.getElementById("name");
nameButton.addEventListener("click", clickButtonLisiner)

function clickButtonLisiner(){
alert("Arvydas");
}

const backgroundButton = document.getElementById("background");
nameButton.addEventListener("click", clickBackgroundButtonLisiner)

function clickBackgroundButtonLisiner(){
document.body.style.backgroundColor = "Blue";
}


const loginButton = document.getElementById("login");
loginButton.addEventListener.Listener("click", loginHandler);

funcion loginHandler() {
    const h1Node = document.querySelector("h1");
    h1Node.textContent = "Hello, Arvydas";
    loginButton.textContent = "Log Out";

}