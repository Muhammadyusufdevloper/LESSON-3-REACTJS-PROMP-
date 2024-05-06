import React from 'react'
import Hero from '../hero/Hero'
import Feature from '../feature/Feature'
import { featurePartData } from '../../static'

const Main = () => {
    let feature = featurePartData?.map((card)=>(
        <Feature
            key={card.id}
            {...card}
        />
    ))
  return (
    <>
        <main>
            <Hero/>
            {feature}
        </main>
    </>
  )
}

export default Main