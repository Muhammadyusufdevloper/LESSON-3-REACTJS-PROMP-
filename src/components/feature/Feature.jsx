import React from 'react'
import "./Feature.scss"

const Feature = ({title,offer,desc,btn,img,bg,item,btnBg,btnCl}) => {
  let listItem = item?.map((item)=>(
    <li className='feature__item' key={item}><a href="#" className='feature__link'>{item}</a></li>
  ))  
  return (
    <>
        <section className='feature'>
            <div className='container'>
                <div className='feature__wrppaer' style={{background: `url(${img}) no-repeat center`,color:bg}}>
                    <div className='feature__top-info'>
                        <h2 className='feature__title'>{title}</h2>
                        <ul className='feature__list'>
                            {listItem}
                        </ul>
                    </div>
                    <div className='feature__botton-info'>
                        <h2 className='feature__offer'>{offer}</h2>
                        <p className='feature__desc'>{desc}</p>
                        <button className='feature__btn' style={{background:btnBg,color:btnCl}}>{btn}</button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Feature