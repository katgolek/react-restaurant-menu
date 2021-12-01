const menuSingleItem = (id, title, img, desc, price) => {
    return (
        <article key={id} className='menu-item'>
            <img src={img} alt={title} />
            <div className='menu-item-info'>
              <header>
                <h2>{title}</h2>
                <h3>${price}</h3>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
        </article>
    )
};
export default menuSingleItem