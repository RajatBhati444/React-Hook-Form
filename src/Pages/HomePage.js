import React, { useEffect } from "react";
import FormBuilder from "../Components/FormBuilder";
import useForm from "../Hooks/useForm";

function HomePage(props) {
  const { form, updateForm, setForm } = useForm();

  console.log(form);

  useEffect(() => {
    setForm({
      name: "",
      email: "",
      password: "",
      cnfPassword: ""
    });
  }, []);

  return (
    <div>
      <FormBuilder
        FormBuilderData={[
          {
            placeholder: "Name",
            type: "text",
            keyName: "name"
          },
          {
            placeholder: "Email",
            type: "email",
            keyName: "email"
          },
          {
            placeholder: "Password",
            type: "password",
            keyName: "password"
          },
          {
            placeholder: "Confirm Password",
            type: "password",
            keyName: "cnfPassword"
          }
        ]}
        form={form}
        updateForm={updateForm}
      />
    </div>
  );
}

export default HomePage;
