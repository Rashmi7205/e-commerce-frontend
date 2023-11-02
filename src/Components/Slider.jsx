import React from 'react'

function Slider() {
  return (
    <div className='w-full h-[200px]'>
      <div className="carousel w-full h-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/76bb30325615e24a.jpg?q=20" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="md:btn md:btn-circle hidden">❮</a> 
      <a href="#slide2" className="md:btn md:btn-circle hidden">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/cb58d75652e5b5fb.jpg?q=21" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="md:btn md:btn-circle hidden">❮</a> 
      <a href="#slide3" className="md:btn md:btn-circle hidden">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/cb58d75652e5b5fb.jpg?q=20" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="md:btn md:btn-circle hidden">❮</a> 
      <a href="#slide4" className="md:btn md:btn-circle hidden">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/cb58d75652e5b5fb.jpg?q=21" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="md:btn md:btn-circle hidden">❮</a> 
      <a href="#slide1" className="md:btn md:btn-circle hidden">❯</a>
    </div>
  </div>
</div>
    </div>
  )
}

export default Slider