import React from 'react';
import Text from "./Text.js";
import People from "./People.js"
import Pagination from "./Pagination.js"

const mainStyle = {
    width: "66.66%"
};

const Stuff = () => (
    <main style={mainStyle}>
      <Text />
      <People />
      <Pagination />
    </main>
    );

export default Stuff;