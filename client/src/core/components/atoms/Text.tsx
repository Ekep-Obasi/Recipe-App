import { css } from "@emotion/react";
import styled from "@emotion/styled";

type textTagType = "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HTMLTextProps<T extends textTagType> = React.ComponentPropsWithRef<T>;

export type TextCustomProps = {
  readonly as: textTagType;
  size?: keyof typeof fontSizes;
  color?: string;
  weight?: keyof typeof fontWeight;
  readonly children: React.ReactNode;
};

export type TextProps = HTMLTextProps<TextCustomProps["as"]> & TextCustomProps;

const fontSizes = {
  large: "1.5rem",
  regular: "1.25rem",
  medium: "1rem",
  small: "0.8rem",
};

const fontWeight = {
  bold: 700,
  semibold: 600,
  medium: 500,
  regular: 400,
  light: 300,
};

const applyStyles = ({
  color = "dark",
  size = "regular",
  weight = "regular",
}: TextProps) => css`
  font-size: ${fontSizes[size]};
  font-weight: ${fontWeight[weight]};
  color: var(--${color});
  line-height: 1px;
`;

const Text = ({ children, ...props }: TextProps) => {
  
  const Component = styled(props.as)<TextProps>`
    ${applyStyles}
  `;

  return <Component {...props}>{children}</Component>;
};

export default Text;
