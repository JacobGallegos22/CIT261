function appendChildTest() {
  const list = document.getElementById("list");

  const item = document.createElement("LI");

  item.innerHTML = document.getElementById('item').value;

  list.appendChild(item);


}

function insertBeforeTest() {
  const list = document.getElementById('list');

  const item = document.createElement('li');

  item.innerHTML = document.getElementById('item').value;

  list.insertBefore(item, list.childNodes[0]);

}

function removeChildTest() {

  const list = document.getElementById('list');

  list.removeChild(list.childNodes[0]);

}

function replaceChildTest() {
  const list = document.getElementById('list');

  const item = document.createElement('li');

  item.innerHTML = document.getElementById('item').value;

  list.replaceChild(item, list.childNodes[0]);

}
