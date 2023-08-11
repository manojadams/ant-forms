import { Checkbox } from "antd";
import React from "react";
import { IFieldProps } from "../../common";

interface IProps extends IFieldProps {

}

function CheckboxControl(props: IProps) {
    const options = props.form.options ?? [];
    return (
        <div className={props.className}>
            {
                options.map(option => <Checkbox value={ option.value }>{ option.label }</Checkbox>)
            }
        </div>
    )
}

export default CheckboxControl;
