import React from "react";
import "./resume.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Resume = props => {
  const { city, state, country, mobile, email } = props.details.userDetails;
  const { bachelors, highschool, masters } = props.details.educationalDetails;
  const skills = props.details.skills.split(",");
  const objective = props.details.objective;

  const handleDownload = () => {
    const ele = document.querySelector(".SmallerPage");
    html2canvas(ele).then(function(canvas) {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("download.pdf");
    });
  };

  const editResume = () => {
    console.log("=====>", props);
  };
  return (
    <div className="SmallerPage">
      <div className="resumeWrapper">
        <div className="resumeContent">
          <table style={{ width: "100%", height: "100px" }}>
            <tbody>
              <div style={{ "text-align": "-webkit-center" }}>
                <tr>
                  {" "}
                  <h2 style={{ "background-color": "#148996" }}>
                    {" "}
                    {props.details.userDetails.name}{" "}
                  </h2>
                </tr>
                <tr>{props.details.userDetails.address}</tr>
                <tr>{`${city}-${state}-${country}`}</tr>
                <tr>{mobile}</tr>
                <tr>{email}</tr>
                <tr>{objective}</tr>
              </div>
              <tr>
                <h4>EDUCATION</h4>
                <table>
                  <tbody>
                    <tr style={{ "background-color": "#148996" }}>
                      <th>Course</th>
                      <th>Univercity</th>
                      <th>Year of Passing</th>
                      <th>Percentage</th>
                    </tr>
                    <tr>
                      <td>{masters.degree}</td>
                      <td>{masters.university}</td>
                      <td>{masters.years}</td>
                      <td>{masters.percentage}</td>
                    </tr>
                    <tr>
                      <td>{bachelors.degree}</td>
                      <td>{bachelors.university}</td>
                      <td>{bachelors.years}</td>
                      <td>{bachelors.percentage}</td>
                    </tr>
                    <tr>
                      <td>{highschool.degree}</td>
                      <td>{highschool.university}</td>
                      <td>{highschool.years}</td>
                      <td>{highschool.percentage}</td>
                    </tr>
                  </tbody>
                </table>
              </tr>
              <tr>
                <h4>Skills</h4>
                <ul>
                  {skills.length > 0 &&
                    skills.map((ele, id) => <li key={id}>{ele}</li>)}
                </ul>
              </tr>
              <tr>
                <h4>Declaration</h4>
                <label>
                  I here by declare that information provided above is true and
                  the best of my knowledge.
                </label>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="downloadResume" onClick={handleDownload}>
        Click to Downlaod
      </div>
      <div className="EditResume" onClick={editResume}>
        Click to Edit
      </div>
    </div>
  );
};

export default Resume;
