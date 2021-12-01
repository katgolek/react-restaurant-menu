const Menu = ({ items }) => {
    return (
      <div className='list'>
        {items.map((menuItem) => {
          const { id, title, img, desc, price } = menuItem;
          return (
            <article key={id} className='menu-item'>
              <img src={img} alt={title}/>
              <div className='menu-item-details'>
                <div className="menu-item-header">
                  <h2>{title}</h2>
                  <h3>${price}</h3>
                </div>
                <p>{desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    );
  };
  
  export default Menu;