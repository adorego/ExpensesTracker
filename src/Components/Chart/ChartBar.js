import "./ChartBar.css"

import React from "react"

const ChartBar = props =>{

    let dynamicHeightValue = '0%'

    if(props.maxValue > 0){
        dynamicHeightValue = Math.round((props.value/props.maxValue)*100) + '%';
    }
    //console.log('dynamicHeightValue:', dynamicHeightValue, props.maxValue);
    return(
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height:dynamicHeightValue}}>

                </div>
            </div>
            <div className="chart-bar__label">
                {props.label}
            </div>

        </div>
    )
}


export default ChartBar