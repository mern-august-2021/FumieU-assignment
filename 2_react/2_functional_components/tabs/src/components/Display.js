import React, {useState} from 'react';

const Display = (props) => {
    const {tabList} = props;
    const {activeTab, setActiveTab} = props;


return (
    <div style ={{width:"600px", height:"400px", border:"3px solid black", margin:"auto", padding:"10px"}}>
    {
        tabList[activeTab-1].content
    }
    </div>
)
    }

    export default Display;
