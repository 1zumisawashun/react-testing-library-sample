type Props = JSX.IntrinsicElements["button"];

export const Button: React.FC<Props> = (props) => {
  const { children, ...buttonProps } = props;

  return <button {...buttonProps}>{children}</button>;
};
