// import { useSelector } from "react-redux";
import { CardWithFooter } from "./component/Card";
import { PrimaryButton } from "./component/Button";
import Input from "./component/Input";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import api from "./common/api";

function App() {
  // const { is_logged_in } = useSelector((state) => state.auth);
  const initialValues = {
    email: "email@email.com",
    password: "123456789a",
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vw-100 vh-100">
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required(),
          password: Yup.string().required(),
        })}
        onSubmit={(values) => {
          console.log("I am submitting this", values);
          // return Promise.resolve();
          return api
            .post("/login", values)
            .then((resp) => {
              console.log("Response", resp);
            })
            .catch((error) => {
              console.log("Error response", error.message);
            });
        }}
      >
        {({ handleSubmit, isSubmitting }) => {
          // console.log("errors", errors);
          // console.log("is submitting", isSubmitting);
          return (
            <Form onSubmit={handleSubmit}>
              <CardWithFooter
                header="This is a header"
                footer={
                  <div>
                    {/* <SecondaryButton>Reset</SecondaryButton> */}
                    <PrimaryButton type="submit" isLoading={isSubmitting}>
                      Submit
                    </PrimaryButton>
                  </div>
                }
              >
                <Input name="email" label="Email" />
                <Input name="password" type="password" label="Password" />
              </CardWithFooter>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default App;
