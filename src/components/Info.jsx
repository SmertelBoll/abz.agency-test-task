import React from 'react'
import Button from './Button'

function Info() {
   return (
      <div className='info'>
         <div className="info__container">
            <div className="info__text">
               <h1 className='h1'>Test assignment for front-end developer</h1>
               <p className="p1">What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
            </div>
            <Button disabled={false}>Sing up</Button>
         </div>
      </div>
   )
}

export default Info