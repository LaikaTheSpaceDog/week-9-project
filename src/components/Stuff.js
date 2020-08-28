import React from 'react';
import Paragraph from "./Paragraph.js"
import People from "./People.js"
import Square from "./Square.js"
import Clicked from "./Clicked.js"
import ToggleText from "./ToggleText.js"
import Counter from "./Counter.js"
import StepCounter from "./StepCounter.js"
import RollCall from './RollCall.js'
import TwoCounters from './TwoCounters'
import LightBox from './LightBox.js'
import Length from './Length.js'
import TempConverter from './TempConverter.js'
import List from './List.js'
import Adder from './Adder.js'
import Transform from './Transform.js'
import Progress from './Progress.js'
import Dates from './Dates.js'

const Stuff = ({square}) => (
    <>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu hanc copiosiorem etiam soles dicere. Ubi ut eam caperet aut quando? Videmus igitur ut conquiescere ne infantes quidem possint. Magna laus. Bonum patria: miserum exilium. Sed tu istuc dixti bene Latine, parum plane. Duo Reges: constructio interrete. Ergo hoc quidem apparet, nos ad agendum esse natos.</Paragraph>
      {!square ? null :
      <Square colour="yellow"/>}
      <People names={ ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"] }/>
      <Clicked />
      <ToggleText initial="Hello" alternate="World" />
      <Counter initial={ 50 } max={ 100 } />
      <StepCounter max={ 100 } step={ 5 } />
      <RollCall names={ ["Alex", "Dean", "Gilson", "Marta", "Oliver", "Oscar", "Rohan", "Tom", "Will", "Zack"] } />
      <TwoCounters />
      <LightBox src={"https://d1dd4ethwnlwo2.cloudfront.net/wp-content/uploads/2018/10/bubz3.jpeg"}/>
      <Length label={ "Label" } name={ "Test" } />
      <TempConverter />
      <List />
      <Adder />
      <Transform transform={ x => x * x } />
      <Progress />
      <Dates />
    </>
    );

Stuff.defaultProps = {
  square: true,
}

export default Stuff;