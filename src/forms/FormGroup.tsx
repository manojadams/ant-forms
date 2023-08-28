import React, { Fragment } from "react";
import { BaseFormGroup, Section } from "@manojadams/metaforms-core";
import { Tabs } from "antd";

export default class FormGroup extends BaseFormGroup {
    tabs(): JSX.Element {
        const items = this.sectionFields.map((tab, index) => {
            return {
                key: index + "",
                label: tab.meta.displayName,
                children: <Section section={tab} index={0} form={this.context.form} activeIndex={index} error={false} />
            }
        });
        return <Tabs defaultActiveKey="1" items={items} onChange={this.handleChange} />
    }
    panels(): JSX.Element {
        return <Fragment />;
    }
    handleChange(index: string) {
        console.log(index);
        // this.setActiveIndex(index);
    }

}