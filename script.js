// document.addEventListener('DOMContentLoaded',
//   function () {
//     obtenerLocalstorage();
//   })

const div = document.getElementById("root")
let boton1 = document.getElementById('botonInicio');
let boton2 = document.getElementById('verCartas');

boton1.addEventListener('click', function () {
  document.getElementById("modal").style.display = "block".display = "flex";
})

const url = 'http://hp-api.herokuapp.com/api/characters/';

fetch(url) //Peticion GET
  .then(res => res.json())
  .then(data => {

    localStorage.setItem('personajes', JSON.stringify(data));
    data.forEach(personajes => {

      const {
        name,
        image,
        house
      } = personajes;

      let nombre = personajes.name;
      let imagenes = personajes.image;
      let houses = personajes.house;

      console.log(houses);
      num = Math.floor(Math.random() * (3 - 0) + 0);

      // boton2.addEventListener('click',(e)=> {
      //     e.preventDefault();   
      //     document.getElementById("modal").style.display = "block".display = "none";
      //     document.getElementById("root").style.display = "block".display = "flex";
      //  if (image) {
      //    div.innerHTML += `
      //   <div class="personajes">
      //     <img class="personajes" src=${image}><br>
      //     <div class="texto">
      //     <p id="nombre" class="nombre">${personajes["name"]}
      //     <p id="escuela" style="color: ${colors[num]}"> ${personajes["house"]}"
      //     </div>  
      //     </div>  
      //       `
      // }
      // })

    });

  })
  .catch(err => console.log(err))

function obtenerLocalstorage() {
  let personajes = localStorage.getItem('personajes');
  console.log(personajes);
}