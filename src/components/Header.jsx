import React from 'react'
import Navbar from './Navbar'

const Header = ({ ...props }) => {
  return (
    <heacer { ...props } className={`${props.className} flex justify-center items-center sm:py-5 border-[#BEBCBD] border-b border-solid`}>
      <Navbar className="" />
      {/* <hr /> */}
    </heacer>
  )
}

export default Header