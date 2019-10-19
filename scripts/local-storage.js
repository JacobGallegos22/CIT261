function setLocalStorage() {
  const name = document.getElementById('name').value;

  window.localStorage.setItem('name', name);

  // Storing an Object

  const employee = {
    name: "Jacob Gallegos",
    position: "Software Engineer"
  };

  window.localStorage.setItem('employee', JSON.stringify(employee));


}

function getLocalStorage() {

  document.getElementById('getName').innerHTML = window.localStorage.getItem('name');

  const employee = JSON.parse(window.localStorage.getItem('employee'));

  document.getElementById('employeeName').innerHTML = employee.name;
  document.getElementById('employeePosition').innerHTML = employee.position;



}

function clearLocalStorage() {

  window.localStorage.clear();

}

function removeItem() {

  window.localStorage.removeItem('name');

}
