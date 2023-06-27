// para pegar o botão random-dog
const getDogButtom = document.querySelector("#random-dog");

//pegando o botão random-cat

const getCatButtom = document.querySelector("#random-cat");

//pegando o elemento de imagem que irá exibir a imagem dos pets
const petImage = document.querySelector("#random-pet-image");

getDogButtom.addEventListener("click", () => {
fetch("https://dog.ceo/api/breeds/image/random")
.then(response => response.json())
.then(data => {
  const petURL = data.message;

  petImage.src = petURL;
})
});