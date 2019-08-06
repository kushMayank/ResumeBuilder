import React from "react";
import "./editor.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

import { setResume } from "./action";

const Editor = props => {
  const [values, setValues] = React.useState({
    fullName: "",
    email: "",
    mobile: "",
    objective: "",
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
    country: "",
    skills: "",
    address: ""
  });

  const handleChange = name => e => {
    setValues({ ...values, [name]: e.target.value });
  };

  const handleSubmit = () => {
    let resumeObj = {};
    resumeObj["userDetails"] = {};
    resumeObj["educationalDetails"] = {};
    resumeObj["userDetails"]["name"] = values.fullName;
    resumeObj["userDetails"]["email"] = values.email;
    resumeObj["userDetails"]["mobile"] = values.mobile;
    resumeObj["userDetails"]["address"] = values.address;
    resumeObj["userDetails"]["city"] = values.city;
    resumeObj["userDetails"]["state"] = values.state;
    resumeObj["userDetails"]["country"] = values.country;
    // edu
    resumeObj["educationalDetails"]["masters"] = {
      degree: values.mastersDegree,
      years: values.mastersDegreeYears,
      university: values.mastersDegreeUniversity,
      percentage: values.mastersDegreePercentage
    };
    resumeObj["educationalDetails"]["bachelors"] = {
      degree: values.bachelorsDegree,
      years: values.bachelorsDegreeYears,
      university: values.valuesbachelorsDegreeUniversity,
      percentage: values.bachelorsDegreePercentage
    };
    resumeObj["educationalDetails"]["highschool"] = {
      degree: values.highSchoolDegree,
      years: values.highSchoolDegreeYears,
      university: values.highSchoolDegreeUniversity,
      percentage: values.highSchoolDegreePercentage
    };
    // skills
    resumeObj["skills"] = values.skills;

    //objective
    resumeObj["objective"] = values.objective;

    // props.onSubmit(resumeObj);

    props.setResume(resumeObj);
    alert("resume uploaded");
    setValues({
      fullName: "",
      email: "",
      mobile: "",
      objective: "",
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
      country: "",
      skills: "",
      address: ""
    });
  };

  return (
    <div className="editorWrapper">
      <table className="tableContainer">
        <h1>Resume</h1>

        <tbody>
          <tr>
            <td>
              <TextField
                label="FullName"
                value={values.fullName}
                onChange={handleChange("fullName")}
                margin="normal"
                variant="outlined"
              />
            </td>
            <td>
              <TextField
                label="Email"
                value={values.email}
                onChange={handleChange("email")}
                margin="normal"
                variant="outlined"
              />
            </td>
            <td>
              <TextField
                label="Mobile"
                value={values.mobile}
                onChange={handleChange("mobile")}
                margin="normal"
                variant="outlined"
                type="number"
              />
            </td>
          </tr>
          <tr>
            <td>
              <TextField
                label="My Career Objective"
                value={values.objective}
                placeholder="Enter your career objective."
                onChange={handleChange("objective")}
                objective
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
                value={values.mastersDegree}
                onChange={handleChange("mastersDegree")}
                margin="normal"
                variant="outlined"
              />
            </td>
            <td>
              <TextField
                id="outlined-name"
                label="Years"
                value={values.mastersDegreeYears}
                onChange={handleChange("mastersDegreeYears")}
                margin="normal"
                variant="outlined"
                type="number"
              />
            </td>
            <td>
              <TextField
                id="outlined-name"
                label="University"
                value={values.mastersDegreeUniversity}
                onChange={handleChange("mastersDegreeUniversity")}
                margin="normal"
                variant="outlined"
              />
            </td>
            <td>
              <TextField
                id="outlined-name"
                label="Percentage"
                value={values.mastersDegreePercentage}
                onChange={handleChange("mastersDegreePercentage")}
                margin="normal"
                variant="outlined"
                type="number"
              />
            </td>
          </tr>
          <tr>
            <td>
              <TextField
                id="outlined-name"
                label="Bachelors Degree"
                value={values.bachelorsDegree}
                onChange={handleChange("bachelorsDegree")}
                margin="normal"
                variant="outlined"
              />
            </td>
            <td>
              <TextField
                id="outlined-name"
                label="Years"
                value={values.bachelorsDegreeYears}
                onChange={handleChange("bachelorsDegreeYears")}
                margin="normal"
                variant="outlined"
                type="number"
              />
            </td>
            <td>
              <TextField
                id="outlined-name"
                label="University"
                value={values.bachelorsDegreeUniversity}
                onChange={handleChange("bachelorsDegreeUniversity")}
                margin="normal"
                variant="outlined"
              />
            </td>
            <td>
              <TextField
                id="outlined-name"
                label="Percentage"
                value={values.bachelorsDegreePercentage}
                onChange={handleChange("bachelorsDegreePercentage")}
                margin="normal"
                variant="outlined"
                type="number"
              />
            </td>
          </tr>
          <tr>
            <td>
              <TextField
                id="outlined-name"
                label="High School Degree"
                value={values.highSchoolDegree}
                onChange={handleChange("highSchoolDegree")}
                margin="normal"
                variant="outlined"
              />
            </td>
            <td>
              <TextField
                id="outlined-name"
                label="Years"
                value={values.highSchoolDegreeYears}
                onChange={handleChange("highSchoolDegreeYears")}
                margin="normal"
                variant="outlined"
                type="number"
              />
            </td>
            <td>
              <TextField
                id="outlined-name"
                label="University"
                value={values.highSchoolDegreeUniversity}
                onChange={handleChange("highSchoolDegreeUniversity")}
                margin="normal"
                variant="outlined"
              />
            </td>
            <td>
              <TextField
                id="outlined-name"
                label="Percentage"
                value={values.highSchoolDegreePercentage}
                onChange={handleChange("highSchoolDegreePercentage")}
                margin="normal"
                variant="outlined"
                type="number"
              />
            </td>
          </tr>
          <tr>
            <td>
              <TextField
                label="Skills (Upto 5, seperated by ',') "
                value={values.skills}
                placeholder="Enter your skills here."
                fullWidth
                onChange={handleChange("skills")}
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
                value={values.address}
                placeholder="Enter your address here."
                fullWidth
                onChange={handleChange("address")}
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
                value={values.city}
                onChange={handleChange("city")}
                margin="normal"
                variant="outlined"
              />
            </td>
            <td>
              <TextField
                id="outlined-name"
                label="State"
                value={values.state}
                onChange={handleChange("state")}
                margin="normal"
                variant="outlined"
              />
            </td>
            <td>
              <TextField
                id="outlined-name"
                label="Country"
                value={values.country}
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

const mapStateToProps = store => {
  return {
    resume: store.resume
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setResume: data => dispatch(setResume(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
