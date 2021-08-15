import React from 'react';

const DisplayColor = (props)=>{
    const { colorList } = props;

return(
    <div>
        <div style = {{display: "flex", flexDirection: "row", justifyContent: "flex start"}}>
            {
                colorList.map((color, index) => (
                <div key={index} style={{
                    border:"solid black 1px",
                    margin:"30px",
                    width:"60px",
                    height:"60px",
                    backgroundColor:color
                }}>   
                </div>  
                )) 
            }
        </div>
    </div>
)
    }
export default DisplayColor;