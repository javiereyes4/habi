import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { FormattedMessage } from "react-intl";
import Modal from "../../widgets/modal/modal";
import { postUsers } from "../../redux/actions/userActions";
import { onlyNumsParse, onlyLettersParse } from "../../parsers/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./user.css";

function User(props) {
  const [isModal, setIsModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [errorModal, setErrorModal] = useState("");
  const [inputDocument, setInputDocument] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  return (
    <Formik
      initialValues={{ id: "", name: "", email: "", phone: "" }}
      onSubmit={async (values) => {
        let val = {
          id: inputDocument,
          name: inputName,
          email: inputEmail,
          phone: inputPhone,
        };
        if (
          (inputDocument === "",
          inputName === "" || inputPhone === "" || inputEmail === "")
        ) {
          setIsModal(!isModal);
          setTitleModal(<FormattedMessage id="alert" />);
          setErrorModal(<FormattedMessage id="fileRequired" />);
        } else {
          const response = await props.postUsers(val);
          setInputDocument("");
          setInputName("");
          setInputPhone("");
          setInputEmail("");
          if (response) {
            setIsModal(!isModal);
            setTitleModal(<FormattedMessage id="message" />);
            setErrorModal(<FormattedMessage id="userRegister" />);
          }
        }
      }}
    >
      <Form>
        <div className="userContent">
          <h2>{<FormattedMessage id="registerUser" />}</h2>
          <label className="labelForm">
            <FormattedMessage id="document" />
          </label>
          <Field
            name="id"
            type="text"
            maxLength="15"
            value={inputDocument}
            onChange={(e) => {
              setInputDocument(onlyNumsParse(e.target.value));
            }}
          />
          <label className="labelForm">
            <FormattedMessage id="name" />
          </label>
          <Field
            name="name"
            type="text"
            maxLength="40"
            value={inputName}
            onChange={(e) => {
              setInputName(onlyLettersParse(e.target.value));
            }}
          />
          <label className="labelForm">
            <FormattedMessage id="phone" />
          </label>
          <Field
            name="phone"
            type="text"
            maxLength="10"
            value={inputPhone}
            onChange={(e) => {
              setInputPhone(onlyNumsParse(e.target.value));
            }}
          />
          <label className="labelForm">
            <FormattedMessage id="email" />
          </label>
          <Field
            name="email"
            type="email"
            maxLength="30"
            value={inputEmail}
            onChange={(e) => {
              setInputEmail(e.target.value);
            }}
          />
          <button type="submit">
            <FormattedMessage id="register" />
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

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ postUsers }, dispatch);

export default connect(null, mapDispatchToProps)(User);
