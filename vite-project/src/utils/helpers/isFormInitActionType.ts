import { FormState, TFormActionType, TInitFormActionType } from "../data";

export const isFormInitActionType = (
  value: TInitFormActionType | TFormActionType
): value is TInitFormActionType => {
  return "type" in value && value.type === FormState.INIT;
};
