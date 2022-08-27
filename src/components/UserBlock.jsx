import React from 'react'
import delet from '../assets/pexels-alexandr-podvalny-1227513.jpeg'

function UserBlock() {
   return (
      <div className="user-block">
         <img src={delet} alt="" width={70} height={70} />
         <p className="p1 black">Sholop Lyubomyr</p>
         <ul className="user-block__info">
            <li className="p1 black">Lead Independent Director</li>
            <li className="p1 black">Takamuru@gmail.com</li>
            <li className="p1 black">+38 (098) 278 90 24</li>
         </ul>



      </div>
   )
}

export default UserBlock