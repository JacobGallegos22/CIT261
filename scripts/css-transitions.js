function transform() {
  const box = document.getElementsByClassName("box")[0];
  box.classList.add("box-change");
}
function myMove() {
  const elem = document.getElementById("myAnimation");
  let pos = 0;
  const id = setInterval(frame, 10);
  function frame() {
    if (pos === 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

function changeColor() {
  const elem = document.getElementById("myAnimation");
  elem.style.backgroundColor = '#DAF7A6';
  elem.style.height = '30px';
  elem.style.width = '100px';
}
