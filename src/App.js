import React, { useState } from "react";

import Layout from "./components/Layout/Layout";
import Content from "./components/Content/Content";
import CTA from "./components/CTA/CTA";

import { pages } from "./data/content.json";
import { pagesNormaliser } from "./helpers/pages-normaliser";

import "./App.scss";

function App() {
  const pagesJSON = pagesNormaliser(pages);
  const menuItems = Array.from(pagesJSON.keys());

  const [activemenuItem, setActiveMenuItem] = useState(menuItems[0]);

  const imageUrl = require(`./assets/background_images/${
    pagesJSON.get(activemenuItem).background
  }`);

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${imageUrl.default})`,
      }}
    >
      <Layout
        menuItems={menuItems}
        activemenuItem={activemenuItem}
        setActiveMenuItem={setActiveMenuItem}
      />
      <Content subhead={pagesJSON.get(activemenuItem).subhead} />
      <CTA cta={pagesJSON.get(activemenuItem).cta} />
    </div>
  );
}

export default App;
