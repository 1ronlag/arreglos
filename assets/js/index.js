

let result = document.querySelector(".propiedades");
let counter = document.querySelector(".contador")

const template = (data) => {
  return`
    <div class="propiedad">
    <div class="img" style="background-image: url('${data.src}')"></div>
    <section>
      <h5>${data.name}</h5>
      <div class="d-flex justify-content-between">
        <p>Cuartos: ${data.rooms}</p>
        <p>Metros: ${data.meters}</p>
        </div>
        <p class="my-3">${data.description}</p>
        <button class="btn btn-info ">Ver más</button>
    </section>
  </div>
  `;
};

const propertyData = () => {
  let amount = "";
  for (const property of propiedadesJSON) {
    let html = template(property);
    amount ++
    result.innerHTML += html;
  }
  counter.innerHTML = amount
};

const searchProperty = () => {
  let minText = document.querySelector(".min").value;
  let maxText = document.querySelector(".max").value;
  let rooms = document.querySelector(".rooms").value;
  let html = "";
  amount = 0

  if(minText == 0 || maxText == 0 || rooms == 0) {
    alert("Debes ingresar todos los valores")
  }

  let filter = propiedadesJSON.filter((p) => p.m >= minText && p.m <= maxText && p.rooms >= rooms
  );

  if(filter.length==0){
    html+= `<h1>Busqueda sin resultados</h1>`
  }

  result.innerHTML = "";
  for (const f of filter) {
    html += template(f);
    amount++
  }
  result.innerHTML = html;
  counter.innerHTML = amount
};

document.addEventListener("DOMContentLoaded", propertyData);


const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      meters: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      meters: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      meters: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      meters: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      meters: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      meters: 500
    }
  ];