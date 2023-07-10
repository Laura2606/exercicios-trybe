// para pegar o botão random-dog
const getDogButtom = document.querySelector("#random-dog");

//pegando o botão random-cat
const getCatButtom = document.querySelector("#random-cat");


//pegando o elemento de imagem que irá exibir a imagem dos pets
const petImage = document.querySelector("#random-pet-image");

//pegando o elemento surprise me
const surpriseButton = document.querySelector("#surprise-me")


getDogButtom.addEventListener("click", () => {
fetch("https://dog.ceo/api/breeds/image/random")
.then(response => response.json())
.then(data => {
  const petURL = data.message;

  petImage.src = petURL;
})
});

getCatButtom.addEventListener("click", () => {
fetch("https://api.thecatapi.com/v1/images/search")
.then(response => response.json())
.then(([data]) => {
  const petURL = data.url;

  petImage.src = petURL;
});
});

surpriseButton.addEventListener("click", () => {
  Promise.any([
fetch("https://api.thecatapi.com/v1/images/search"),
fetch("https://dog.ceo/api/breeds/image/random"),
  ])
  .then((response) => response.json())
  .then((data) => {
    const petURL = data.message || data[0].url;

    petImage.src = petURL;
  });
});