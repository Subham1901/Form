import React, { useRef, useState } from "react";

const Form = () => {
  const [formdata, setFormData] = useState({
    name: "",
    address: "",
  });
  const [radioCheck, setRadioCheck] = useState();
  const [isError, setIsError] = useState({
    name: false,
    address: false,
  });
  const [file, setFile] = useState();
  const buttonRef = useRef();
  const nameRef = useRef();
  const addRef = useRef();
  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleUpload = (event) => {
    event.preventDefault();
    buttonRef.current.click();
  };

  const handleCHangeForm = (event) => {
    setFormData({ ...formdata, [event.target.name]: event.target.value });
  };

  const submitData = (e) => {
    e.preventDefault();
    if (formdata.name === "" && formdata.address === "") {
      setIsError({ ...isError, name: true, address: true });
      nameRef.current.style.borderColor = "red";
      addRef.current.style.borderColor = "red";
      return;
    } else if (formdata.name === "") {
      setIsError({ ...isError, name: true });
      nameRef.current.style.borderColor = "red";
    } else if (formdata.address === "") {
      setIsError({ ...isError, address: true });
      addRef.current.style.borderColor = "red";
    }
  };

  const handleRadioCheck = (event) => {
    setRadioCheck(event.target.value);
  };

  console.log(formdata);
  return (
    <div>
      <form onSubmit={(e) => submitData(e)}>
        <div className="required">
          <label>Asset Name</label>
          <input
            ref={nameRef}
            onChange={handleCHangeForm}
            name="name"
            placeholder="example"
            type="text"
          />
          {isError.name && (
            <p className="error">Please provide a name of the asset</p>
          )}
        </div>
        <div className="normal">
          <label>Asset Picture</label>
          <input
            ref={buttonRef}
            type="file"
            name="file"
            onChange={handleChange}
            className="file-input"
          />
          <button onClick={handleUpload} className="upload">
            Upload file
          </button>
          {file?.name && <p>{file?.name}</p>}
        </div>
        <div className="normal">
          <label>Description</label>
          <textarea className="text-area" />
        </div>
        <div className="normal">
          <label>Address</label>
          <div className="radio-group">
            <div className="radio-group1">
              <input
                defaultChecked="true"
                className="radio"
                type="radio"
                onChange={handleRadioCheck}
                name="group1"
                id="new"
                value="new"
              />
              <label className="radio-label" htmlFor="new">
                New address
              </label>
            </div>
            <div className="radio-group1">
              <input
                onChange={handleRadioCheck}
                value="exist"
                className="radio"
                type="radio"
                name="group1"
                id="exist"
              />
              <label className="radio-label" htmlFor="exist">
                Existing address
              </label>
            </div>
          </div>
        </div>
        <div className="required">
          {radioCheck === "exist" ? (
            <>
              <label>Select address</label>
              <input
                ref={addRef}
                onChange={handleCHangeForm}
                name="address"
                placeholder="example"
                type="text"
              />
            </>
          ) : (
            <>
              <label>Street name</label>
              <input type="text" />
              <div className="flex">
                <div className="column">
                  <label>Street number</label>
                  <input type="text" />
                </div>
                <div className="column">
                  <label>Zip Code</label>
                  <input type="text" />
                </div>
              </div>
              <label>City</label>
              <input type="text" />
              <label>Country</label>
              <input type="text" />
              <label>Contact Person</label>
              <input type="text" />
            </>
          )}
          {isError.address && (
            <p className="error">
              Please select a existing address or a new address
            </p>
          )}
        </div>
        <div className="button-group">
          <button className="cancel">Cancel</button>
          <button className="submit" type="submit">
            {" "}
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
