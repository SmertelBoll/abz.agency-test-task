import React from 'react'
import Button from './Button'
import UserBlock from './UserBlock'

function GetRequest() {
   return (
      <div className="get-request">
         <h2 className="h1 black">Working with GET request</h2>
         <div className="get-request__users">
            <UserBlock />
            <UserBlock />
            <UserBlock />
            <UserBlock />
            <UserBlock />
            <UserBlock />
         </div>
         <div className="get-request__button">
            <Button disabled={false}>Show more</Button>
         </div>
      </div>
   )
}

export default GetRequest