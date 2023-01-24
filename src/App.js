import { useState } from "react";
import Title from "./components/Title";
import MenuButtons from "./components/MenuButtons";
import MenuSection from "./components/MenuSection";
import menu from "./data";

function App() {
  //setting up the button names
  const menuButtons = [
    {
      id: 1,
      buttonName: "All",
    },
    {
      id: 2,
      buttonName: "Breakfast",
    },
    {
      id: 3,
      buttonName: "Lunch",
    },
    {
      id: 4,
      buttonName: "Shakes",
    },
  ];

  const [menuItems, setMenuItems] = useState(menu);

  //displays the items to whatever the selected menu is
  const selectedMenu = (activeMenu) => {
    if (activeMenu === "All") {
      setMenuItems(menu);
      return;
    }
    const selectedMenu = menu.filter((items) => items.category === activeMenu);
    setMenuItems(selectedMenu);
  };

  return (
    <div>
      <main>
        <section className="menu">
          <Title />
          <MenuButtons menuButtons={menuButtons} selectedMenu={selectedMenu} />
          <MenuSection menuItems={menuItems} />
        </section>
      </main>
    </div>
  );
}

export default App;
