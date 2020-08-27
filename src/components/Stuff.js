import React from 'react';
import Header from "./Header.js";
import Paragraph from "./Paragraph.js"
import People from "./People.js"
import Square from "./Square.js"
import Basket from "./Basket.js"
import Clicked from "./Clicked.js"
import ToggleText from "./ToggleText.js"
import Counter from "./Counter.js"
import StepCounter from "./StepCounter.js"
import CatchMeIfYouCan from './CatchMeIfYouCan.js'
import RollCall from './RollCall.js'
import GodCounter from './GodCounter'
import TwoCounters from './TwoCounters'
import LightBox from './LightBox.js'
import Length from './Length.js'
import PasswordStrength from './PasswordStrength.js'
import TempConverter from './TempConverter.js'
import List from './List.js'
import Adder from './Adder.js'

const Stuff = ({square}) => (
    <>
      <Header>What an amazing website</Header>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu hanc copiosiorem etiam soles dicere. Ubi ut eam caperet aut quando? Videmus igitur ut conquiescere ne infantes quidem possint. Magna laus. Bonum patria: miserum exilium. Sed tu istuc dixti bene Latine, parum plane. Duo Reges: constructio interrete. Ergo hoc quidem apparet, nos ad agendum esse natos.</Paragraph>
      {!square ? null :
      <Square colour="yellow"/>}
      <People names={ ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"] }/>
      <Basket items={ [
        { name: "Coffee", price: 2.10 },
        { name: "Bananas", price: 3.50 },
        { name: "Milk", price: 250.65 },
        { name: "The Great Milk Shortage by Simon Schama", price: 12.99 },
        ] } />
        <Clicked />
        <ToggleText initial="Hello" alternate="World" />
        <Counter initial={ 50 } max={ 100 } />
        <StepCounter max={ 100 } step={ 5 } />
        <CatchMeIfYouCan jump={ 100 } />
        <RollCall names={ ["Alex", "Dean", "Gilson", "Marta", "Oliver", "Oscar", "Rohan", "Tom", "Will", "Zack"] } />
        <GodCounter />
        <TwoCounters />
        <LightBox src={"https://d1dd4ethwnlwo2.cloudfront.net/wp-content/uploads/2018/10/bubz3.jpeg"}/>
        <Length label={ "Label" } name={ "Test" } />
        <PasswordStrength label={ "Password" } name={ "password" }/>
        <TempConverter />
        <List />
        <Adder />
    </>
    );

Stuff.defaultProps = {
  square: true,
}

export default Stuff;