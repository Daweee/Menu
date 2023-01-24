const MenuItem = ({ menuItems }) => {
  return (
    <>
      {menuItems.map((item) => {
        return (
          <article key={item.id} className="menu-item">
            <img src={item.img} alt={item.name} className="photo" />
            <div className="item-info">
              <header>
                <h4>{item.name}</h4>
                <h4 className="price">{item.price}</h4>
              </header>
              <p className="item-text">{item.description}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default MenuItem;
