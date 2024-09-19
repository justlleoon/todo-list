function newThing() {
    let li = document.createElement("li");
    let itemValue = document.getElementById("something").value;
    let t = document.createTextNode(itemValue)
    li.appendChild.t
    if (itemValue === "") {
        alert("You need to write something to do!")
    } else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("myInput").value = "";
}