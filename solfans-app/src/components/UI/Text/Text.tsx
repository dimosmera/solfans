import { TypographyProps } from "./types";
import StyledComponent from "./styled";

interface Props extends TypographyProps {
  component?: React.ElementType;
}

/**
 *  Renders some text
 */
const Text = ({ component, children, ...props }: Props) => (
  <StyledComponent as={component && component} {...props}>
    {children}
  </StyledComponent>
);

export default Text;
