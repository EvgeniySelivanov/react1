import { useState } from "react";

function FunctionalColorText(props){
const [color, setColor]=useState('Orange');
const [background,setBackground]=useState('Black');


const onBackGroundChange = (event) => {
   /*  this.setState({
        background: event.target.value
    }); */

     setBackground(event.target.value);
}
const onColorChange = (event) => {
    /* this.setState({
        color: event.target.value
    }); */
    setColor(event.target.value);
}


return (
    <div>
        <div onChange={onBackGroundChange}>
            <input type="radio" value="Yellow" name="background"></input> <span>Yellow</span>
            <input type="radio" value="DarkKhaki" name="background"></input> <span>DarkKhaki</span>
            <input type="radio" value="Aqua" name="background"></input> <span>Aqua</span>
        </div>
        <div onChange={onColorChange}>
            <input type="radio" value="Red" name="color"></input> <span>Red</span>
            <input type="radio" value="Green" name="color"></input> <span>Green</span>
            <input type="radio" value="Blue" name="color"></input> <span>Blue</span>
        </div>
        <p style={{ color: color, background: background }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
   
);
}
export default FunctionalColorText;