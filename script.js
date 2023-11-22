   async function displayApod() {
      const apodPropieties = await getApod();
      addApodUI(apodPropieties);
}
  
  async function getApod() {
    try {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=cfQ2QcYMt9x0YhEbkT3736f6l0gMjwRpkzPF3uRO`)
      if (response.status === 404 ){
        alert("No se encontró tu llave");
        return;
      }
      return await response.json();
    } catch (err) {
      alert("Error al intentar conectar con el servidor");
    }
  }
  
  function addApodUI(apod) {
    const apodList = document.getElementById("nasa_container");
    const element = document.createElement("div");
    element.innerHTML = `
    <strong title: >Title: </strong> ${apod.title}
      <strong date: >Date: </strong> ${apod.date}
      <strong explanation: >Explanation: </strong> ${apod.explanation}
      <strong image: ></strong> <img src="${apod.url}" alt=""/>
    `;
    apodList.appendChild(element);
  }
  
  displayApod();


  