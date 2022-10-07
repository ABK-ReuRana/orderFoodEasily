import React from 'react';
import Menu from './MenuApi';

const Nav = ({ filterItems, menuList }) => {
  return (
    <nav className='navbar'>
      <div className='btn-group'>
          {menuList.map(currMenu =>
             <button className='btn-group__item' onClick={() => filterItems(currMenu)}> {currMenu} </button>
          )

          }
      </div>
    </nav>
  )
}

export default Nav;
