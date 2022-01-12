import "./Chart.css"

import ChartBar from "./ChartBar"
import React from "react"

const Chart = props => {
    const dataValues = props.dataPoints.map((dataPoint) => dataPoint.value);
    console.log("DataValues:", dataValues);
    const maxValue = Math.max(...dataValues);
    //console.log('MaxValue:', maxValue);
    return <div className="chart">
        {props.dataPoints.map((dataPoint) => (
           <ChartBar 
                key={dataPoint.label}
                value={dataPoint.value} 
                maxValue={maxValue} 
                label={dataPoint.label} /> 
            ))
        }
    </div>
}

export default Chart;