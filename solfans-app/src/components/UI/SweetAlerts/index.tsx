import Swal, { SweetAlertOptions, SweetAlertResult } from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ThemeProvider } from "styled-components";

import DangerousText from "../DangerousText";
import { TypographyProps } from "../Text/types";

import theme from "config/theme";

// Docs here: https://sweetalert2.github.io/#icons

interface TextProps {
  text: string;
  size?: TypographyProps["size"];
  color?: TypographyProps["color"];
  font?: TypographyProps["font"];
  style?: React.CSSProperties;
}

const ModalText = ({ style, ...props }: TextProps) => (
  <ThemeProvider theme={theme}>
    <DangerousText {...props} style={{ textAlign: "center", ...style }} />
  </ThemeProvider>
);

const SweetAlert = withReactContent(Swal);

export const fireSweetAlert = (props: SweetAlertOptions) => SweetAlert.fire({ ...props });

export const fireLoadingAlert = (titleText?: string) =>
  fireSweetAlert({
    didOpen: () => SweetAlert.showLoading(),
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    titleText: titleText || "Loading...",
  });

export const fireSuccessAlert = (titleText?: string, timer?: number) =>
  fireSweetAlert({
    toast: true,
    position: "top-end",
    icon: "success",
    timer: timer || 1500,
    showConfirmButton: false,
    titleText: titleText || "Success!",
  });

export const fireErrorAlert = (titleText?: string) =>
  fireSweetAlert({
    toast: true,
    position: "top-end",
    icon: "error",
    timer: 5000,
    showConfirmButton: false,
    titleText: titleText || "Something went wrong. Please reload the page and try again.",
  });

interface GeneralAlertProps extends SweetAlertOptions {
  title: TextProps;
  description?: TextProps;
  footer?: TextProps;
  confirmButton?: TextProps;
  cancelButton?: TextProps;
  denyButton?: TextProps;
  onResolved?: (result: SweetAlertResult) => void;
  customHTML?: React.ReactNode;
}

export const fireGeneralAlert = ({
  title,
  description,
  footer,
  confirmButton,
  cancelButton,
  denyButton,
  onResolved,
  customHTML,
  ...props
}: GeneralAlertProps) =>
  fireSweetAlert({
    title: <ModalText {...title} />,
    html: description ? <ModalText {...description} /> : customHTML || undefined,
    footer: footer && <ModalText {...footer} />,
    ...props,
    // @ts-ignore
    confirmButtonText: confirmButton && <ModalText {...confirmButton} />,
    // @ts-ignore
    cancelButtonText: cancelButton && <ModalText {...cancelButton} />,
    // @ts-ignore
    denyButtonText: denyButton && <ModalText {...denyButton} />,
  }).then((result) => {
    if (!onResolved) return;
    onResolved(result);
  });
