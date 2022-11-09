import { Combobox, ComboboxOption } from "@strapi/design-system";
import React from "react"
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import getTrad from '../../utils/getTrad';

const GenericComboBox = ({
    attribute,
    description,
    disabled,
    error,
    intlLabel,
    labelAction,
    name,
    onChange,
    required,
    value,
    options
}) => {

    const { formatMessage } = useIntl();
    
    const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : '';
    const label = formatMessage(intlLabel);

    return (
        <Combobox 
            id={name} 
            hint={description && formatMessage(description)} 
            error={errorMessage} 
            label={label} 
            labelAction={labelAction}
            value={value}
            disabled={disabled}
            onChange={(selectedOption => {
                onChange({ target: { name, value: selectedOption, type: attribute.type}})
            })}
            required={required}
        >
            {options.map(option => (
                <ComboboxOption key={option.key} value={option.value}>{option.label}</ComboboxOption>
            ))}
        </Combobox>

    )
}

export default GenericComboBox;