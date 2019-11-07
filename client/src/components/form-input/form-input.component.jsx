import React from "react";

import {
  GroupContainer,
  FormInputContainer,
  LabelContainer
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...otherProps} />
      {label ? (
        <LabelContainer className={otherProps.value.length ? "shrink" : ""}>
          {label}
        </LabelContainer>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
