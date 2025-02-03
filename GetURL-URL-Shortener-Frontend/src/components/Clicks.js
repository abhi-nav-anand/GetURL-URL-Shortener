import React, { useState } from "react";
import vector from "../assets/clicks-metrics.svg";
import { executeGetRequestToUrlDetails } from "./UrlPostApiService";
import validator from "validator";

export default function Clicks() {
  const [userShortUrl, setUserShortUrl] = useState("");
  const [urlDetails, setUrlDetails] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [validationClass, setValidationClass] = useState("");
  const [validationFeedback, setValidationFeedback] = useState("");

  const onChangeExecute = (value) => {
    setUserShortUrl(value);
    validate(value);
  };

  const handleClickSubmit = (value) => {
    value.preventDefault();
    executeGetRequestToUrlDetails(userShortUrl)
      .then((response) => setUrlDetails(response.data))
      .catch((error) => {
        console.clear();
        setErrorMessage("This Short URL Does Not Exist");
        setValidationClass("is-invalid");
        setValidationFeedback("invalid-feedback");
      });
  };

  const validate = (originalUrl) => {
    if (validator.isURL(originalUrl)) {
      setErrorMessage("You Entered a Valid URL");
      setValidationClass("is-valid");
      setValidationFeedback("valid-feedback");
    } else {
      setErrorMessage("You Entered a Invalid URL");
      setValidationClass("is-invalid");
      setValidationFeedback("invalid-feedback");
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div className="intro animate__animated animate__fadeInLeft animate__slow">
            <span className="short-intro">Paste your Short Link</span>
            <br />
            <span>and Check your Clicks</span>
          </div>
          <form onSubmit={handleClickSubmit}>
            <div className="input-group px-4 pt-4">
              <span className="input-group-text" id="basic-addon1">
                <i className="bi bi-link-45deg"></i>
              </span>
              <input
                type="text"
                className={`form-control ${validationClass}`}
                placeholder="Paste your short link"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={userShortUrl}
                onChange={(e) => onChangeExecute(e.target.value)}
              />
              <button className="btn btn-dark" type="submit" id="button-addon2">
                <i className="bi bi-bar-chart-line-fill"> </i>
                Check
              </button>
              <div className={`cardStyle text-center ${validationFeedback}`}>
                {errorMessage}
              </div>
            </div>
          </form>

          {urlDetails && (
            <div className="animate__animated animate__flipInX animate__fast px-4 pb-4">
              <div className="card-short-link d-flex align-items-center">
                <div className="justify-content-between ms-3 flex-grow-1">
                  <a
                    
                    href={`${process.env.REACT_APP_API_URL}/${urlDetails.urlUniqueId}`}
                    className="short-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {process.env.REACT_APP_API_URL}/{urlDetails.urlUniqueId}
                  </a>
                </div>

                <div className="justify-content-between">
                  <div className="text-bg-dark p-3 fs-4" id="button-addon2">
                    <i className="bi bi-graph-up-arrow"> </i>
                    {urlDetails.linkRedirectionCount} Clicks
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="col-md-6">
          <img
            src={vector}
            alt="Clicks Illustration"
            className="illustration animate__animated animate__fadeInRight"
          ></img>
        </div>
      </div>
    </div>
  );
}
