import React, { useState } from "react";
import { onlyNumsParse, onlyLettersParse } from "../../../parsers/index";
import { FormattedMessage } from "react-intl";
import { Formik, Form, Field } from "formik";
import Modal from "../../../widgets/modal/modal";
import "../property.css";

function AddProperty(props) {
  const [isModal, setIsModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [errorModal, setErrorModal] = useState("");
  const [inputArea, setInputArea] = useState("");
  const [inputBedrooms, setInputBedrooms] = useState("1");
  const [inputPrice, setInputPrice] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  let val = {
    area: inputArea,
    bedroom: inputBedrooms,
    price: inputPrice,
    address: inputAddress,
  };
  return (
    <Formik
      initialValues={{ area: "", price: "", address: "" }}
      onChange={
        val.area != "" &&
        val.address != "" &&
        val.price != "" &&
        props.add(val, "change", props.index)
      }
      onSubmit={async (values) => {
        if (
          (inputArea === "",
          inputBedrooms === "" || inputAddress === "" || inputPrice === "")
        ) {
          setIsModal(!isModal);
          setTitleModal(<FormattedMessage id="alert" />);
          setErrorModal(<FormattedMessage id="fileRequired" />);
        } else {
          props.add(val, "submit");
        }
      }}
    >
      <Form>
        <div className="inputProperty">
          <div>
            <label className="labelPropertyList">
              <FormattedMessage id="areaProperty" />
            </label>
            <Field
              name="area"
              type="text"
              maxLength="5"
              value={inputArea}
              className="fieldProperty"
              onChange={(e) => {
                setInputArea(onlyNumsParse(e.target.value));
              }}
            />
          </div>
          <div>
            <label className="labelPropertyList">
              <FormattedMessage id="bedroom" />
            </label>
            <select
              name="select"
              value={inputBedrooms}
              className="fieldProperty"
              onChange={(e) => {
                setInputBedrooms(onlyNumsParse(e.target.value));
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3"> 3</option>
              <option value="4"> 4</option>
              <option value="5"> 5</option>
            </select>
          </div>
          <div>
            <label className="labelPropertyList">
              <FormattedMessage id="price" />
            </label>
            <Field
              name="price"
              type="text"
              maxLength="15"
              value={inputPrice}
              className="fieldProperty"
              onChange={(e) => {
                setInputPrice(onlyNumsParse(e.target.value));
              }}
            />
          </div>
          <div>
            <label className="labelPropertyList">
              <FormattedMessage id="address" />
            </label>
            <Field
              name="address"
              type="text"
              maxLength="25"
              value={inputAddress}
              className="fieldProperty"
              onChange={(e) => {
                setInputAddress(e.target.value);
              }}
            />
          </div>
          {/* <button onClick={props.add}></button> */}
          <button type="submit" className="btnProperty">
            +
          </button>
          {isModal && (
            <Modal
              title={titleModal}
              description={errorModal}
              closeModal={() => {
                setIsModal(!isModal);
              }}
            />
          )}
        </div>
      </Form>
    </Formik>
  );
}

export default AddProperty;
