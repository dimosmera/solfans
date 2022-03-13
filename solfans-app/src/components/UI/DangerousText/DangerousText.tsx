/* eslint-disable react/display-name */
import React, { memo } from "react";

import Text from "../Text";

import { TypographyProps } from "../Text/types";

interface Props extends TypographyProps {
  text: string;
  onClick?: (e: any) => void;
}

import * as Style from "./styled";

const DangerousText = memo(({ text, ...props }: Props) => (
  <Text component="div" {...props}>
    <Style.Html dangerouslySetInnerHTML={{ __html: text }} />
  </Text>
));

export default DangerousText;
