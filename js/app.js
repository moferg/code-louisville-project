function toggleNav() {
    var x = document.getElementById("hidden");
    if (x.className === "hidden") {
        x.className = " shown";
    }
    else {
        x.className = "hidden";
    }
}
// TODO: Rewrite using jQuery
// TODO: Change header top-margin after clicking hamburger icon