import React, {useState}from "react";
//config
import config from "../config.json";
//styles
import { CSSReset } from "../src/components/CSSReset";
//components
import Header from "../src/components/header/header";
import Menu from "../src/components/Menu/menu";
import TimeLine from "../src/components/TimeLine/TimeLine";
import Favorites from "../src/components/Favorites/favorites";

function HomePage() {

    const [valorDoFiltro, setValorDoFiltro] = useState("");


  const estilodanav = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  };

  return (
    <>
      <CSSReset />
      <div style={estilodanav}>
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
        <Header />
        <TimeLine searchValue={valorDoFiltro} playlists={config.playlists} />
        <Favorites favorites={config.favorites} />
      </div>
    </>
  );
}

export default HomePage;
