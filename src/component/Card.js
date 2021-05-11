import cx from "classnames";

const CardBody = ({ children }) => <div className="card-body">{children}</div>;

const CardHeader = ({ children }) => (
  <div className="card-header">{children}</div>
);

const CardFooter = ({ children }) => (
  <div className="card-footer">{children}</div>
);

const BasicCard = ({ header, children }) => {
  return (
    <div className="card">
      {header && <CardHeader>{header}</CardHeader>}
      <CardBody>{children}</CardBody>
    </div>
  );
};


export const CardWithFooter = ({ header, footer, children, className }) => (
  <div className={cx("card", className)}>
    {header && <CardHeader>{header}</CardHeader>}
    <CardBody>{children}</CardBody>
    {footer && <CardFooter>{footer}</CardFooter>}
  </div>
);

export const DarkCard = ({ children, ...props }) => (
  <CardWithFooter className="text-white bg-dark" {...props}>
    {children}
  </CardWithFooter>
);

const Card = ({ children, ...props }) => {
  return <BasicCard {...props}>{children}</BasicCard>;
};

export default Card;
