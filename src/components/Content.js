import React from 'react';
import Aside from "./Aside.js";
import Main from "./Main.js";

let contentStyle = {
    display: "flex"
}

const Content = () => (
    <section style={contentStyle}>
      <Aside />
      <Main />
    </section>
    );

export default Content;