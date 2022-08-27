import React from 'react'

function Button({ disabled, children }) {
   return (
      <button disabled={disabled} className={`button ${disabled ? 'button__disabled' : ''}`}>
         <p className='p1 black'>
            {children}
         </p>
      </button >
   )
}

export default Button