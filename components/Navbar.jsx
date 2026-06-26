"use client"; // 👈 Add this exact line at the very top!

import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className = "navbar-container">
      <p className = "logo">
        <Link href = "/">OSA Headphones</Link>
      </p>

      <button type = "button" className = "cart-item" onClick = {() => {}}>
          <AiOutlineShopping />
          <span className = "cart-item-qty">1</span>
      </button>
     </div>
  )
}

export default Navbar