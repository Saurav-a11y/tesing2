import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";

export default function ReactValidator() {
  const [values, setValues] = React.useState({
    title: "There was a server error the prevented the form from submitting.",
    email: "",
    review: "",
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const validator = useState(
    new SimpleReactValidator({
      className: "text-danger",
      messages: {
        email: "That is not an email.",
      },
      validators: {
        ip: {
          message: "The :attribute must be a valid IP address.",
          rule: function (val, params, validator) {
            return (
              validator.helpers.testRegex(
                val,
                /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/i
              ) && params.indexOf(val) === -1
            );
          },
        },
      },
    })
  );

  const submitForm = () => {
    if (validator.allValid()) {
      alert("You submitted the form and stuff!");
    } else {
      validator.showMessages();
    }
  };
  console.log("value showing", values);

  return (
    <div className="container">
      <div className="form-group">
        <label>Title</label>
        <input
          className="form-control"
          value={values.title}
          onChange={handleChange("title")}
        />

        {/**********   This is where the magic happens     ***********/}
        {/* {validator.message("title", values.title, "required|alpha")} */}
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          className="form-control"
          value={values.email}
          onChange={handleChange("email")}
        />

        {/**********   This is where the magic happens     ***********/}
        {/* {validator.message("email", values.email, "required|email")} */}
      </div>
      <div className="form-group">
        <label>Review</label>
        <textarea
          className="form-control"
          value={values.review}
          onChange={handleChange("review")}
        />

        {/**********   This is where the magic happens     ***********/}
        {/* {validator.message("review", values.review, "required|min:20|max:120")} */}
      </div>
      <button className="btn btn-primary" onClick={submitForm.bind(this)}>
        Save Review
      </button>
    </div>
  );
}
