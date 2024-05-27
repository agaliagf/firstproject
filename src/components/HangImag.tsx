import image0 from '../assetes/0.png'
import image1 from '../assetes/1.png'
import image2 from '../assetes/2.png'
import image3 from '../assetes/3.png'
import image4 from '../assetes/4.png'
import image5 from '../assetes/5.png'
import image6 from '../assetes/6.png'
import image7 from '../assetes/7.png'
import image8 from '../assetes/8.png'
import image9 from '../assetes/9.png'

const images: string[] = [
  image0,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9
]

interface Props {
  imageNumber: number
}

export function HangImage({ imageNumber }: Props) {
  if (imageNumber >= 9) {
    imageNumber = 9
  }

  return <img src={images[imageNumber]} alt='Hang Image' style={{ width: 250 }} />

  // jsx Elemnten
}
