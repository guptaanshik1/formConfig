import {
  TErrorResetActionType,
  TFormErrorActionType,
  FormState,
} from "../data";

export const isErrorResetActionType = (
  value: TErrorResetActionType | TFormErrorActionType
): value is TErrorResetActionType => {
  return "type" in value && value.type === FormState.RESET;
};
