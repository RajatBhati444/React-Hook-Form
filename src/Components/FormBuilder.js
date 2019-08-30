import React from "react";

function FormBuilder({ FormBuilderData, form, updateForm }) {
  function renderInput(data, index) {
    function onChange(ev) {
      const { value } = ev.target;
      updateForm(data.keyName, value);
    }

    return (
      <div key={index}>
        <input
          placeholder={data.placeholder}
          type={data.type}
          value={form[data.keyName]}
          onChange={onChange}
        />
      </div>
    );
  }

  return FormBuilderData.map(renderInput);
}

export default FormBuilder;
