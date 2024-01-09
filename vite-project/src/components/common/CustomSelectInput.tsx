import { Flex, Select, chakra } from "@chakra-ui/react";
import { useCallback } from "react";
import { systemColors } from "../designSystem/colors/systemColors";
import H5 from "../designSystem/typography/heading/H5";
import { commonFormStyles } from "../../utils/globalStyles";
import { OPTION } from "../../utils/data";
import { FaAngleDown } from "react-icons/fa";

const CustomSelectInput = (props: any) => {
  //   useEffect(() => {
  //     console.log("[CustomSelectInput]", {
  //       formValue: props.formValue,
  //       key: props.apiKey,
  //       value: props.formValue[props.apiKey],
  //     });
  //   }, []);

  const handleOnChange = useCallback((e: any) => {
    const value = e.target.value;
    props.onInput({ value, apiKey: props.apiKey });
  }, []);

  if (props.label) {
    return (
      <Flex gridGap={"10px"} flexDir={"column"}>
        <H5 color={systemColors.grey[900]}>
          {props.label}
          {props.required && (
            <chakra.span color={systemColors.error[600]}>*</chakra.span>
          )}
        </H5>
        <Select
          value={props.value}
          onChange={handleOnChange}
          isDisabled={props.disabled}
          isInvalid={props.value === ""}
          {...commonFormStyles}
        >
          <option
            style={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "24px",
              color: systemColors.grey[500],
            }}
            value={""}
            selected
          >
            {"Select " + props.label}
          </option>
          {props.options.map((option: OPTION) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </Flex>
    );
  }

  return (
    <Select
      value={props.value}
      onChange={handleOnChange}
      isDisabled={props.disabled}
      icon={<FaAngleDown size={"24px"} />}
      {...commonFormStyles}
    >
      <option
        style={{
          fontSize: "16px",
          fontWeight: 500,
          lineHeight: "24px",
          color: systemColors.grey[500],
        }}
      >
        Select
      </option>
      {props.options.map((option: OPTION) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
};

export default CustomSelectInput;
