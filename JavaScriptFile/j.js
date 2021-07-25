const cells = document.querySelectorAll("td");
document.getElementById("div10").style.backgroundColor = "red";

var table = document.getElementById("table"),
  rIndex,
  cIndex;
// var im=Array.from(document.querySelectorAll("slot"));
var color = "a";
var c2;
// var table1 = document.getElementById("table").getAttribute("value"),rIndex,cIndex;
var table1 = Array.from(document.querySelectorAll(".slot"));
var table2 = document.querySelectorAll(".slot");

// alert(document.getElementById("in1").getAttributeNames)
for (var i = 0; i < table.rows.length; i++) {
  // row cells
  for (var j = 0; j < table.rows[i].cells.length; j++) {
    table.rows[i].cells[j].onclick = function () {
      // alert(i);

      rIndex = this.parentElement.rowIndex;

      cIndex = this.cellIndex;

      console.log("Row : " + rIndex + " , Cell : " + cIndex);

      var t1, t2;
      t1 = rIndex;
      t2 = 5;
      var sd="d";
      for (var oe = 0; oe < 6; oe++) {
        for (var we = 0; we < 7; we++) {
          if( table.rows[oe].cells[we].getAttribute("col")=="a"){
          sd="w"; }

        }}
        if(sd=="d")document.getElementById("div-win1").innerHTML = "Draw";
      for (var v = 0; v < 6; v++) {

        if (table.rows[t2].cells[cIndex].getAttribute("value") == "1") {
          t2--;
          continue;
        }
       
        if (table.rows[t2].cells[cIndex].getAttribute("value") == "0") {
          if (color > "red") {
            table.rows[t2].cells[cIndex].style.backgroundColor = "yellow";
            color = "red";
            document.getElementById("div10").style.backgroundColor = color;
            document.getElementById("player_number").innerText="Player 1";

            table.rows[t2].cells[cIndex].setAttribute("col", "y");
            table.rows[t2].cells[cIndex].setAttribute("value", "1");
            if (horizantalCheck()) {
              return (document.getElementById("div-win").innerHTML = "wins !");
            }
            if (verticalCheck()) {
              return (document.getElementById("div-win").innerHTML = "wins !");
            }
            if (diagonalCheck()) {
              return (document.getElementById("div-win").innerHTML = "wins !");
            }
            if (inversediagonalCheck()) {
              return (document.getElementById("div-win").innerHTML = "wins !");
            }
            return;
          }
          else {
            table.rows[t2].cells[cIndex].style.backgroundColor = "red";
            table.rows[t2].cells[cIndex].setAttribute("value", "1");
            table.rows[t2].cells[cIndex].setAttribute("col", "r");

            color = "yellow";
            document.getElementById("div10").style.backgroundColor = color;
          
            document.getElementById("player_number").innerText="Player 2";

            if (horizantalCheck()) {
              return (document.getElementById("div-win").innerHTML = "wins !");
            }
            if (verticalCheck()) {
              return (document.getElementById("div-win").innerHTML = "wins !");
            }
            if (diagonalCheck()) {
              return (document.getElementById("div-win").innerHTML = "wins !");
            }
            if (inversediagonalCheck()) {
              return (document.getElementById("div-win").innerHTML = "wins !");
            }

            return;
          }
        }
       
          // alert(table.rows[0].cells[1].getAttribute("col"));
      }
    };
  }
}
function colorCheck(c1, c2, c3, c4) {
  if (c1 == c2 && c1 == c3 && c1 == c4 && c1 != "a") {
    table.addEventListener("click", handler, true);

    function handler(e) {
      e.stopPropagation();
      e.preventDefault();
    }
    return true;
  } else {
    return false;
  }
}
function inversediagonalCheck() {
  for (var o = 3; o < 6; o++) {
    for (var w = 3; w < 7; w++) {
      if (
        colorCheck(
          table.rows[o].cells[w].getAttribute("col"),
          table.rows[o - 1].cells[w - 1].getAttribute("col"),
          table.rows[o - 2].cells[w - 2].getAttribute("col"),
          table.rows[o - 3].cells[w - 3].getAttribute("col")
        )
      ) {
        // alert("asas");
        table.rows[o].cells[w].style.backgroundColor = "#10c2ef";
        table.rows[o - 1].cells[w - 1].style.backgroundColor = "#10c2ef";
        table.rows[o - 2].cells[w - 2].style.backgroundColor = "#10c2ef ";
        table.rows[o - 3].cells[w - 3].style.backgroundColor = "#10c2ef";
        var dd = table.rows[o - 3].cells[w - 3].getAttribute("col");
        if (dd == "r") document.getElementById("div-win1").innerHTML = "red";
        else document.getElementById("div-win1").innerHTML = "yellow";

        return true;
      }
    }
  }
}
function diagonalCheck() {
  for (var o = 3; o < 6; o++) {
    for (var w = 0; w < 4; w++) {
      if (
        colorCheck(
          table.rows[o].cells[w].getAttribute("col"),
          table.rows[o - 1].cells[w + 1].getAttribute("col"),
          table.rows[o - 2].cells[w + 2].getAttribute("col"),
          table.rows[o - 3].cells[w + 3].getAttribute("col")
        )
      ) {
        // alert("asas");
        table.rows[o].cells[w].style.backgroundColor = "#10c2ef";
        table.rows[o - 1].cells[w + 1].style.backgroundColor = "#10c2ef";
        table.rows[o - 2].cells[w + 2].style.backgroundColor = "#10c2ef ";
        table.rows[o - 3].cells[w + 3].style.backgroundColor = "#10c2ef";
        var dd = table.rows[o - 3].cells[w + 3].getAttribute("col");
        if (dd == "r") document.getElementById("div-win1").innerHTML = "red";
        else document.getElementById("div-win1").innerHTML = "yellow";

        return true;
      }
    }
  }
}
function horizantalCheck() {
  for (var o = 0; o < 6; o++) {
    for (var w = 0; w < 4; w++) {
      if (
        colorCheck(
          table.rows[o].cells[w].getAttribute("col"),
          table.rows[o].cells[w + 1].getAttribute("col"),
          table.rows[o].cells[w + 2].getAttribute("col"),
          table.rows[o].cells[w + 3].getAttribute("col")
        )
      ) {
        // alert("asas");
        table.rows[o].cells[w].style.backgroundColor = "#10c2ef";
        table.rows[o].cells[w + 1].style.backgroundColor = "#10c2ef";
        table.rows[o].cells[w + 2].style.backgroundColor = "#10c2ef ";
        table.rows[o].cells[w + 3].style.backgroundColor = "#10c2ef";
        var dd = table.rows[o].cells[w + 3].getAttribute("col");
        if (dd == "r") document.getElementById("div-win1").innerHTML = "red";
        else document.getElementById("div-win1").innerHTML = "yellow";

        return true;
      }
    }
  }
}
function verticalCheck() {
  for (var o = 0; o < 7; o++) {
    for (var w = 0; w < 3; w++) {
      if (
        colorCheck(
          table.rows[w].cells[o].getAttribute("col"),
          table.rows[w + 1].cells[o].getAttribute("col"),
          table.rows[w + 2].cells[o].getAttribute("col"),
          table.rows[w + 3].cells[o].getAttribute("col")
        )
      ) {
        // alert("asas");
        table.rows[w].cells[o].style.backgroundColor = "#10c2ef";
        table.rows[w + 1].cells[o].style.backgroundColor = "#10c2ef";
        table.rows[w + 2].cells[o].style.backgroundColor = "#10c2ef ";
        table.rows[w + 3].cells[o].style.backgroundColor = "#10c2ef";
        var dd = table.rows[w + 1].cells[o].getAttribute("col");
        if (dd == "r") document.getElementById("div-win1").innerHTML = "red";
        else document.getElementById("div-win1").innerHTML = "yellow";

        return true;
      }
    }
  }
}

function reset() {
  for (var o = 0; o < 6; o++) {
    for (var w = 0; w < 7; w++) {
      table.rows[o].cells[w].setAttribute("value", "0");
      table.rows[o].cells[w].setAttribute("col", "a");
      table.rows[o].cells[w].style.backgroundColor = "white";
      document.getElementById("div-win").innerHTML = " ";
      document.getElementById("div-win1").innerHTML = " ";
    }
  }
  window.location.reload();
}
function back_to_game() {
  window.location.replace("start.html");
 
}