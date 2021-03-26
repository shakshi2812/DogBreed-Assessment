import axios from "axios";

function getAllBreeds() {
  return axios.get("https://dog.ceo/api/breeds/list/all");
}
function getBreedImage(breedImage) {
  return axios.get(`https://dog.ceo/api/breed/${breedImage}/images`);
}
function getRandomImages(name) {
  return axios.get(`https://dog.ceo/api/breed/${name}/images/random`);
}
function getSubBreedList(subBreedList) {
  return axios.get(`https://dog.ceo/api/breed/${subBreedList}/list`);
}
function getSubBreedImage(breed, subBreed) {
  return axios.get(`https://dog.ceo/api/breed/${breed}/${subBreed}/images`);
}
export {
  getAllBreeds,
  getBreedImage,
  getRandomImages,
  getSubBreedList,
  getSubBreedImage
};
