import React from "react"
import GenericComboBox from "../GenericComboBox"

interface Option {
    key: number;
    label: string;
    value: string;
}

const PerformanceStart = (props) => {

    const options : Option[] = []
    for (let i = 16; i < 24; i++) {
        for (let j = 0; j < 2; j++) {
            options.push({
                key: (i*(24-16))+i+j,
                label: `${String(i).padStart(2, '0')}:${String(30*j).padStart(2, '0')}`,
                value: `${String(i).padStart(2, '0')}:${String(30*j).padStart(2, '0')}:00.000`,
            })
        }
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 2; j++) {
            options.push({
                key: (i*3)+i+j,
                label: `${String(i).padStart(2, '0')}:${String(30*j).padStart(2, '0')}`,
                value: `${String(i).padStart(2, '0')}:${String(30*j).padStart(2, '0')}:00.000`,
            })
        }
    }

    return <GenericComboBox {...props} options={options}/>
}

export default PerformanceStart;