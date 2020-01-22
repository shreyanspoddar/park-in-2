function myFunction() {
    document.body.style.backgroundColor = "red";
    fetch('https://jsonplaceholder.typicode.com/users')   
.then(response => response.json())   
.then(json => console.log(json))
}

