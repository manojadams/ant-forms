import React, { Fragment } from "react";
import { BaseFormControl } from "@manojadams/metaforms-core";
import { Button, Input, InputNumber, Radio } from 'antd';
import DatePicker from "../components/DatePicker";
import SelectControl from "../components/SelectControl";
import CheckboxControl from "../components/CheckboxControl/CheckboxControl";
import { Form } from "antd";

class FormControl extends BaseFormControl {
    month(): JSX.Element {
        throw new Error("Method not implemented.");
    }
    phone(): JSX.Element {
        throw new Error("Method not implemented.");
    }
    date(): JSX.Element {
        return (
            <Form.Item
                label={this.props.form.displayName}
                name={this.field.name}
            >
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
            </Form.Item>
        )
    }
    search(): JSX.Element {
        return <Fragment />;
    }
    text(): JSX.Element {
        return (
            <Form.Item
                label={this.props.form.displayName}
                name={this.field.name}>
                <Input 
                    type="text"
                    pattern=""
                    placeholder={this.props.form.placeholder}
                    value={this.props.form.value as string}
                    onBlur={this.handleValidation}
                    onChange={this.handleChange}
                />
            </Form.Item>
        )
    }
    label(): JSX.Element {
        return (
            <Form.Item 
                label={this.props.form.displayName}
                name={this.field.name}
            />
        )
    }
    password(): JSX.Element {
        return (
            <Form.Item
                label={this.props.form.displayName}
                name={this.field.name}
            >
                <Input 
                    type="password"
                    pattern=""
                    placeholder={this.props.form.placeholder}
                    value={this.props.form.value as string}
                    onBlur={this.handleValidation}
                    onChange={this.handleChange}
                />
            </Form.Item>
        )
    }
    email(): JSX.Element {
        return (
            <Form.Item
                label={this.props.form.displayName}
                name={this.field.name}>
                    <Input 
                        type="email"
                        placeholder={this.props.form.placeholder}
                        value={this.props.form.value as string}
                        onBlur={this.handleValidation}
                        onChange={this.handleChange}
                    />
                </Form.Item>
            )
    }
    number(): JSX.Element {
        return (
            <Form.Item
                label={this.props.form.displayName}
                name={this.field.name}
            >
                <InputNumber 
                    width={"100%"}
                    type="number"
                    placeholder={this.props.form.placeholder}
                    value={this.props.form.value as string}
                    onBlur={this.handleValidation}
                />
            </Form.Item>
        )
    }
    radio(): JSX.Element {
        return (
            <Form.Item
                label={this.props.form.displayName}
                name={this.field.name}
            >
                <Radio />
            </Form.Item>
        )
    }
    radioButton(): JSX.Element {
        return (
            <Form.Item
                label={this.props.form.displayName}
                name={this.field.name}
            >
                {
                    this.props.form.options?.map(option => {
                        return <Button value={option.value as string}>{option.label}</Button>
                    })
                }
            </Form.Item>
        )
    }
    checkbox(): JSX.Element {
        return (
            <Form.Item
                label={this.props.form.displayName}
                name={this.field.name}
            >
                <CheckboxControl
                    className={this.getWrapperClassName()}
                    context={this.context}
                    field={this.field}
                    form={this.props.form}
                    error={this.state.error} 
                    size={"small"} 
                    handleChange={this.handleChange}
                    handleValidation={this.handleValidation} 
                    setError={this.setError}            
                />
            </Form.Item>
        )
    }
    select(): JSX.Element {
        return (
            <Form.Item
                label={this.props.form.displayName}
                name={this.field.name}
            >
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
            </Form.Item>
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
