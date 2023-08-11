import React from "react";
import MetaformRenderer, { IFormRenderer } from "@manojadams/metaforms-core";
import { FormControl, FormGroup, FormStepper, FormWizard } from "./forms";
import { Button } from "antd";

/**
 * Dynamically render forms using `metaforms schema` and `ant design components`
 */
class AntForm extends React.Component<IFormRenderer> {
    render() {
        return (
            <MetaformRenderer
                {...this.props}
                baseFormControl={FormControl}
                baseFormGroup={FormGroup}
                baseFormStepper={FormStepper}
                baseFormWizard={FormWizard}
                buttons={{
                    submit: <Button type="primary">Submit</Button>,
                    next: <Button type="primary">Next</Button>,
                    previous: <Button>Previous</Button>,
                    cancel: <Button type="link">Cancel</Button>
                }}
            />
        );
    }
}

export default AntForm;
