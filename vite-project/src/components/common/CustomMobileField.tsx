import {
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  chakra,
} from "@chakra-ui/react";
import P2 from "../designSystem/typography/paragrapgh/P2";
import { systemColors } from "../designSystem/colors/systemColors";
import { forwardRef, useCallback } from "react";
import H5 from "../designSystem/typography/heading/H5";
import P3 from "../designSystem/typography/paragrapgh/P3";
import { FormTypes } from "../../utils/data";
import {
  commonPlaceholderStyles,
  commonFormStyles,
} from "../../utils/globalStyles";

const MobileAddonChildren = () => {
  return <P2 color={systemColors.grey[500]}>91+</P2>;
};

const CustomMobileField = forwardRef((props: any, ref) => {
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
        <InputGroup>
          <InputLeftAddon
            h={{ base: "56px", md: "58px" }}
            bg={"none"}
            children={<MobileAddonChildren />}
          />
          <Input
            ref={ref}
            type={FormTypes.TEXT}
            value={props.value}
            placeholder={props.placeholder}
            onChange={handleOnChange}
            {...commonPlaceholderStyles}
            {...commonFormStyles}
            {...props}
          />
        </InputGroup>
      </Flex>
    );
  }
});

export default CustomMobileField;
