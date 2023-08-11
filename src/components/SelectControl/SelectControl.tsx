import React from "react";
import { Select, Space } from 'antd';
import { IFieldProps } from '../../common';

interface IProps extends IFieldProps {

}

function SelectControl(props: IProps) {
    return (
        <Select
            style={{
                "width": "100%"
            }}
            onChange={(val1, val2) => {
                props.handleChange(null, val1);
            }}
            value={props.form.value}
            options={props.form.options}
        />
    );
}

export default SelectControl;
