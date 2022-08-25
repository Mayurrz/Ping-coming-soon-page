function handleSubmit(event) {
    if (document.getElementById("mailInput").value == "") {
        document.getElementById("output").innerText = "Error, this field cannot be empty."
        document.getElementById("output").style.color = "hsl(354, 100%, 66%)";
        document.getElementById("output").style.margin = "10px 0 0";
        document.getElementById("mailInput").style.border = "1px solid hsl(354, 100%, 66%)";
    } else if (document.getElementById("mailInput").value.substring([document.getElementById("mailInput").value.length - 4]) !== ".com") {
        event.preventDefault(); //To prevent default reloading
        document.getElementById("output").innerText = "Kindly input a valid email address."
        document.getElementById("output").style.color = "hsl(354, 100%, 66%)";
        document.getElementById("output").style.margin = "10px 0 0";
        document.getElementById("mailInput").style.border = "1px solid hsl(354, 100%, 66%)";
    } else {
        console.log("Here we go!");
        event.preventDefault(); //To prevent default reloading
        document.getElementById("output").innerText = "You have successfully signed up to this newsletter"
        document.getElementById("mailInput").value = "";
        document.getElementById("mailInput").style.border = "1px solid hsl(0, 0%, 59%)";
        document.getElementById("output").style.color = "green";
        document.getElementById("output").style.margin = "10px 0 0";
    }
}
//Button for the form
document.getElementById("submit").addEventListener("click", handleSubmit);