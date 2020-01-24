var value=0;
let slots=[1,2,3,4,5,6,7,8]
document.body.addEventListener('click',(e)=>{
        console.log(e.target.id);
        switch(e.target.id)
        {
            
        }
});


function btncolor2(){
    var property = document.getElementById("2");
     if(value==0){
         property.style.backgroundColor ="red";
           
         value= 1;
    }else{
         property.style.backgroundColor = "green";
         value=0;        
        }
        }
function btncolor3(){
    var property = document.getElementById("3");
        if(value==0){
            property.style.backgroundColor ="red";
               
            value= 1;
         }else{
            property.style.backgroundColor = "green";
            value=0;        
            }
            }
function btncolor4(){
    var property = document.getElementById("4");
        if(value==0){
             property.style.backgroundColor ="red";
                   
             value= 1;
       }else{
             property.style.backgroundColor = "green";
             value=0;        
             }
             }
 function btncolor5(){
     var property = document.getElementById("5");
        if(value==0){
            property.style.backgroundColor ="red";
                               
             value= 1;
       }else{
            property.style.backgroundColor = "green";
            value=0;        
                         }
                         }
function btncolor6(){
     var property = document.getElementById("6");
        if(value==0){
            property.style.backgroundColor ="red";
                                           
             value= 1;
         }else{
             property.style.backgroundColor = "green";
             value=0;        
                                     }}
function btncolor7(){
     var property = document.getElementById("7");
        if(value==0){
            property.style.backgroundColor ="red";
                                                       
              value= 1;
       }else{
            property.style.backgroundColor = "green";
             value=0;        
         }
         }
 function btncolor8(){
     var property = document.getElementById("8");
         if(value==0){
              property.style.backgroundColor ="red";
                                                                   
              value= 1;
        }else{
             property.style.backgroundColor = "green";
              value=0;        
         }
         }

 function btncolor9(){
    var property = document.getElementById("9");
        if(value==0){
            property.style.backgroundColor ="red";
                                                                                           
             value= 1;
        }else{
            property.style.backgroundColor = "green";
             value=0;        
                                                                                     }
     }
function btncolor10(){
    var property = document.getElementById("10");
         if(value==0){
            property.style.backgroundColor ="red";
                                                                                                       
              value= 1;
         }else{
            property.style.backgroundColor = "green";
              value=0;        
         }
         }
 function btncolor11(){
    var property = document.getElementById("11");
         if(value==0){
             property.style.backgroundColor ="red";
                                                                                                                   
                 value= 1;
         }else{
            property.style.backgroundColor = "green";
            value=0;        
                                                                                                             }
                                                                                                             }
function btncolor12(){
         var property = document.getElementById("12");
           if(value==0){
              property.style.backgroundColor ="red";
                                                                                                                               
               value= 1;
           }else{
             property.style.backgroundColor = "green";
             value=0;        
 } }
// function btncolor(){
//     var property = document.getElementById("2");
//     if(value1==0){
//         property.style.backgroundColor ="red";
       
//     	value1= 1;
//     }else{
//         property.style.backgroundColor = "green";
//         value1=0;        
//     }
//     }
//     function myFunction() {
//         document.body.style.backgroundColor = "red";
//         fetch('https://jsonplaceholder.typicode.com/users')   
//     .then(response => response.json())   
//     .then(json => console.log(json))
//     }
    /*let response = await fetch(url);

if (response.ok) { // if HTTP-status is 200-299
  // get the response body (the method explained below)
  let json = await response.json();
} else {
  alert("HTTP-Error: " + response.status);
} */
let items=[];
function data(){
fetch('http://api.icndb.com/jokes/random/3',{method:'GET'}).then(res=>res.json()).then(data=>{
    console.log(data.value)
    data.value.forEach((item)=>{
        console.log(item.id);
        console.log(item.joke);
    });
});
console.log(items);
}
data();
