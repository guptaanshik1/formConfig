import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { forwardRef, useState } from "react";
import P3 from "../designSystem/typography/paragrapgh/P3";
import { systemColors } from "../designSystem/colors/systemColors";
import { FormTypes } from "../../utils/data";
import {
  commonFormStyles,
  commonPlaceholderStyles,
} from "../../utils/globalStyles";

const CustomAadhaarNumberField = forwardRef((props: any, ref) => {
  const [verify, setVerify] = useState(false);

  return (
    <>
      {props.errorMsg && (
        <Flex alignItems={"flex-end"}>
          <P3 color={systemColors.error[600]}>{props.errorMsg}</P3>
        </Flex>
      )}
      <InputGroup>
        <Input
          ref={ref}
          type={FormTypes.TEXT}
          value={props.value}
          placeholder={props.placeholder}
          {...commonPlaceholderStyles}
          {...commonFormStyles}
          {...props}
        />
        <InputRightElement margin="8px 15px 0 0 " cursor={"pointer"}>
          {!verify ? (
            <Button color={systemColors.primary} textDecoration={"underline"}>
              Verify
            </Button>
          ) : (
            <Flex flexDir={"row"} gridGap={"2px"} mr="15px">
              {" "}
              <Text
                fontSize={"16px"}
                lineHeight={"24px"}
                fontWeight={"600"}
                color="#1DA366"
              >
                Verified
              </Text>
            </Flex>
          )}
        </InputRightElement>
      </InputGroup>
    </>
  );
});

export default CustomAadhaarNumberField;
