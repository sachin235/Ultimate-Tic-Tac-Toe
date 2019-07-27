let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let box = document.getElementById("box");

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

//positioning the box
box.style.top = ((height - 300) / 2) + 'px';   
box.style.left = ((width - 300) / 2) + 'px';
ctx.translate((width - 300) / 2, (height - 300) / 2);

//initializing control variables
let turn = 0;
let win1 = 0, win2 = 0, calc = 1;
let status = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

//function for creating the play area
function playArea() {
  ctx.beginPath();
  ctx.fillStyle = '#cc2828';
  ctx.fillRect(-410, 78, 270, 65);
  ctx.fillRect(-410, 168, 270, 65);
  ctx.fillRect(-35, -200, 380, 100);
  ctx.fillStyle = 'black';
  ctx.font = '75px Times New Roman';
  ctx.fillText('Tic Tac Toe', -25, -125);
  ctx.font = '50px Times New Roman';
  ctx.fillText('X - Player 1', -400, 128);
  ctx.fillText('O - Player 2', -400, 218);
  ctx.lineWidth = 4;
  ctx.moveTo(100, 0);
  ctx.lineTo(100, 300);
  ctx.moveTo(200, 0);
  ctx.lineTo(200, 300);
  ctx.moveTo(0, 100);
  ctx.lineTo(300, 100);
  ctx.moveTo(0, 200);
  ctx.lineTo(300, 200);
  ctx.stroke();
  ctx.fillStyle = '#cc2828';
  ctx.fillRect(430, 125, 310, 65);
  ctx.fillStyle = 'black';
  ctx.font = '50px Times New Roman';
  ctx.fillText("Player 1's Turn", 435, 173)
}

playArea();

