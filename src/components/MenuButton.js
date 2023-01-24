const MenuButton = ({ menuButton, selectedMenu }) => {
  return (
    <button
      type="button"
      className="filter-btn"
      onClick={() => selectedMenu(menuButton.buttonName)}
    >
      {menuButton.buttonName}
    </button>
  );
};

export default MenuButton;
