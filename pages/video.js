import React, { useContext} from "react";
import { ColorModeContext } from "../src/components/Menu/components/ModeSwitch/ColorMode";
import Menu from "../src/components/Menu/menu";

const Video = () => {
    const contexto = useContext(ColorModeContext);

    return (
        <div>
            <Menu/>
        </div>
    )
};

export default Video;
