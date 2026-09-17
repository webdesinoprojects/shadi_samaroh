import React from 'react';
import Select from 'react-select';
import { useTheme } from '../Provider/ThemeProvider';

const CustomSelect = ({ options, value, onChange }) => {
    const { theme } = useTheme();

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            border: `1px solid ${theme ? '#EC4899' : ''}`,
            borderRadius: '4px',
            padding: '2px',
            minHeight: '30px',
            fontSize: '14px',
            backgroundColor: 'transparent',
            color: theme ? '#FFF1F7' : '#4A102B',
            '&:hover': {
                border: `1px solid #EC4899`,
                boxShadow: state.isFocused ? `0 0 0 1px #EC4899` : "",
            },
            boxShadow: "",
        }),
        valueContainer: (provided) => ({
            ...provided,
            padding: '0 6px',
            color: theme ? '#FFF1F7' : '#4A102B',
        }),
        input: (provided) => ({
            ...provided,
            margin: '0',
            padding: '0',
            backgroundColor: 'transparent',
            color: theme ? '#FFF1F7' : '#4A102B',
        }),
        singleValue: (provided) => ({
            ...provided,
            fontSize: '14px',
            color: theme ? '#FBCFE8' : '#4A102B',
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#DB2777' : state.isFocused ? '#FCE7F3' : theme ? '#4A102B' : '#FFF',
            color: state.isSelected ? "white" : state.isFocused ? '#4A102B' : theme ? '#FFF1F7' : '#4A102B',
            fontSize: '14px',
            ':active': {
                backgroundColor: '#DB2777',
                color: '#FFF',
            },
        }),
        menu: (provided) => ({
            ...provided,
            fontSize: '14px',
            backgroundColor: theme ? '#4A102B' : '#FFF',
            color: theme ? '#FFF1F7' : '#4A102B',
        }),
        placeholder: (provided) => ({
            ...provided,
            fontSize: '14px',
            color: theme ? '#E9B5CD' : '#4A102B',
        }),
        indicatorsContainer: (provided) => ({
            ...provided,
            height: '30px',
            color: theme ? 'white' : '#4A102B',
        }),
    };

    return (
        <Select
            styles={customStyles}
            options={options}
            value={options.find(option => option.value === value)}
            onChange={onChange}
            components={{ IndicatorSeparator: () => null }}
        />
    );
};

export default CustomSelect;
