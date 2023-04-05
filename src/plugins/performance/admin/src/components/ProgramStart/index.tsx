import React from "react"
import GenericComboBox from "../GenericComboBox"

interface Option {
    key: number;
    label: string;
    value: string;
}

const ProgramStart = (props) => {

    const options : Option[] = []
    for (let i = 14; i < 19; i++) {
        options.push({
            key: i,
            label: `${String(i).padStart(2, '0')}:00`,
            value: `${String(i).padStart(2, '0')}:00:00`,
        })
    }

    return <GenericComboBox {...props} options={options}/>
}

export default ProgramStart;