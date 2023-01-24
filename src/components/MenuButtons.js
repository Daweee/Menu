import MenuButton from "./MenuButton";

const MenuButtons = ({ menuButtons, selectedMenu }) => {
  return (
    <div className="btn-container">
      {menuButtons.map((menuButton) => (
        <MenuButton
          key={menuButton.id}
          menuButton={menuButton}
          selectedMenu={selectedMenu}
        />
      ))}
    </div>
  );
};

export default MenuButtons;
