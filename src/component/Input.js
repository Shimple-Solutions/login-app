import cx from "classnames";
import { useField } from "formik";
import Field from "./Field";

const Input = ({ label, type = "text", children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Field meta={meta} label={label} name={field.name}>
      <input
        id={field.name}
        className={cx(
          "form-control",
          meta && meta.error && meta.touched && "is-invalid",
          meta && !meta.error && meta.touched && "is-valid"
        )}
        type={type}
        {...field}
        {...props}
      />
    </Field>
  );
};

export default Input;
