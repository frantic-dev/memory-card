import akaza from "../images/akaza.jpg";
import inosuke from "../images/inosuke.webp";
import kagaya from "../images/kagaya.jpg";
import kyojuro from "../images/kyojuro.jpg";
import misturi from "../images/mitsuri.avif";
import muichiro from "../images/muichiro.webp";
import muzan from "../images/muzan.avif";
import nezuko from "../images/nezuko.jpg";
import obanai from "../images/obanai.jpg";
import tanjiro from "../images/tanjiro.jpg";
import tengen from "../images/tengen.jpg";
import zenitsu from "../images/zenitsu.jpg";

const allImages = [
  akaza,
  inosuke,
  kagaya,
  kyojuro,
  misturi,
  muichiro,
  muzan,
  nezuko,
  obanai,
  tanjiro,
  tengen,
  zenitsu,
];
function shuffleImages() {
  // makes an array of numbers from 0 to images.length
  let spotsLeft = Array.from(
    { length: allImages.length },
    (spot, index) => (spot = index)
  );
  // empty array to fill with images in new spots
  let shuffledImages = [];
  allImages.forEach((image) => {
    let spotsObject = findNextSpot(spotsLeft);
    // fills shuffled images and updates the spotsLeft
    if (spotsObject !== undefined) {
      shuffledImages[spotsObject.found] = image;
      spotsLeft = spotsObject.spotsLeft;
    }
  });
  return shuffledImages;
}
// returns a random number
function getRandomNumber(length) {
  return Math.floor(Math.random() * length);
}
function findNextSpot(spotsLeft) {
  let randomSpot = getRandomNumber(allImages.length);
  // checks if randomSpot is still available in the spotsLeft array
  let found = spotsLeft.find((spot) => spot === randomSpot);
  // if it's not : we try to find a new spot again
  if (found === undefined) return findNextSpot(spotsLeft);
  else {
    // if yes : we filter it out as its not gonna become an available spot anymore
    spotsLeft = spotsLeft.filter((spot) => {
      return spot !== found;
    });
    // return of found which is the index of new spot, and an updated spotsLeft
    return { found, spotsLeft };
  }
}
export default function Images() {
  let shuffledImages = shuffleImages();
  const displayImages = Array.from({ length: allImages.length }).map(
    (image, i) => (
      <img
        src={shuffledImages[i]}
        alt="demon slayer character"
        style={{ height: "250px", aspectRatio: "1", objectFit: "cover" }}
        key={i}
      />
    )
  );
  return <div>{displayImages}</div>;
}
