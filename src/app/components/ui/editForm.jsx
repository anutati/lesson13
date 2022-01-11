import React, { useState } from "react";
import SelectField from "../common/form/selectField";
import TextField from "../common/form/textField";
import colors from "../../constants/colors.json";

const EditForm = ({ data }) => {
  console.log("data: ", data);
  const [form, setForm] = useState(data || {});
  const handeleSubmit = (e) => {
    e.preventDefault();
    console.log("form: ", form);
  };
  const handleChange = (target) => {
    console.log(target);
    setForm((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  return (
    <form onSubmit={handeleSubmit}>
      <TextField
        label="name"
        name="name"
        onChange={handleChange}
        value={form.name || ""}
      />
      <SelectField
        label="color"
        name="color"
        options={colors}
        onChange={handleChange}
        value={form.color || ""}
      />
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default EditForm;
