function sendAjax() {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
              .then(response => response.json())
              .then(data => {
                    document.getElementById('request').innerHTML = data.title;
});
}
