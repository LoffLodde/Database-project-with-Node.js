function getHomepage() {}

function getLibrary() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("library").innerHTML = this.responseText;
  };
  xhttp.open("GET", "library.html");
  xhttp.send();
}

function getProjects() {}

//Følg oppskriften https://dev.to/williamragstad/how-to-use-ajax-3b5e
//Alt skal skiftes ut med jquery og ajax
