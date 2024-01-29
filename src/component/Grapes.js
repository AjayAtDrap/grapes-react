import React, { useEffect, useState } from "react";
import grapesjs from "grapesjs";
import grpPreset from "grapesjs-preset-webpage"
import "../styles/main.scss"
// import grapesConfig from "./GrapesEditor";

const Grapejs = () => {
    const [editor, setEditor] = useState(null);
  useEffect(() => {
    const edtor = grapesjs.init({
        container: "#gjs",
        plugins: [grpPreset],
        pluginsOpts: { grpPreset: {} },
      
      });
  
      // Define the custom block
    
    setEditor(edtor)
  }, []);
  return (
    <div>
      <div id="gjs">
        <h1>Hello World Component!</h1>
      </div>
    </div>
  );
};

export default Grapejs;
