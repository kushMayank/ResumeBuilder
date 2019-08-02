import React from "react";
import "./editor.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Editor = props => {
  console.log("props", props);
  const [values, setValues] = React.useState({
    fullName: "",
    email: "",
    mobile: "",
    mastersDegree: "",
    mastersDegreeYears: "",
    mastersDegreeUniversity: "",
    mastersDegreePercentage: "",
    bachelorsDegree: "",
    bachelorsDegreeYears: "",
    bachelorsDegreeUniversity: "",
    bachelorsDegreePercentage: "",
    highSchoolDegree: "",
    highSchoolDegreeYears: "",
    highSchoolDegreeUniversity: "",
    highSchoolDegreePercentage: "",
    city: "",
    state: "",
    country: ""
  });

  const handleChange = name => e => {
    setValues({ ...values, [name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("value==>", values);
    props.onSubmit(values);
  };

  return (
    <div className="editorWrapper">
      <table className="tableContainer">
        <tbody>
          <tr>
            <td>
              <TextField
                id="outlined-name"
                label="FullName"
                // className={classes.textField}
                // value={values.name}
                onChange={handleChange("fullName")}
                margin="normal"
                variant="outlined"
              />
            </td>
            <td>
              <TextField
                id="outlined-name"
                label="Email"
                // className={classes.textField}
                // value={values.name}
                onChange={handleChange("email")}
                margin="normal"
                variant="outlined"
              />
            </td>
            <td>
              <TextField
                id="outlined-name"
                label="Mobile"
                // className={classes.textField}
                // value={values.name}
                onChange={handleChange("mobile")}
                margin="normal"
                variant="outlined"
              />
            </td>
          </tr>
          <tr>
            <td>
              <TextField
                id="outlined-full-width"
                label="My Career Objective"
                // style={{ margin: 19 }}
                placeholder="Enter your career objective."
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <TextField
                id="outlined-name"
                label="Masters Degree"
                // className={classes.textField}
                // value={values.name}
                onChange={handleChange("mastersDegree")}
                margin="normal"
                variant="outlined"
              />
            </td>
            <td>
              <TextField
                id="outlined-name"
                label="Years"
                // className={classes.textField}
                // value={values.name}
                onChange={handleChange("mastersDegreeYears")}
                margin="normal"
                variant="outlined"
              />
            </td>
            <td>
              <TextField
                id="outlined-name"
                label="University"
                // className={classes.textField}
                // value={values.name}
                onChange={handleChange("mastersDegreeUniversity")}
                margin="normal"
                variant="outlined"
              />
            </td>
            <td>
              <TextField
                id="outlined-name"
                label="Percentage"
                // className={classes.textField}
                // value={values.name}
                onChange={handleChange("mastersDegreePercentage")}
                margin="normal"
                variant="outlined"
              />
            </td>
          </tr>
          <tr>
            <td>
              <TextField
                id="outlined-name"
                label="Bachelors Degree"
                // className={classes.textField}
                // value={values.name}
                onChange={handleChange("bachelorsDegree")}
                margin="normal"
                variant="outlined"
              />
            </td>
            <td>
              <TextField
                id="outlined-name"
                label="Years"
                // className={classes.textField}
                // value={values.name}
                onChange={handleChange("bachelorsDegreeYears")}
                margin="normal"
                variant="outlined"
              />
            </td>
            <td>
              <TextField
                id="outlined-name"
                label="University"
                // className={classes.textField}
                // value={values.name}
                onChange={handleChange("bachelorsDegreeUniversity")}
                margin="normal"
                variant="outlined"
              />
            </td>
            <td>
              <TextField
                id="outlined-name"
                label="Percentage"
                // className={classes.textField}
                // value={values.name}
                onChange={handleChange("bachelorsDegreePercentage")}
                margin="normal"
                variant="outlined"
              />
            </td>
          </tr>
          <tr>
            <td>
              <TextField
                id="outlined-name"
                label="High School Degree"
                // className={classes.textField}
                // value={values.name}
                onChange={handleChange("highSchoolDegree")}
                margin="normal"
                variant="outlined"
              />
            </td>
            <td>
              <TextField
                id="outlined-name"
                label="Years"
                // className={classes.textField}
                // value={values.name}
                onChange={handleChange("highSchoolDegreeYears")}
                margin="normal"
                variant="outlined"
              />
            </td>
            <td>
              <TextField
                id="outlined-name"
                label="University"
                // className={classes.textField}
                // value={values.name}
                onChange={handleChange("highSchoolDegreeUniversity")}
                margin="normal"
                variant="outlined"
              />
            </td>
            <td>
              <TextField
                id="outlined-name"
                label="Percentage"
                // className={classes.textField}
                // value={values.name}
                onChange={handleChange("highSchoolDegreePercentage")}
                margin="normal"
                variant="outlined"
              />
            </td>
          </tr>
          <tr>
            <td>
              <TextField
                id="outlined-full-width"
                label="Skills (Upto 5, seperated by ',') "
                // style={{ margin: 19 }}
                placeholder="Enter your skills here."
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <TextField
                id="outlined-full-width"
                label="Address "
                // style={{ margin: 19 }}
                placeholder="Enter your address here."
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <TextField
                id="outlined-name"
                label="City"
                // className={classes.textField}
                // value={values.name}
                onChange={handleChange("city")}
                margin="normal"
                variant="outlined"
              />
            </td>
            <td>
              <TextField
                id="outlined-name"
                label="State"
                // className={classes.textField}
                // value={values.name}
                onChange={handleChange("state")}
                margin="normal"
                variant="outlined"
              />
            </td>
            <td>
              <TextField
                id="outlined-name"
                label="Country"
                // className={classes.textField}
                // value={values.name}
                onChange={handleChange("country")}
                margin="normal"
                variant="outlined"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default Editor;
