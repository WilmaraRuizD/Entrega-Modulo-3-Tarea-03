
const div = document.getElementById("root")
const foto=document.getElementById("img")
let boton = document.querySelector('#boton');

let colors = ["red", "orange", "blue"]

const url= 'http://hp-api.herokuapp.com/api/characters/';

 fetch(url) //Peticion GET
 .then(res=>res.json())
 .then(data =>{ 
  

    data.forEach(personajes => { 
       console.log(personajes);

     const { name, image, house } = personajes;
     localStorage.setItem('nombre', 'personaje.name');
         
         num = Math.floor(Math.random() * (3 - 0) + 0)     
         
        boton.addEventListener('click', function(){
     
        if(image){


            div.innerHTML +=`
        <div class="personajes">
            <img class="personajes" src=${image}><br>
            <div class="texto">
            <p id="nombre" class="nombre">${personajes["name"]}
            <p id="escuela" style="color: ${colors[num]}"> ${personajes["house"]}"
           
            </div>  
            </div>  
            `}
})
 
   
    });

 })
 .catch( err => console.log(err))

//  <button id="randomPersonaje" class="random">Nuevo Personaje</button>
