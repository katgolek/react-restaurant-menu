const Categories = ({categories, filterItems}) => {
    return (
        <section className="categories">
            {categories.map((category, index)=>{
                return (
                    <button type="button" key={index} className="category-btn"
                    onClick={()=> filterItems(category)}>{category}</button>
                )
            })}
            
        </section>
    )
};
export default Categories