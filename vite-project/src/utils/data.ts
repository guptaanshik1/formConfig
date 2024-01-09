import { TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export enum FormTypes {
  TEXT = "text",
  TEXTAREA = "textarea",
  NUMBER = "number",
  DATE = "date",
  SELECT = "select",
  FILE = "file",
  MOBILE = "type__mobile",
  CARD_NUMBER = "type__card_number",
}

export enum FormState {
  INIT = "init",
  RESET = "reset",
}

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export enum VerifiedStatus {
  VERIFIED = "VERIFIED",
  NOT_VERIFIED = "NOT VERIFIED",
  PENDING = "PENDING",
}

export type TAppInputTextProps = {
  type?: FormTypes.TEXT | FormTypes.NUMBER;
  value?: string;
  label: string;
};

export type TAppInputDateProps = {
  type?: FormTypes.DATE;
  value?: string;
  label: string;
};

export type TAppInputFileProps = {
  type?: FormTypes.FILE;
  value?: string;
  label: string;
};

export type TAppInputCardNumberProps = {
  type?: FormTypes.CARD_NUMBER;
  value?: string;
  label: string;
};

export type TAppInputMobileProps = {
  type?: FormTypes.MOBILE;
  value?: string;
  label: string;
};

export type TAppInputSelectProps = {
  type?: FormTypes.SELECT;
  value?: string;
  label: string;
  options: Array<{ label: string; value: string }>;
};

export type TAppInputTextareaProps = {
  type?: FormTypes.TEXTAREA;
  value?: string;
  label: string;
};

export type TAppInputOnInputArgs = {
  apiKey: TAppInputCommonProps["apiKey"];
  value: TAppInputCommonProps["value"];
};

export type TAppInputProps = TAppInputCommonProps &
  (
    | TAppInputTextProps
    | TAppInputSelectProps
    | TAppInputDateProps
    | TAppInputFileProps
    | TAppInputMobileProps
    | TAppInputCardNumberProps
    | TAppInputTextareaProps
  );

export type TAppInputCommonProps = {
  apiKey: string;
  formValue: Record<string, TAppInputCommonProps["value"]>;
  // onInput: (obj: TAppInputOnInputArgs) => void;
  placeholder: string;
  validators?: string;
  regex?: string;
  subfields?: Record<string, TAppInputProps[]>;
  [key: string]: any;
};

export type TValidatorFunction = (
  value: string | number
) => string | null | undefined;

export type TFormValidators = Record<string, TValidatorFunction>;

export type TInitialFormErrors = Record<string, any>;

export type TErrorResetActionType = {
  type: FormState.RESET;
};

export type TFormErrorActionType = {
  apiKey: string;
  error: string;
};

export interface ICommonAddress {
  name: string;
  address_line_1: string;
  pincode: string;
  city: string;
  state: string;
  region: string;
  email: string;
  phone_number: string;
  address_line_2: string;
  std_code: string;
  office_extension: string;
  state_jurisdiction: string;
  door_no: string;
  floor_no: string;
  building_name: string;
  street: string;
  locality: string;
  id: string;
}

export interface IRequestPagination {
  page_number: number;
  page_size: number;
}

export interface OPTION {
  value: string;
  label: string;
}

export type TInitFormActionType = {
  type: FormState;
  initialValues: Record<string, any>;
};

export type TFormActionType = {
  apiKey: string;
  value: string;
};

export type TFormInitialState = Record<string, any>;

export interface IFontProps extends TextProps {
  children: ReactNode;
}
