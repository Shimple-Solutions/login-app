import cx from "classnames";

export const PrimaryButton = ({ children, ...props }) => (
  <Button className="btn-primary" {...props}>
    {children}
  </Button>
);

export const SecondaryButton = ({ children, ...props }) => (
  <Button className="btn-secondary" {...props}>
    {children}
  </Button>
);

const Button = ({
  isLoading,
  type = "button",
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cx("btn", className)}
      disabled={isLoading}
      type={type}
      {...props}
    >
      {isLoading && (
        <div className="spinner-border spinner-border-sm" role="status" />
      )}
      {!isLoading && children}
    </button>
  );
};

export default Button;