document.addEventListener("mousemove", mouseMoveHandler, false);
function mouseMoveHandler(e) {
  var x = (e.clientX - ((width - 300) / 2));
  var y = (e.clientY - ((height - 300) / 2));

  if (calc == 1) {
    if (((x > 0) && (x < 100)) && ((y > 0) && (y < 100)) && (status[0][0] == 0)) {
      ctx.fillStyle = 'black';
      ctx.font = '50px georgia';
      if (turn % 2 == 0)
        ctx.fillText('x', 42, 65);
      else if (turn % 2 != 0)
        ctx.fillText('O', 33, 65);
    }
    else if (status[0][0] == 0) {
      ctx.fillStyle = '#cc2828';
      ctx.fillRect(5, 5, 90, 90);
    }


    if (((x > 100) && (x < 200)) && ((y > 0) && (y < 100)) && (status[0][1] == 0)) {
      ctx.fillStyle = 'black';
      ctx.font = '50px georgia';
      if (turn % 2 == 0)
        ctx.fillText('x', 142, 65);
      else if (turn % 2 != 0)
        ctx.fillText('O', 133, 65);
    }
    else if (status[0][1] == 0) {
      ctx.fillStyle = '#cc2828';
      ctx.fillRect(105, 5, 90, 90);
    }


    if (((x > 200) && (x < 300)) && ((y > 0) && (y < 100)) && (status[0][2] == 0)) {
      ctx.fillStyle = 'black';
      ctx.font = '50px georgia';
      if (turn % 2 == 0)
        ctx.fillText('x', 242, 65);
      else if (turn % 2 != 0)
        ctx.fillText('O', 233, 65);
    }
    else if (status[0][2] == 0) {
      ctx.fillStyle = '#cc2828';
      ctx.fillRect(205, 5, 90, 90);
    }


    if (((x > 0) && (x < 100)) && ((y > 100) && (y < 200)) && (status[1][0] == 0)) {
      ctx.fillStyle = 'black';
      ctx.font = '50px georgia';
      if (turn % 2 == 0)
        ctx.fillText('x', 42, 165);

      else if (turn % 2 != 0)
        ctx.fillText('O', 33, 165);
    }
    else if (status[1][0] == 0) {
      ctx.fillStyle = '#cc2828';
      ctx.fillRect(5, 105, 90, 90);
    }


    if (((x > 100) && (x < 200)) && ((y > 100) && (y < 200)) && (status[1][1] == 0)) {
      ctx.fillStyle = 'black';
      ctx.font = '50px georgia';
      if (turn % 2 == 0)
        ctx.fillText('x', 142, 165);
      else if (turn % 2 != 0)
        ctx.fillText('O', 133, 165);
    }
    else if (status[1][1] == 0) {
      ctx.fillStyle = '#cc2828';
      ctx.fillRect(105, 105, 90, 90);
    }


    if (((x > 200) && (x < 300)) && ((y > 100) && (y < 200)) && (status[1][2] == 0)) {
      ctx.fillStyle = 'black';
      ctx.font = '50px georgia';
      if (turn % 2 == 0)
        ctx.fillText('x', 242, 165);
      else if (turn % 2 != 0)
        ctx.fillText('O', 233, 165);
    }
    else if (status[1][2] == 0) {
      ctx.fillStyle = '#cc2828';
      ctx.fillRect(205, 105, 90, 90);
    }


    if (((x > 0) && (x < 100)) && ((y > 200) && (y < 300)) && (status[2][0] == 0)) {
      ctx.fillStyle = 'black';
      ctx.font = '50px georgia';
      if (turn % 2 == 0)
        ctx.fillText('x', 42, 265);
      else if (turn % 2 != 0)
        ctx.fillText('O', 33, 265);
    }
    else if (status[2][0] == 0) {
      ctx.fillStyle = '#cc2828';
      ctx.fillRect(5, 205, 90, 90);
    }


    if (((x > 100) && (x < 200)) && ((y > 200) && (y < 300)) && (status[2][1] == 0)) {
      ctx.fillStyle = 'black';
      ctx.font = '50px georgia';
      if (turn % 2 == 0)
        ctx.fillText('x', 142, 265);
      else if (turn % 2 != 0)
        ctx.fillText('O', 133, 265);
    }
    else if (status[2][1] == 0) {
      ctx.fillStyle = '#cc2828';
      ctx.fillRect(105, 205, 90, 90);
    }


    if (((x > 200) && (x < 300)) && ((y > 200) && (y < 300)) && (status[2][2] == 0)) {
      ctx.fillStyle = 'black';
      ctx.font = '50px georgia';
      if (turn % 2 == 0)
        ctx.fillText('x', 242, 265);
      else if (turn % 2 != 0)
        ctx.fillText('O', 233, 265);
    }
    else if (status[2][2] == 0) {
      ctx.fillStyle = '#cc2828';
      ctx.fillRect(205, 205, 90, 90);
    }
  }

  if (calc == 1) {
    box.onclick = function disp() {
      if (turn % 2 == 0) {
        if (((x > 0) && (x < 100)) && ((y > 0) && (y < 100)) && (status[0][0] == 0)) {
          status[0][0] = 1;
          turn++;
        }
      }
      else if (turn % 2 != 0) {
        if (((x > 0) && (x < 100)) && ((y > 0) && (y < 100)) && (status[0][0] == 0)) {
          status[0][0] = 2;
          turn++;
        }
      }


      if (turn % 2 == 0) {
        if (((x > 100) && (x < 200)) && ((y > 0) && (y < 100)) && (status[0][1] == 0)) {
          status[0][1] = 1;
          turn++;
        }
      }
      else if (turn % 2 != 0) {
        if (((x > 100) && (x < 200)) && ((y > 0) && (y < 100)) && (status[0][1] == 0)) {
          status[0][1] = 2;
          turn++;
        }
      }


      if (turn % 2 == 0) {
        if (((x > 200) && (x < 300)) && ((y > 0) && (y < 100)) && (status[0][2] == 0)) {
          status[0][2] = 1;
          turn++;
        }
      }
      else if (turn % 2 != 0) {
        if (((x > 200) && (x < 300)) && ((y > 0) && (y < 100)) && (status[0][2] == 0)) {
          status[0][2] = 2;
          turn++;
        }
      }


      if (turn % 2 == 0) {
        if (((x > 0) && (x < 100)) && ((y > 100) && (y < 200)) && (status[1][0] == 0)) {
          status[1][0] = 1;
          turn++;
        }
      }
      else if (turn % 2 != 0) {
        if (((x > 0) && (x < 100)) && ((y > 100) && (y < 200)) && (status[1][0] == 0)) {
          status[1][0] = 2;
          turn++;
        }
      }


      if (turn % 2 == 0) {
        if (((x > 100) && (x < 200)) && ((y > 100) && (y < 200)) && (status[1][1] == 0)) {
          status[1][1] = 1;
          turn++;
        }
      }
      else if (turn % 2 != 0) {
        if (((x > 100) && (x < 200)) && ((y > 100) && (y < 200)) && (status[1][1] == 0)) {
          status[1][1] = 2;
          turn++;
        }
      }

      if (turn % 2 == 0) {
        if (((x > 200) && (x < 300)) && ((y > 100) && (y < 200)) && (status[1][2] == 0)) {
          status[1][2] = 1;
          turn++;
        }
      }
      else if (turn % 2 != 0) {
        if (((x > 200) && (x < 300)) && ((y > 100) && (y < 200)) && (status[1][2] == 0)) {
          status[1][2] = 2;
          turn++;
        }
      }

      if (turn % 2 == 0) {
        if (((x > 0) && (x < 100)) && ((y > 200) && (y < 300)) && (status[2][0] == 0)) {
          status[2][0] = 1;
          turn++;
        }
      }
      else if (turn % 2 != 0) {
        if (((x > 0) && (x < 100)) && ((y > 200) && (y < 300)) && (status[2][0] == 0)) {
          status[2][0] = 2;
          turn++;
        }
      }

      if (turn % 2 == 0) {
        if (((x > 100) && (x < 200)) && ((y > 200) && (y < 300)) && (status[2][1] == 0)) {
          status[2][1] = 1;
          turn++;
        }
      }
      else if (turn % 2 != 0) {
        if (((x > 100) && (x < 200)) && ((y > 200) && (y < 300)) && (status[2][1] == 0)) {
          status[2][1] = 2;
          turn++;
        }
      }

      if (turn % 2 == 0) {
        if (((x > 200) && (x < 300)) && ((y > 200) && (y < 300)) && (status[2][2] == 0)) {
          status[2][2] = 1;
          turn++;
        }
      }
      else if (turn % 2 != 0) {
        if (((x > 200) && (x < 300)) && ((y > 200) && (y < 300)) && (status[2][2] == 0)) {
          status[2][2] = 2;
          turn++;
        }
      }
      check();
      if (turn % 2 == 0) {
        ctx.fillStyle = '#cc2828';
        ctx.fillRect(430, 125, 310, 65);
        ctx.fillStyle = 'black';
        ctx.font = '50px Times New Roman';
        ctx.fillText("Player 1's Turn", 435, 173);
      }
      else if (turn % 2 != 0) {
        ctx.fillStyle = '#cc2828';
        ctx.fillRect(430, 125, 310, 65);
        ctx.fillStyle = 'black';
        ctx.font = '50px Times New Roman';
        ctx.fillText("Player 2's Turn", 435, 173);
      }
    }
  }
}

