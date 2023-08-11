import React from "react";
import { DatePicker as AntDatePicker, Space } from 'antd';
import { IFieldProps } from "../../common";

interface IProps extends IFieldProps {
    
}

function DatePicker(props: IProps) {
    return (
        <AntDatePicker 
            className={props.className}
            style={{
                width: "100%"
            }}
        />
    )
}

export default DatePicker;
