import React from "react";
//config
import config from "../config.json";
//styles
import { CSSReset } from "../src/components/CSSReset";
//components
import Header from "../components/header/header";
import Menu from "../components/Menu/menu";
import TimeLine from "../components/TimeLine/TimeLine";
import Favorites from "../components/Favorites/favorites";

function HomePage() {
  const estilodanav = { 
    display: "flex",
    flexDirection: "column",
    flex: 1,
};

  return (
    <>
      <CSSReset />
      <div style={estilodanav}>
        <Menu />
        <Header />
        <TimeLine playlists={config.playlists} />
        <Favorites favorites={config.favorites} />
      </div>
    </>
  );
}

export default HomePage;
