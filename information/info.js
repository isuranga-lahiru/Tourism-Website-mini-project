function showGeo() {
    var x = document.getElementById("geo");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }

  function showHstr() {
    var x = document.getElementById("hstr");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }

  function showCltr() {
    var x = document.getElementById("cltr");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }

  function showPpl() {
    var x = document.getElementById("ppl");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }

  function showProvince() {
    var x = document.getElementById("province");
    if (x.style.display === "none") {
      x.style.display = "grid";
    } else {
      x.style.display = "none";
    }
  }

//hide section

function showLessGeo(){
   document.getElementById("geo").style.display = "none";
}

function showLessHstr(){
  document.getElementById("hstr").style.display = "none";
}

function showLessCltr(){
  document.getElementById("cltr").style.display = "none";
}

function showLessPpl(){
  document.getElementById("ppl").style.display = "none";
}

function showLessProvince(){
  document.getElementById("province").style.display ="none";
}