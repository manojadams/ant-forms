import React from "react";
import { BaseFormGroup } from "@manojadams/metaforms-core";

export default class FormGroup extends BaseFormGroup {
    tabs(): JSX.Element {
        throw new Error("Method not implemented.");
    }
    panels(): JSX.Element {
        throw new Error("Method not implemented.");
    }
}