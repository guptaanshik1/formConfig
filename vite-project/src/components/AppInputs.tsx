import { useCallback } from "react";
import { TAppInputProps, TFormValidators, FormTypes } from "../utils/data";
import AadhaarNumberInputField from "./common/AadhaarNumberInputField";
import CustomDateInput from "./common/CustomDateInput";
import CustomMobileField from "./common/CustomMobileField";
import CustomSelectInput from "./common/CustomSelectInput";
import CustomTextInput from "./common/CustomTextInput";
import CustomTextareaInput from "./common/CustomTextareaInput";

// DEFINITION OF <AppInput /> Component

// AppInput is a God Component that will unify the Usage Api of Other form input Components based on 'type'

const AppInputs = (props: {
  data: TAppInputProps[];
  onInput: Function;
  formValue: any;
  formErrors?: Record<string, any>;
  formValidators?: TFormValidators;
}) => {
  const handleInput = useCallback(
    ({ value, apiKey }: { value: any; apiKey: string }) => {
      if (apiKey) {
        props.onInput({
          apiKey,
          value,
        });
      }
    },
    []
  );

  const { formValue, formErrors = {} } = props;

  return props.data.map((fieldConfig) => {
    const value = formValue[fieldConfig.apiKey];

    const isInvalid = !!formErrors[fieldConfig.apiKey];
    const errorMsg = formErrors[fieldConfig.apiKey];

    if (fieldConfig.type === "select") {
      return (
        <>
          <CustomSelectInput
            isInvalid={isInvalid}
            key={fieldConfig.apiKey}
            {...fieldConfig}
            onInput={handleInput}
            value={value}
          />
          {fieldConfig.subfields && fieldConfig.subfields[value] && (
            <AppInputs
              data={fieldConfig.subfields[value]}
              onInput={handleInput}
              formValue={formValue}
            />
          )}
        </>
      );
    }

    if (fieldConfig.type === FormTypes.MOBILE) {
      return (
        <CustomMobileField
          key={fieldConfig?.apiKey}
          onInput={handleInput}
          isInvalid={isInvalid}
          errorMsg={errorMsg}
          value={value}
          {...fieldConfig}
          formValue={formValue}
        />
      );
    }

    if (fieldConfig.type === FormTypes.CARD_NUMBER) {
      return (
        <AadhaarNumberInputField
          key={fieldConfig.apiKey}
          onInput={handleInput}
          isInvalid={isInvalid}
          errorMsg={errorMsg}
          value={value}
          {...fieldConfig}
          formValue={formValue}
        />
      );
    }

    if (fieldConfig.type === FormTypes.DATE) {
      return (
        <>
          <CustomDateInput
            key={fieldConfig.apiKey}
            value={value}
            onInput={handleInput}
            {...fieldConfig}
            formValue={formValue}
          />
        </>
      );
    }

    if (fieldConfig.type === "file") {
      // return <CustomFileInput {...fieldConfig} />
      return null;
    }

    if (fieldConfig.type === FormTypes.TEXTAREA) {
      return (
        <>
          <CustomTextareaInput
            key={fieldConfig.apiKey}
            isInvalid={isInvalid}
            onInput={handleInput}
            value={value}
            errorMsg={errorMsg}
            {...fieldConfig}
          />
        </>
      );
    }

    return (
      <>
        <CustomTextInput
          key={fieldConfig.apiKey}
          isInvalid={isInvalid}
          onInput={handleInput}
          value={value}
          errorMsg={errorMsg}
          {...fieldConfig}
        />
        {fieldConfig.subfields && fieldConfig.subfields[value] && (
          <AppInputs
            data={fieldConfig.subfields[value]}
            onInput={handleInput}
            formValue={formValue}
          />
        )}
      </>
    );
  });
};

export default AppInputs;
