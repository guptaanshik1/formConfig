import { IFontProps } from "../../../../utils/data";
import CustomText from "../../../CustomText";

const H5 = (props: IFontProps) => {
  return (
    <CustomText styleArr={["16px", "24px", 600]} {...props}>
      {props.children}
    </CustomText>
  );
};

export default H5;
