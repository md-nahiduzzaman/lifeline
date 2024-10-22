import image1 from '..//..//..//assets/images/image2.jpg'

const AboutBanner = () => {
  return (
    <div
    className='relative '
    style={{
      backgroundImage: `url(${image1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '78vh', 
    }}
  >
    <div
      className='absolute inset-0 bg-[rgba(35,8,90,0.4)] grid justify-center items-center'
    >
     <h2 className='text-5xl font-extrabold text-white'>About Us</h2>
    </div>
  </div>
  )
}

export default AboutBanner
