import { Flex } from "@chakra-ui/react";
import { customColors } from "./designSystem/colors/customColors";
import { systemColors } from "./designSystem/colors/systemColors";
import H3 from "./designSystem/typography/heading/H3";
import { FaArrowLeft } from "react-icons/fa";

interface IProps {
  goBack?: boolean;
  backPath?: string;
  customBackPath?: () => void;
  title: string;
}

const LoanStepHeader = ({
  goBack,
  backPath,
  customBackPath,
  title,
}: IProps) => {
  // const handleBackNavigation = () => {
  //   if (goBack) {
  //     navigate(-1);
  //   }

  //   if (backPath) {
  //     navigate(backPath);
  //   }

  //   if (customBackPath) {
  //     customBackPath();
  //   }
  // };

  return (
    <Flex
      w={"full"}
      p={{ base: "24px 16px", md: "24px 100px" }}
      alignItems={"center"}
      position={"fixed"}
      gridGap={"20px"}
      borderBottom={`1px solid ${systemColors.grey[200]}`}
      bg={systemColors.white.absolute}
      zIndex={990}
    >
      <FaArrowLeft
        size={"24px"}
        style={{ color: customColors.BOULDER, cursor: "pointer" }}
      />
      <H3 color={customColors.ONYX}>{title}</H3>
    </Flex>
  );
};

export default LoanStepHeader;
