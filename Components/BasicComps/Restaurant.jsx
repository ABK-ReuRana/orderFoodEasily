import React, { useState } from "react";
import MenuCard from "./MenuCard";
import Menu from "./MenuApi";
import Nav from "./Nav";

// find all unique Category (TO make all Category NavBar)
const uniqueList =[...new Set(Menu.map((currEle) => currEle.category)), "All"];


const Restaurant = () => {
  // Data fetced From Api
  const [menuData, setMenuData] = useState(Menu);  // use state hook
  const [menuList, setMenuList]=useState(uniqueList);

  // update state of variable => category
  const filterItems = (category) => {
      console.log(category);
      if(category === 'All'){
        setMenuData(Menu);
        return;
      }
      console.log(1);
      const updatedList = Menu.filter((currEle) => currEle.category === category);
      setMenuData(updatedList);
  }

 
  return (
    <>
      <Nav filterItems={filterItems} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  )
}

export default Restaurant;
