let imagenes = [ "http://hp-api.herokuapp.com/images/ron.jpg","http://hp-api.herokuapp.com/images/draco.jpg", "http://hp-api.herokuapp.com/images/mcgonagall.jpg", "http://hp-api.herokuapp.com/images/cedric.png",
  "http://hp-api.herokuapp.com/images/cho.jpg", "http://hp-api.herokuapp.com/images/snape.jpg", "http://hp-api.herokuapp.com/images/hagrid.png",
  "http://hp-api.herokuapp.com/images/neville.jpg", "http://hp-api.herokuapp.com/images/luna.jpg", "http://hp-api.herokuapp.com/images/ginny.jpg",
  "http://hp-api.herokuapp.com/images/sirius.JPG", "http://hp-api.herokuapp.com/images/lupin.jpg", "http://hp-api.herokuapp.com/images/arthur.jpg",
  "http://hp-api.herokuapp.com/images/bellatrix.jpg", "http://hp-api.herokuapp.com/images/voldemort.jpg", "http://hp-api.herokuapp.com/images/slughorn.JPG",
  "http://hp-api.herokuapp.com/images/kingsley.jpg", "http://hp-api.herokuapp.com/images/umbridge.jpg", "http://hp-api.herokuapp.com/images/lucius.jpg",
  "http://hp-api.herokuapp.com/images/crabbe.jpg", "http://hp-api.herokuapp.com/images/goyle.jpg", "http://hp-api.herokuapp.com/images/norris.JPG"
]

let nombre = ["Ron Weasley", "Draco Malfoy"," Minerva McGonagall","Cedric Diggory", " Cho Chang", " Severus Snape",
  "  Rubeus Hagrid","Neville Longbottom", " Luna Lovegood","Ginny Weasley","Sirius Black","Remus Lupin","Arthur Weasley",
  "Bellatrix Lestrange", "Lord Voldemort", "Horace Slughorn","Kingsley Shacklebolt","Dolores Umbridge","Lucius Malfoy",
  "Vincent Crabbe","Gregory Goyle"," Mrs Norris"]

houses = ["Slytherin","Gryffindor","Hufflepuff","Ravenclaw","Slytherin","Gryffindor","Ravenclaw","Gryffindor",
  "Slytherin", "", "Slytherin", "", "Gryffindor","", "Gryffindor","Hufflepuff","","Hufflepuff","Ravenclaw","Gryffindor",
  "Slytherin","Hufflepuff","Gryffindor"]

let contador = 0;

function carrousel(direccion) {
  let direccion1 = direccion;

  if (direccion1 == 'adelante') {
    if (contador == 0) {
      document.getElementById('imagen').src = imagenes[0];
      document.getElementById('h1').innerHTML = nombre[0];
      document.getElementById('h2').innerHTML = houses[0];
      contador++;
    } else if (contador < imagenes.length - 1) {
      document.getElementById('imagen').src = imagenes[contador];
      document.getElementById('h1').innerHTML = nombre[contador];
      document.getElementById('h2').innerHTML = houses[contador];
      contador++;

    } else {
      document.getElementById('imagen').src = imagenes[imagenes.length - 1];
      document.getElementById('h1').innerHTML = nombre[nombre.length - 1];
      document.getElementById('h2').innerHTML = houses[houses.length - 1];
      contador = 0;
    }
  }

}