import React from "react";
import MetaformRenderer, { IFormRenderer } from "@manojadams/metaforms-core";
import { FormControl, FormGroup, FormStepper, FormWizard } from "./forms";

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
            />
        );
    }
}

export default AntForm;
