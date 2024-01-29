// GrapesEditor.js

import "grapesjs/dist/css/grapes.min.css";

const GrapesEditor = () => {
  return {
    container: "#gjs",
    fromElement: true,
    height: "100vh",
    width: "auto",
    storageManager: false,
    panels: { defaults: [] },

    // You can further customize the editor here

    // Return the editor instance so it can be used in the parent component
  };
};

export default GrapesEditor;
