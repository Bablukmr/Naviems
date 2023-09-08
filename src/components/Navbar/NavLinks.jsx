import React from 'react'

export default function NavLinks() {
    const links=[
        {name:'men'},
        {name:'women'},
        {name:'kid'},
        {name:'men'}
    ]
  return (
    <>
       {
        links.map((link,index)=>(
            <div key={index}>
                <div className='px-3 text-left md:cursor-pointer '>
                   <h1 className='py-7'>{link.name}</h1> 
                </div>
            </div>
        ))
       } 
    </>
  )
}
