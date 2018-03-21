function toggleNav() {
    var nav = document.getElementById("hidden");
    if (nav.className === "hidden") {
        nav.className = " shown";
    }
    else {
        nav.className = "hidden";
    }
}
// TODO: Rewrite using jQuery
// TODO: Change header top-margin after clicking hamburger icon