import React, { useState } from "react";
import { connect } from "react-redux";
import Title from "../common/title";
import "../../styles/sms.css";
import APsMultiSelection from "./apsMultiSelection";
import Switch from "@mui/material/Switch";

function SendSMSComponent(props) {
  const [formData, setFormData] = useState({
    dltSender: "",
    dltTemplate: "",
    content: "",
    userType: true,
    users: [],
  });

  async function handleChange(e) {
    const { name, value } = e.target;
    let res = { [name]: value };
    await setFormData((prevState) => ({
      ...prevState,
      ...res,
    }));
  }
  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <div>
      <Title title={"Send SMS"} />
      <div className="col-lg-12 p-4" style={{ backgroundColor: "#e0e0e0" }}>
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-12 col-12">
            <label className="pb-2">Send to All Users:</label>
            <div>
              <Switch
                name="userType"
                {...label}
                checked={formData.userType}
                onChange={(e) =>
                  handleChange({
                    target: { name: "userType", value: e.target.checked },
                  })
                }
              />
            </div>
          </div>
          {!formData.userType ? (
            <div className="col-lg-10 col-md-10 col-sm-12 col-12">
              <label className="pb-2">Select Users*:</label>
              <APsMultiSelection onChange={(e) => handleChange(e)} />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="row mt-3">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <label className="pb-2">DLT Sender ID*:</label>
            <input
              style={{ borderRadius: 0 }}
              placeholder="Enter DLT Sender ID"
              className="form-control"
              variant="outlined"
              size="small"
              id="dltSender"
              name="dltSender"
              value={formData.dltSender}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <label className="pb-2">DLT Template ID*:</label>
            <input
              style={{ borderRadius: 0 }}
              placeholder="Enter DLT Template ID"
              className="form-control"
              variant="outlined"
              size="small"
              id="dltTemplate"
              name="dltTemplate"
              value={formData.dltTemplate}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-3">
          <label className="pb-2">Content*:</label>
          <textarea
            style={{ borderRadius: 0, height: 120 }}
            placeholder="Enter content"
            className="form-control"
            variant="outlined"
            size="small"
            id="content"
            name="content"
            value={formData.content}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mt-3" style={{ paddingBottom: 25 }}>
          <button className="custom-button btn-primarym pull-right">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SendSMSComponent);
