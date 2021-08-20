import React, {useState} from 'react'; 

const Tabs = (props) =>{
    const {tabList, setTabList} = props;
    const {activeTab, setActiveTab} = props;

const activateTab = (e) =>{
    let convert = e.target.innerText.slice(-1);

    setActiveTab(Number(convert));
}
return(
    <div className = "App" style = {{display:"flex", justifyContent:"center", width:"600px", margin:"auto", height:"80px" }}>
    {
        tabList.map((tab, index) => (
        <p style ={{border:"3px solid black", width:"600px", padding:"10px"}} onClick = {activateTab} > 
        {tab.label}
        </p>
    ))
    }
    </div>
)
}
export default Tabs;