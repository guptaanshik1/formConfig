import { Button, Flex } from "@chakra-ui/react";
import { useCallback, useEffect, useMemo, useReducer } from "react";
import {
  FormState,
  TAppInputOnInputArgs,
  TAppInputProps,
  TFormActionType,
  TFormInitialState,
  TInitialFormErrors,
} from "../../../utils/data";
import { formReducer } from "../../../utils/helpers/formReducer";
import { workDetailsConfig } from "./utils/config/workDetailConfig";
import { workDetailsValidators } from "./utils/config/workDetailValidators";
import { formErrorsReducer } from "../../../utils/helpers/formErrorsReducer";
import { isNullOrUndefined } from "../../../utils/helpers/isNullOrUndefined";
import {
  globalPadding,
  loanBottomMargin,
  marginTopForStepHeader,
} from "../../../utils/globalStyles";
import AppInputs from "../../AppInputs";
import { workDetailData } from "./utils/workDetailData";
import { getStateFromPincode } from "./utils/helpers/getStateFromPincode";

const formInitialState: TFormInitialState = {};
const initialFormErrors: TInitialFormErrors = {};

const WorkDetails = () => {
  const [state, dispatch] = useReducer(formReducer, formInitialState);
  const [errors, dispatchError] = useReducer(
    formErrorsReducer,
    initialFormErrors
  );

  const onInput = useCallback((obj: TAppInputOnInputArgs) => {
    dispatch(obj as TFormActionType);
    // reset server error of the touched field
    const { apiKey, value } = obj;

    // console.log(getFieldConfigByApiKey())
    let ans = {};
    workDetailsConfig?.formFields?.forEach((fieldConfig) => {
      ans = getFieldConfigByApiKey(fieldConfig, apiKey);
      if (ans) {
        return;
      } else if (fieldConfig?.subfields) {
        fieldConfig?.subfields?.SALARIED?.forEach((field) => {
          ans = getFieldConfigByApiKey(field, apiKey);
          if (ans) {
            return;
          }
        });
        if (ans) {
          return;
        }
      }
    });

    const fieldConfig = workDetailsConfig.formFields.find(
      (field) => field.apiKey === apiKey
    );

    if (
      value &&
      fieldConfig &&
      fieldConfig.validators &&
      workDetailsValidators[fieldConfig.validators]
    ) {
      // run validation on currently edited field
      const validatorFn = workDetailsValidators[fieldConfig.validators];
      const errorMsg = validatorFn(value);
      dispatchError({
        apiKey,
        error: errorMsg || "",
      });
    }
  }, []);

  const getFieldConfigByApiKey = (fieldConfig: any, apiKey: string) => {
    return fieldConfig.apiKey === apiKey ? fieldConfig : {};
  };

  //   const initialisedData = useMemo(
  //     () => ({
  //       employment_type:
  //         applicationData?.loan_seeker_details?.work_details?.[0]
  //           ?.employment_type,
  //       employer:
  //         applicationData?.loan_seeker_details?.work_details?.[0]?.employer,
  //       designation:
  //         applicationData?.loan_seeker_details?.work_details?.[0]?.designation,
  //       experience_in_year:
  //         applicationData?.loan_seeker_details?.work_details?.[0]
  //           ?.experience_in_year,
  //       monthly_income:
  //         applicationData?.loan_seeker_details?.work_details?.[0]?.monthly_income,
  //       current_job_years:
  //         applicationData?.loan_seeker_details?.work_details?.[0]
  //           ?.current_job_years,
  //       profession:
  //         applicationData?.loan_seeker_details?.work_details?.[0]?.profession,
  //       address_line_1:
  //         applicationData?.loan_seeker_details?.work_details?.[0]?.work_address
  //           ?.address_line_1,
  //       landmark:
  //         applicationData?.loan_seeker_details?.work_details?.[0]?.work_address
  //           ?.locality,
  //       pincode:
  //         applicationData?.loan_seeker_details?.work_details?.[0]?.work_address
  //           ?.pincode,
  //       city: applicationData?.loan_seeker_details?.work_details?.[0]
  //         ?.work_address?.city,
  //       state:
  //         applicationData?.loan_seeker_details?.work_details?.[0]?.work_address
  //           ?.state,
  //       std_code:
  //         applicationData?.loan_seeker_details?.work_details?.[0]?.work_address
  //           ?.std_code,
  //       phone_number:
  //         applicationData?.loan_seeker_details?.work_details?.[0]?.work_address
  //           ?.phone_number,
  //       office_extension:
  //         applicationData?.loan_seeker_details?.work_details?.[0]?.work_address
  //           ?.office_extension,
  //       work_email:
  //         applicationData?.loan_seeker_details?.work_details?.[0]?.work_email,
  //       work_phone_number:
  //         applicationData?.loan_seeker_details?.work_details?.[0]
  //           ?.work_phone_number,
  //     }),
  //     [applicationId, applicationData?.agent_id]
  //   );

  useEffect(() => {
    dispatch({
      type: FormState.INIT,
      initialValues: isNullOrUndefined(workDetailData)
        ? { ...formInitialState }
        : {
            ...workDetailData,
            state: getStateFromPincode(state.pincode),
          },
    });
  }, [workDetailData, state.pincode]);

  const disableSubmit = useMemo(() => {
    let ans = false;
    const anyError = Object.values(errors).some((errorValue) => !!errorValue);
    if (anyError) {
      return anyError;
    }
    for (const item of workDetailsConfig?.formFields || []) {
      if (
        item.required &&
        (isNullOrUndefined(state[item.apiKey]) || state[item.apiKey] == "")
      ) {
        if (state[item.apiKey] === false) {
          continue;
        } else {
          ans = true;
          break;
        }
      }
    }
    return ans;
  }, [state, errors]);

  console.log("errors:", errors);

  const submitWorkDetails = () => {
    const payload = {
      work_details: [
        {
          employment_type: state.employment_type,
          employer: state.employer,
          designation: state.designation,
          experience_in_year: state.current_job_years,
          monthly_income: state.monthly_income,
          profession: state.profession,
          work_email: state.work_email,
          work_phone_number: state.work_phone_number,
          phone_number: state.phone_number,
          work_address: {
            address_line_1: state.address_line_1,
            locality: state.landmark,
            pincode: state.pincode,
            city: state.city,
            state: state.state,
            std_code: state.std_code,
            phone_number: state.phone_number,
            office_extension: state.office_extension,
            // id: applicationData?.loan_seeker_details?.work_details?.[0]
            //   ?.work_address?.id,
          },
        },
      ],
    };
  };

  return (
    <>
      <Flex
        p={globalPadding}
        mb={loanBottomMargin}
        mt={marginTopForStepHeader}
        flexDir={"column"}
        gridGap={"32px"}
      >
        <Flex flexDir={"column"} gridGap={"20px"}>
          {/* Forms Fields will render here */}
          <AppInputs
            data={workDetailsConfig?.formFields as unknown as TAppInputProps[]}
            onInput={onInput}
            formValue={state}
            formValidators={workDetailsValidators}
            formErrors={errors}
          />
        </Flex>

        <Button
          type="button"
          w={"full"}
          p={{ base: "16px 18px", md: "24px 18px" }}
          my="auto"
          h={{ base: "56px", md: "74px" }}
          borderRadius="6px"
          onClick={submitWorkDetails}
          isDisabled={disableSubmit}
          boxShadow={"0px 1px 2px 0px rgba(16, 24, 40, 0.05)"}
          className="bg-grey-900 text-white hover:bg-grey-700 font-medium rounded-md leading-5"
          _disabled={{
            opacity: 0.6,
            cursor: "not-allowed",
            _hover: {
              bg: "gray.500",
            },
          }}
        >
          Console
        </Button>
      </Flex>
    </>
  );
};

export default WorkDetails;
