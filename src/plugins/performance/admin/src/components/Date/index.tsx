import React from "react"
import GenericComboBox from "../GenericComboBox"

const PerformanceDate = (props) => {

    const options = [
        {
            key: 1,
            label: "csütörtök - 2023.04.13",
            value: "2023-04-13"
        },
        {
            key: 2,
            label: "péntek - 2023.04.14",
            value: "2023-04-14"
        },
        {
            key: 3,
            label: "szombat - 2023.04.15",
            value: "2023-04-15"
        },
        {
            key: 4,
            label: "vasárnap - 2023.04.16",
            value: "2023-04-16"
        },
    ]

    return <GenericComboBox {...props} options={options}/>
}

export default PerformanceDate;