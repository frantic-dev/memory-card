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
  let spotsLeft = Array.from(
    { length: allImages.length },
    (spot, index) => (spot = index)
  );
  let shuffledImages = [];
  allImages.forEach((image) => {
    let spotsObject = findNextSpot(spotsLeft);
    if (spotsObject !== undefined) {
      shuffledImages[spotsObject.found] = image;
      spotsLeft = spotsObject.spotsLeft;
    }
  });
  return shuffledImages
}
function getRandomNumber(length) {
  return Math.floor(Math.random() * length);
}
function findNextSpot(spotsLeft) {
  let randomSpot = getRandomNumber(allImages.length);
  let found = spotsLeft.find((spot) => spot === randomSpot);
  if (found === undefined) return findNextSpot(spotsLeft);
  else {
    spotsLeft = spotsLeft.filter((spot) => {
      return spot !== found;
    });
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
