import { Flex, Textarea, chakra } from "@chakra-ui/react";
import { forwardRef, useCallback } from "react";
import { systemColors } from "../designSystem/colors/systemColors";
import H5 from "../designSystem/typography/heading/H5";
import P3 from "../designSystem/typography/paragrapgh/P3";
import { FormTypes } from "../../utils/data";
import {
  commonPlaceholderStyles,
  commonFormStyles,
} from "../../utils/globalStyles";

const CustomTextareaInput = forwardRef((props: any, ref) => {
  const handleOnChange = useCallback((e: any) => {
    const value = e.target.value;
    props.onInput({ value, apiKey: props.apiKey });
  }, []);

  if (props.label) {
    return (
      <Flex gridGap={"10px"} flexDir={"column"}>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <H5 color={systemColors.grey[900]}>
            {props.label}
            {props.required && (
              <chakra.span color={systemColors.error[600]}>*</chakra.span>
            )}
          </H5>
          {props.errorMsg && (
            <P3 color={systemColors.error[600]}>{props.errorMsg}</P3>
          )}
        </Flex>
        <Textarea
          ref={ref}
          type={FormTypes.TEXT}
          value={props.value}
          height="100px"
          resize={"none"}
          placeholder={props.placeholder}
          onChange={handleOnChange}
          {...commonPlaceholderStyles}
          {...commonFormStyles}
          {...props}
        />
      </Flex>
    );
  }
  return (
    <>
      {props.errorMsg && (
        <Flex alignItems={"flex-end"}>
          <P3 color={systemColors.error[600]}>{props.errorMsg}</P3>
        </Flex>
      )}
      <Textarea
        ref={ref}
        type={FormTypes.TEXT}
        value={props.value}
        height="100px"
        resize={"none"}
        placeholder={props.placeholder}
        onChange={handleOnChange}
        {...commonPlaceholderStyles}
        {...commonFormStyles}
        {...props}
      />
    </>
  );
});

export default CustomTextareaInput;