function check() {
  for (var i = 0; i < 3 && calc == 1; i++) {
    for (var j = 0; j < 3; j++) {
      if (status[i][j] == 1)
        win1++;
      else if (status[i][j] == 2)
        win2++;
    }
    if (win1 == 3) {
      dispWin1();
      calc = 0;
    }
    else if (win2 == 3) {
      dispWin2();
      calc = 0;
    }
    else
      win1 = win2 = 0;
  }
  for (var j = 0; j < 3 && calc == 1; j++) {
    for (var i = 0; i < 3; i++) {
      if (status[i][j] == 1)
        win1++;
      else if (status[i][j] == 2)
        win2++;
    }
    if (win1 == 3) {
      dispWin1();
      calc = 0;
    }
    else if (win2 == 3) {
      dispWin2();
      calc = 0;
    }
    else
      win1 = win2 = 0;
  }
  for (var i = 0; i < 3 && calc == 1; i++) {
    if (status[i][i] == 1)
      win1++;
    else if (status[i][i] == 2)
      win2++;
  }
  if (win1 == 3 && calc == 1) {
    dispWin1();
    calc = 0;
  }
  else if (win2 == 3 && calc == 1) {
    dispWin2();
    calc = 0;
  }
  else if (calc == 1)
    win1 = win2 = 0;
  for (var i = 2, j = 0; i >= 0 && j < 3 && calc == 1; i-- , j++) {
    if (status[i][j] == 1)
      win1++;
    else if (status[i][j] == 2)
      win2++;
  }
  if (win1 == 3 && calc == 1) {
    dispWin1();
    calc = 0;
  }
  else if (win2 == 3 && calc == 1) {
    dispWin2();
    calc = 0;
  }
  else if (calc == 1)
    win1 = win2 = 0;
  if (turn == 9 && calc == 1) {
    ctx.fillStyle = '#cc2828';
    ctx.fillRect(0, 350, 300, 65);
    ctx.fillStyle = 'black';
    ctx.font = '50px Times New Roman';
    ctx.fillText("Draw", 95, 400);
    gameOver();
  }
}
function dispWin1() {
  ctx.fillStyle = '#cc2828';
  ctx.fillRect(0, 350, 300, 65);
  ctx.fillStyle = 'black';
  ctx.font = '50px Times New Roman';
  ctx.fillText("Player 1 Wins", 10, 400);
  gameOver();
}
function dispWin2() {
  ctx.fillStyle = '#cc2828';
  ctx.fillRect(0, 350, 300, 65);
  ctx.fillStyle = 'black';
  ctx.font = '50px Times New Roman';
  ctx.fillText("Player 2 Wins", 10, 400);
  gameOver();
}
function gameOver() {
  ctx.fillStyle = '#cc2828';
  ctx.fillRect(25, -65, 250, 50);
  ctx.fillStyle = 'black';
  ctx.font = '50px Times New Roman';
  ctx.fillText("Game Over", 30, -25);
  document.addEventListener('keyup', function (event) {
    var key = event.key || event.keyCode;
    if (key === 'Enter' || key === 13) {
      document.location.reload();
    }
  });
}