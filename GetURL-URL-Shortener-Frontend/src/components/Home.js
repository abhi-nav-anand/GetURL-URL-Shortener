import React, { useState } from "react";
import "./Home.css";
import vector from "../assets/short-url.svg";
import copy from "copy-to-clipboard";
import Typewriter from "typewriter-effect";
import { executePostRequestToShortUrl } from "./UrlPostApiService";
import validator from "validator";

export default function Home() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenUrl, setShortenUrl] = useState(null);
  const [copyButton, setCopyButton] = useState("Copy");
  const [errorMessage, setErrorMessage] = useState("");
  const [validationClass, setValidationClass] = useState("");
  const [validationFeedback, setValidationFeedback] = useState("");

  const onChangeExecute = (value) => {
    setOriginalUrl(value);
    validate(value);
  };

  const handleSubmit = (value) => {
    value.preventDefault();
    executePostRequestToShortUrl(originalUrl)
      .then((response) => setShortenUrl(response.data))
      .catch((error) => {
        setErrorMessage("Somethig went wrong");
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

  const copyToClipboard = () => {
    copy(shortenUrl.shortenUrl);
    setCopyButton("Copied");
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div className="intro animate__animated animate__fadeInLeft animate__slow">
            <span className="short-intro">Get your Long Link</span>

            <Typewriter
              options={{
                strings: ["Shorten", "Simple", "Fast"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-group px-4 pt-4">
              <span className="input-group-text" id="basic-addon1">
                <i className="bi bi-link-45deg"></i>
              </span>
              <input
                type="text"
                className={`form-control ${validationClass}`}
                placeholder="Paste your long link"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={originalUrl}
                onChange={(e) => onChangeExecute(e.target.value)}
              />
              <button className="btn btn-dark" type="submit" id="button-addon2">
                <i className="bi bi-scissors"> </i>
                Shorten
              </button>
              <div className={`cardStyle text-center ${validationFeedback}`}>
                {errorMessage}
              </div>
            </div>
          </form>

          {shortenUrl && (
            <div className="animate__animated animate__flipInX animate__fast px-4 pb-4">
              <div className="card-short-link d-flex align-items-center">
                <div className="justify-content-between ms-3 flex-grow-1">
                  <a
                    href={shortenUrl.shortenUrl}
                    className="short-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {shortenUrl.shortenUrl}
                  </a>
                </div>

                <div className="justify-content-between">
                  <button
                    className="btn btn-dark"
                    type="button"
                    id="button-addon2"
                    onClick={copyToClipboard}
                  >
                    <i className="bi bi-clipboard-fill"> </i>
                    {copyButton}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="col-md-6">
          <img
            src={vector}
            alt="Url Illustration"
            className="illustrationHome animate__animated animate__fadeInRight"
          ></img>
        </div>
      </div>
    </div>
  );
}
