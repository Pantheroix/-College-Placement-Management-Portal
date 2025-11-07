import React from "react";
import "./Studentdas.css";

export default function Studentdas() {
  return (
    <div className="border border-3 rounded p-3 w-100 h-100">
      <div className="container">
        <div className="d-flex justify-content-start mt-4">
          <div className="card" style={{ width: "18rem" }}>
            <img
              height="200px"
              src="https://img.freepik.com/free-photo/portrait-young-student-happy-be-back-university_23-2148586577.jpg?semt=ais_hybrid&w=740&q=80"
              className="card-img-top"
              alt="student"
            />
          </div>
          <div className="box">
            <h1 id="headbox">Student Details</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
