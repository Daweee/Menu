import MenuItem from "./MenuItem";

const MenuSection = ({ menuItems }) => {
  return (
    <div className="section-center">
      <MenuItem menuItems={menuItems} />
    </div>
  );
};

export default MenuSection;
