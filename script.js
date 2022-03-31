document.addEventListener('DOMContentLoaded',
function(){
  obtenerLocalstorage();
})

const div = document.getElementById("root")
let boton1 = document.getElementById('botonInicio');
let boton2 = document.getElementById('verCartas');
let colors = ["red", "orange", "blue"]

boton1.addEventListener('click', function(){
  alert("Me estan precionando")
document.getElementById("modal").style.display = "block".display="flex";
})

const url= 'http://hp-api.herokuapp.com/api/characters/';

 fetch(url) //Peticion GET
 .then(res=>res.json())
 .then(data =>{ 
  
  localStorage.setItem('personajes',JSON.stringify(data)); 

    data.forEach(personajes => { 
       
     const { name, image, house } = personajes;


     let imagenes=personajes.image
        
         num = Math.floor(Math.random() * (3 - 0) + 0)     
         

        boton2.addEventListener('click', function(){
          document.getElementById("modal").style.display = "block".display="none"
     
        if(image){

          
            div.innerHTML +=`
             Volver </button>
        <div class="personajes">
            <img class="personajes" src=${image}><br>
            <div class="texto">
            <p id="nombre" class="nombre">${personajes["name"]}
            <p id="escuela" style="color: ${colors[num]}"> ${personajes["house"]}"
            
            </div>  
            </div>  
            `}
}
)
 
   
   });

 })
 .catch( err => console.log(err))

 function obtenerLocalstorage()
 {
     let personajes=localStorage.getItem('personajes');
     console.log(personajes);
   
 }



 ///para la funcion recorrer el objeto 
//  if(direccion1=='atras'){
//   if(contador==0){
//     document.getElementById('imagen').src= imagenes[imagenes.length-1];
    
//     console(imagenes)
//     contador++;
//   }else if (contador<imagenes.length-1) {
//     document.getElementById('imagen').src= imagenes[imagenes.length-1-contador];
//     contador++;

//   }else {
//     document.getElementById('imagen').src= imagenes[0];
//     contador=0;
//   }
// }

// if(direccion1=='adelante'){
//   if(contador==0){
//     document.getElementById('imagen').src= imagenes[0];
//     contador++;
//   }else if (contador<imagenes.length-1) {
//     document.getElementById('imagen').src= imagenes[contador];
//     contador++;

//   }else {
//     document.getElementById('imagen').src= imagenes[imagenes.length-1];
//     contador=0;
//     console.log(imagenes);
//   }
// }