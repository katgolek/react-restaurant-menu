//import logo from './logo.svg';
import React, { useState } from 'react'
import items from './data'
import './App.css';
import Header  from './Header'
import Menu  from './Menu'
import Categories  from './Categories'
const allCategories = ['all', ...new Set(items.map((item) => item.category))];


function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div className="App">
        <Header/>
        <Categories  categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems} />
        <p>&copy;Copyright 2021. All rights reserved</p>
        
    </div>
  );
}

export default App;

