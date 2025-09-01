  const boxes = document.querySelectorAll(".box");
    const resetBtn = document.getElementById("reset");
    const msg = document.getElementById("msg");

    let turn = "X";
    let count = 0;  

    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],  
      [0, 3, 6], [1, 4, 7], [2, 5, 8],  
      [0, 4, 8], [2, 4, 6]               
    ];

    function checkWinner() {
      for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (boxes[a].innerText && 
            boxes[a].innerText === boxes[b].innerText && 
            boxes[a].innerText === boxes[c].innerText) {
          msg.innerText = `${boxes[a].innerText} Wins! 🎉`;
          disableBoxes();
          return true;
        }
      }
      if (count === 9) {
        msg.innerText = "It's a Draw 😅";
      }
      return false;
    }

    function disableBoxes() {
      boxes.forEach(box => box.disabled = true);
    }

    function enableBoxes() {
      boxes.forEach(box => {
        box.disabled = false;
        box.innerText = "";
      });
    }

    boxes.forEach(box => {
      box.addEventListener("click", () => {
        if (!box.innerText) {
          box.innerText = turn;
          turn = turn === "X" ? "O" : "X";
          count++;
          checkWinner();
        }
      });
    });

    resetBtn.addEventListener("click", () => {
      turn = "X";
      count = 0;
      msg.innerText = "";
      enableBoxes();
    });