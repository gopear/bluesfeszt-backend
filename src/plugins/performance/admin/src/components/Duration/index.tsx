import React from "react"
import GenericComboBox from "../GenericComboBox"

interface Option {
    key: number;
    label: string;
    value: string;
}

const PerformanceDuration = (props) => {

    // const options : Option[] = []

    // for (let i = 0; i < 3; i++) {
    //     for (let j = 0; j < 2; j++) {
    //         if (i != 0 || j != 0) {                
    //             options.push({
    //                 key: (i*3)+i+j,
    //                 label: `${String(i).padStart(2, '0')}:${String(30*j).padStart(2, '0')}`,
    //                 value: `${String(i).padStart(2, '0')}:${String(30*j).padStart(2, '0')}:00.000`,
    //             })
    //         }
    //     }
    // }

    // console.log(options)

    const options = [
        {
            key: 1,
            label: "00:30",
            value: "00:30:00.000"
        },
        {
            key: 2,
            label: "01:00",
            value: "01:00:00.000"
        },
        {
            key: 3,
            label: "01:30",
            value: "01:30:00.000"
        },
    ]

    return <GenericComboBox {...props} options={options}/>
}

export default PerformanceDuration;