import React, {useState} from 'react';

const ColorForm = (props) => {
    const {colorList, setColorList} = props;
    const [color, setColor] = useState("");

const submitHandler = (e) =>{
    e.preventDefault();
    setColorList([ ...colorList, color]);
    setColor("");
};
return(
    <div>

        <form onSubmit={submitHandler} style={{width:"25%", textAlign:"left", margin:"auto"}}>
        <p>                   
        <label htmlFor="color">Color: </label>
        <input value={color} name="color" onChange={(e)=>{
            setColor(e.target.value)}} type="text" />
        </p>
        <input type="submit" value="Add" style={{margin:"auto"}}/>
        </form>
    </div>
)

}
export default ColorForm;