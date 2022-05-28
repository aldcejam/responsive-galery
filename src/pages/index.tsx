import type { NextPage } from 'next'
import GalerySection from '../components/galery/galery-section/GalerySection'

const Home: NextPage = () => {
  return (
    <div>
      <p className='text-white'>spkdpsa</p>
      <GalerySection groupImages={[
          {
            srcImg: '/illustration/1.jpg',
            altImg: 'illustration1' 
          },
          {
            srcImg: '/illustration/2.jpg',
            altImg: 'illustration2'
          },
          {
            srcImg: '/illustration/3.jpg',
            altImg: 'illustration3'
          },
          {
            srcImg: '/illustration/4.jpg',
            titleImg: 'illustration4'
          },
          {
            srcImg: '/illustration/5.jpg',
            titleImg: 'illustration5'
          },
          {
            srcImg: '/illustration/6.jpg',
            titleImg: 'illustration6'
          },
          {
            srcImg: '/illustration/7.jpg',
            altImg: 'illustration7',
            titleImg: 'illustration7'
          },
          {
            srcImg: '/illustration/8.jpg',
            altImg: 'illustration8',
            titleImg: 'illustration8'
          },
        ]}/>
    </div>
  )
}

export default Home
