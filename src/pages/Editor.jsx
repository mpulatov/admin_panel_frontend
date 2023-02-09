import React from "react";
import {
  RichTextEditorComponent,
  Inject,
  HtmlEditor,
  Image,
  Link,
  QuickToolbar,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";

import { EditorData } from "../data/dummy";
import { Header } from "../components";

function Editor() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Editor" />{" "}
      {/* You can add also value={EditorData} at the RichTextEditorComponent after id */}
      <RichTextEditorComponent id="Editor">
        <EditorData />
        <Inject services={[HtmlEditor, Image, Link, QuickToolbar, Toolbar]} />
      </RichTextEditorComponent>
    </div>
  );
}

export default Editor;
