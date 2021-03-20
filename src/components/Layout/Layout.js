// Component containing Logo, Menu and Contact Us button

import { Menu } from "semantic-ui-react";
import { array, func, string } from "prop-types";

import abc from "../../assets/logo/abc.svg";

function Layout({ menuItems, activemenuItem, setActiveMenuItem }) {
  return (
    <div className="layout">
      <img className="abc-logo" alt="abc" src={abc} />
      <button className="contact-button">Contact Us</button>
      <Menu text vertical className="vertical-menu">
        {MenuDisplay(menuItems, activemenuItem, setActiveMenuItem)}
      </Menu>
      {/* For tablet mobile view */}
      <Menu text className="horizonatal-menu">
        {MenuDisplay(menuItems, activemenuItem, setActiveMenuItem)}
      </Menu>
    </div>
  );
}

function MenuDisplay(menuItems, activemenuItem, setActiveMenuItem) {
  return menuItems.map((menuItem) => (
    <Menu.Item
      key={menuItem}
      name={menuItem}
      active={activemenuItem === menuItem}
      onClick={(e, { name }) => setActiveMenuItem(name)}
    />
  ));
}

Layout.propTypes = {
  menuItems: array.isRequired,
  activemenuItem: string.isRequired,
  setActiveMenuItem: func.isRequired,
};

export default Layout;
