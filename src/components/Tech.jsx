import React from 'react'
import { BallCanvas } from './canvas'
import{technologies} from '../constants'
import SectionWrapper from '../hoc/SectionWrapper'
const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology)=>(
        <div 
        className='size-28'
        key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech,"tech");