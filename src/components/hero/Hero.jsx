import React from 'react'
import "./Hero.scss"
import heroImg from"../../assets/image/S24-ultra Lifestyle.webp"

const Hero = () => {
  return (
    <>
        <section className='hero'>
            <div className='container'>
                <div className='hero__wrapper' style={{background: `url(${heroImg}) no-repeat center`}}>
                    <div className='hero__card-info'>
                        <p className='hero__price'>Save $1,040</p>
                        <h1 className='hero__title'>Meet your new Galaxy family</h1>
                        <p className='hero__desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ullam illo architecto, ut repellat omnis enim ducimus voluptas. Modi est sapiente illo, ut laudantium iusto libero. Dolorem deleniti tempore quia.</p>
                        <button className='hero__btn'>Boy now</button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero