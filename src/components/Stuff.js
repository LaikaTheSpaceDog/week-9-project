import React from 'react';
import Header from "./Header.js";
import Paragraph from "./Paragraph.js"
import People from "./People.js"
import Square from "./Square.js"

const Stuff = () => (
    <>
      <Header text="What an amazing"/>
      <Paragraph message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu hanc copiosiorem etiam soles dicere. Ubi ut eam caperet aut quando? Videmus igitur ut conquiescere ne infantes quidem possint. Magna laus. Bonum patria: miserum exilium. Sed tu istuc dixti bene Latine, parum plane. Duo Reges: constructio interrete. Ergo hoc quidem apparet, nos ad agendum esse natos."/>
      <Square colour="yellow"/>
      <People names={ ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"] }/>
    </>
    );

export default Stuff;