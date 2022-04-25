// Header

// step 1
const header = new XMLHttpRequest();

// step 2
header.onreadystatechange = function () {
  const navbar = document.querySelector("#navbar");

  navbar.innerHTML = this.responseText;
};

// step 3
header.open("GET", "/html/navbar.html", true);

// step 4
header.send();

// Footer

const footer = new XMLHttpRequest();

footer.onreadystatechange = function () {
  const foot = document.querySelector(".footer1");

  foot.innerHTML = this.responseText;
};

footer.open("GET", "/html/footer.html", true);
footer.send();
