import React from "react";
import { BaseFormStepper } from "@manojadams/metaforms-core";

class FormStepper extends BaseFormStepper {
    steps(): JSX.Element {
        throw new Error("Method not implemented.");
    }
}

export default FormStepper;