import React from 'react'

const Navbar = () => {
  return (
    <React.Fragment>
      <div className='bg-black/90 h-14 flex items-center justify-between px-4'>
        <div className='flex gap-2 items-center'>
          <img
            className='object-cover w-8 h-8'
            src='https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/59_Codepen-512.png'
            alt='logo'
          />
          <div>
            <h1 className='text-white text-bold text-lg font-semibold	'>
              Codepase clone
            </h1>
          </div>
        </div>
        <div>
          <img
            className='object-cover w-10 h-10 rounded'
            src='https://assets.codepen.io/t-1/user-default-avatar.jpg?format=auto&version=0&width=80&height=80'
            alt='logo'
          />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Navbar
