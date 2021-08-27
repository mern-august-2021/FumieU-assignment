import React from 'react';



const Home = (props) => {
    if (!props.word){
        return (
            <div style={{textAlign: "center"}}>
                <h1>Welcome!</h1>
            </div>
        )
        }else{
        if(isNaN(props.word)){
            return (
                <div style={{textAlign: "center"}}>
                    <h1 style ={
                        props.color
                        ?{ color: props.color, backgroundColor: props.bgColor }
                        :null
                    }>The word is: {props.word}</h1>

                </div>
            )
        }else{
            return (
                <div style={{textAlign: "center"}}>
                    <h1> The number is: {props.word}</h1>
                </div>
            )
        }
    }
    }

export default Home;