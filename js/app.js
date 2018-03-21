function toggleNav() {

    var nav = document.getElementById("hidden");
    var heading = document.getElementById("content-heading");
    // Function makes heading move in response to hamburger menu opening
    
    if (nav.className === "hidden") {
        nav.className = " shown";
        heading.style.marginTop = "250px";
    }
    else {
        nav.className = "hidden";
        heading.style.marginTop = "initial";
    }
}
// TODO: Rewrite using jQuery