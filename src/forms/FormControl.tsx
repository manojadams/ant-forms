import React from "react";
import { BaseFormControl } from "@manojadams/metaforms-core";
import { Input, InputNumber } from 'antd';
import DatePicker from "../components/DatePicker";
import SelectControl from "../components/SelectControl";
import CheckboxControl from "../components/CheckboxControl/CheckboxControl";

class FormControl extends BaseFormControl {
    month(): JSX.Element {
        throw new Error("Method not implemented.");
    }
    phone(): JSX.Element {
        throw new Error("Method not implemented.");
    }
    date(): JSX.Element {
        return (
            <DatePicker
                className={this.getWrapperClassName()}
                context={this.context}
                field={this.field} 
                setError={this.setError} 
                form={this.props.form} 
                size={"small"} 
                error={this.state.error} 
                handleChange={this.handleChange}
                handleValidation={this.handleValidation}
            />
        )
    }
    search(): JSX.Element {
        throw new Error("Method not implemented.");
    }
    text(): JSX.Element {
        return (
            <Input 
                type="text"
                pattern=""
                placeholder={this.props.form.placeholder}
                value={this.props.form.value as string}
                onBlur={this.handleValidation}
                onChange={this.handleChange}
            />
        )
    }
    label(): JSX.Element {
        throw new Error("Method not implemented.");
    }
    password(): JSX.Element {
        return (
            <Input 
                type="password"
                pattern=""
                placeholder={this.props.form.placeholder}
                value={this.props.form.value as string}
                onBlur={this.handleValidation}
                onChange={this.handleChange}
            />
        )
    }
    email(): JSX.Element {
        return (
            <Input 
                type="email"
                placeholder={this.props.form.placeholder}
                value={this.props.form.value as string}
                onBlur={this.handleValidation}
                onChange={this.handleChange}
            />
        )
    }
    number(): JSX.Element {
        return (
            <InputNumber 
                width={"100%"}
                type="number"
                placeholder={this.props.form.placeholder}
                value={this.props.form.value as string}
                onBlur={this.handleValidation}
            />
        )
    }
    radio(): JSX.Element {
        throw new Error("Method not implemented.");
    }
    checkbox(): JSX.Element {
        return (
            <CheckboxControl 
                className={this.getWrapperClassName()}
                context={this.context}
                field={this.field}
                form={this.props.form}
                error={this.state.error} 
                size={"small"} 
                handleChange={this.handleChange}
                handleValidation={this.handleValidation} 
                setError={this.setError}            />
        )
    }
    select(): JSX.Element {
        return (
            <SelectControl 
                className={this.getWrapperClassName()}
                context={this.context}
                field={this.field}
                form={this.props.form}
                error={this.state.error}
                size={"medium"}
                handleChange={this.handleChange}
                handleValidation={this.handleValidation}
                setError={this.setError}
            />
        )
    }
    multiselect(): JSX.Element {
        throw new Error("Method not implemented.");
    }
    button(): JSX.Element {
        throw new Error("Method not implemented.");
    }
    hint(): JSX.Element {
        throw new Error("Method not implemented.");
    }
    file(): JSX.Element {
        throw new Error("Method not implemented.");
    }
}

export default FormControl;
