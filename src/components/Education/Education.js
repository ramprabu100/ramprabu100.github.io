import React from "react";

const Education = () => {
  return (
    <div className="education">
      <h2 className="education__title">Education</h2>
      <div className="education__list">
        <div className="education__item">
          <h3 className="education__degree">Bachelor of Engineering, CSE</h3>
          <h4 className="education__institute">K. RAMAKRISHNAN COLLEGE OF TECHNOLOGY</h4>
        </div>
        <div className="education__item">
          <h3 className="education__degree">Higher Secondary School Leaving Certificate</h3>
          <h4 className="education__institute">Bishop Heber Higher Secondary School</h4>
        </div>
        <div className="education__item">
          <h3 className="education__degree">Secondary School Leaving Certificate</h3>
          <h4 className="education__institute">Bishop Heber Higher Secondary School</h4>
        </div>
      </div>
    </div>
  );
};

export default Education;