import React from 'react'

function NavbarIcon({Icon , title }) {
  return (
    <div
      className={`group flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl `}
    >
      <Icon
        className={`h-5 group-hover:text-blue-500 sm:h-7 mx-auto text-gray-500`} src='Home'
      />
    </div>
  )
}

export default NavbarIcon
