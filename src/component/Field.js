const Field = ({ label, meta, children, ...props }) => {
  return (
    <div className="form-group mb-2">
      <label className="label" htmlFor={props.name}>
        {label}
      </label>
      {children}
      {meta.touched && meta.error ? (
        <div className="invalid-feedback">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Field;
