import React from 'react'

function Header() {
  return (
    <div className='bg-rose-400 h-20 flex gap-24' >
        <img className='h-20 px-5' src="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1 className='text-blue-600 text-5xl'>
            <b>
                Meme generator
            </b>
        </h1>
        <img className='h-20 px-5' src="https://images.unsplash.com/photo-1540331547168-8b63109225b7?q=80&w=1919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
  )
}

export default Header