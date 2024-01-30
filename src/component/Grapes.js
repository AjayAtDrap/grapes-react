import React, { useEffect } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import "../styles/main.css"

const GrapesEditor = () => {
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      fromElement: true,
      height: "100vh",
      width: "auto",
      storageManager: false,
      // panels: { defaults: [] },
      blockManager: {
        appendTo: "#blocks",
        openBlocks: false,
      },
      layerManager: {
        appendTo: ".layers-container",
      },
      panels: {
        defaults: [
          {
            id: "layers",
            el: ".panel__right",
            resizable: {
              maxDim: 450,
              minDim: 200,
              tc: 0,
              cl: 1,
              cr: 0,
              bc: 0,
              keyWidth: "flex-basis",
            },
          },
        ],
      },
    });

    // Rest of your block manager and other configurations...

    editor.BlockManager.add("text-category", {
      label: "Text Block",
      category: "Basic Blocks",
      content: '<div data-gjs-type="text">Insert your text here</div>',
    });

    editor.BlockManager.add("image-category", {
      label: "Image Block",
      category: "Media Blocks",
      content: '<img src="your-image-source.jpg" alt="Image description">',
      activate: true,
      select: true,
    });

    editor.BlockManager.add("video-category", {
      label: "Video Block",
      category: "Media Blocks",
      content: '<video src="your-video-source.mp4" controls></video>',
      activate: true,
      select: true,
    });

    editor.BlockManager.add("button-category", {
      label: "Button Block",
      category: "UI Elements",
      content: "<button>Click me</button>",
    });

    editor.BlockManager.add("list-category", {
      label: "List Block",
      category: "Basic Blocks",
      content: "<ul><li>Item 1</li><li>Item 2</li></ul>",
    });

    editor.BlockManager.add("quote-category", {
      label: "Quote Block",
      category: "Text Blocks",
      content: "<blockquote>Your quote here</blockquote>",
    });

    editor.BlockManager.add("form-category", {
      label: "Form Block",
      category: "UI Elements",
      content:
        '<form action="/submit" method="post"><label for="input">Input:</label><input type="text" id="input" name="input"><input type="submit" value="Submit"></form>',
    });

    editor.BlockManager.add("heading-category", {
      label: "Heading Block",
      category: "Text Blocks",
      content: "<h1>Your Heading</h1>",
    });

    editor.BlockManager.add("paragraph-category", {
      label: "Paragraph Block",
      category: "Text Blocks",
      content: "<p>Your paragraph text goes here.</p>",
    });

    editor.BlockManager.add("link-category", {
      label: "Link Block",
      category: "UI Elements",
      content:
        '<a href="https://example.com" target="_blank">Visit Example</a>',
    });

    editor.BlockManager.add("image-gallery-category", {
      label: "Image Gallery Block",
      category: "Media Blocks",
      content:
        '<div class="image-gallery"><img src="image1.jpg" alt="Image 1"><img src="image2.jpg" alt="Image 2"></div>',
    });

    editor.Panels.addPanel({
      id: "panel-top",
      el: ".panel__top",
    });
    editor.Panels.addPanel({
      id: "basic-actions",
      el: ".panel__basic-actions",
      buttons: [
        {
          id: "visibility",
          active: true, // active by default
          className: "btn-toggle-borders",
          label: "<u>B</u>",
          command: "sw-visibility", // Built-in command
        },
        {
          id: "export",
          className: "btn-open-export",
          label: "Exp",
          command: "export-template",
          context: "export-template", // For grouping context of buttons from the same panel
        },
        {
          id: "show-json",
          className: "btn-show-json",
          label: "JSON",
          context: "show-json",
          command(editor) {
            editor.Modal.setTitle("Components JSON")
              .setContent(
                `<textarea style="width:100%; height: 250px;">
              ${JSON.stringify(editor.getComponents())}
            </textarea>`
              )
              .open();
          },
        },
      ],
    });
    // Cleanup when component unmounts
    return () => {
      editor.destroy();
    };
  }, []); // Empty dependency array ensures this runs once on component mount

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 panel__top">
          <div className="panel__basic-actions"></div>
        </div>
      </div>

      <div className="row no-gutters">
        <div className="bg-dark vh-100 col-md-2 d-none d-sm-block p-0">
          <div id="blocks"></div>
        </div>

        <div className="editor-row col-md-10 p-0">
          <div id="gjs" className="editor-canvas container-fluid">
            <h1>Welcome to our Editor</h1>
          </div>
          <div className="panel__right vh-100 d-none d-sm-block">
            <div className="layers-container"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrapesEditor;
