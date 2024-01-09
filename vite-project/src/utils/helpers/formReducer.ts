import { TFormActionType, TInitFormActionType } from "../data";
import { isFormInitActionType } from "./isFormInitActionType";

export const formReducer = (
  state: any,
  action: TFormActionType | TInitFormActionType
) => {
  if (isFormInitActionType(action)) {
    return {
      ...state,
      ...action.initialValues,
    };
  }
  return {
    ...state,
    [action.apiKey]: action.value,
  };
};
