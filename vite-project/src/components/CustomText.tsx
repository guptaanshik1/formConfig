import { Text, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IProps extends TextProps {
  styleArr: [string, string, number];
  children: ReactNode;
}

const CustomText = ({ styleArr, ...props }: IProps) => {
  const fontSize = styleArr[0];
  const lineHeight = styleArr[1];
  const fontWeight = styleArr[2];

  return (
    <Text
      fontSize={fontSize}
      lineHeight={lineHeight}
      fontWeight={fontWeight}
      {...props}
    >
      {props.children}
    </Text>
  );
};

export default CustomText;
