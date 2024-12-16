let togglebutton = document.getElementById("togglebutton");
togglebutton.onclick = () =>{
    if (document.body.style.backgroundColor === 'white') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = "white";
        togglebutton.textContent = "Switch to Light Mode"
    } 
    else{
        document.body.style.backgroundColor = 'white';
        document.body.style.color = "black";
        togglebutton.textContent = "Switch to Dark Mode"
    }
}
