import { IFontProps } from "../../../../utils/data";
import CustomText from "../../../CustomText";

const H4 = (props: IFontProps) => {
  return (
    <CustomText styleArr={["18px", "26px", 600]} {...props}>
      {props.children}
    </CustomText>
  );
};

export default H4;
