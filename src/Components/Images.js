import akaza from '../images/akaza.jpg'
import inosuke from '../images/inosuke.webp'
import kagaya from '../images/kagaya.jpg'
import kyojuro from '../images/kyojuro.jpg'
import misturi from '../images/mitsuri.avif'
import muichiro from '../images/muichiro.webp'
import muzan from '../images/muzan.avif'
import nezuko from '../images/nezuko.jpg'
import obanai from '../images/obanai.jpg'
import tanjiro from '../images/tanjiro.jpg'
import tengen from '../images/tengen.jpg'
import zenitsu from '../images/zenitsu.jpg'

const allImages = [akaza, inosuke, kagaya, kyojuro, misturi, muichiro, muzan, nezuko, obanai, tanjiro, tengen, zenitsu]

export default function Images(){
  const displayImages = Array.from({length: allImages.length}).map((image, i) => <img src={allImages[i]} alt="demon slayer character" style={{height:"250px", aspectRatio: "1" ,objectFit: "cover"}} />)
  return(
    <div>
      {displayImages}
    </div>
  )
}