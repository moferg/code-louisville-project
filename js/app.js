function toggleNav() {
    var x = document.getElementById("hidden");
    if (x.className === "hidden") {
        x.className = " shown";
    }
    else {
        x.className = "hidden";
    }
}