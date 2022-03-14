/* eslint-disable react/display-name */
import React, { memo } from "react";

import Text from "../Text";

import { TypographyProps } from "../Text/types";

type HeadingVariants = "h1" | "h2" | "h3";

interface Props extends TypographyProps {
  children: React.ReactNode;
  variant?: HeadingVariants;
}

/**
 * Renders a bold, large text that serves as a header.
 * Can customise the size, colour, etc.
 */
const Heading = memo(
  ({ children, variant = "h1", font = "BOLD", size = "XL", color = "BLACK", ...props }: Props) => (
    <Text component={variant} font={font} size={size} color={color} {...props}>
      {children}
    </Text>
  )
);

export default Heading;
