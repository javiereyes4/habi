import React, { useState } from "react";
import "./property.css";
import Modal from "../../widgets/modal/modal";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { postPropertys } from "../../redux/actions/propertyActions";
import { bindActionCreators } from "redux";
import AddProperty from "./component/add_property";

function Property(props) {
  const [addProperty, setAddProperty] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [titleModal, setTitleModal] = useState(<FormattedMessage id="alert" />);
  const [errorModal, setErrorModal] = useState("");
  let propertyArr = [];
  const idInmueble = "_" + Math.random().toString(36).substr(2, 9);
  const newProperty = (val, type, index) => {
    if (propertyArr[index] !== undefined && type === "change") {
      propertyArr[index] = {
        idUsuario: props.user.user.id,
        id_inmueble: idInmueble,
        ...val,
      };
      console.log("propertyArr");
      console.log(propertyArr);
    } else {
      console.log(propertyArr[index]);
    }
    if (
      type === "change" &&
      props.user.user &&
      propertyArr[index] === undefined
    ) {
      propertyArr = [
        ...propertyArr,
        {
          idUsuario: props.user.user.id,
          id_inmueble: idInmueble,
          ...val,
        },
      ];
    } else if (props.user.user && type === "submit") {
      setAddProperty([...addProperty, { ...val }]);
    }
  };

  const addUserProperty = async () => {
    let count = 0;
    if (!props.user.user) {
      setIsModal(!isModal);
      setErrorModal(<FormattedMessage id="userRequred" />);
    } else if (propertyArr.length === 0) {
      setIsModal(!isModal);
      setErrorModal(<FormattedMessage id="fileRequired" />);
    } else {
      propertyArr.map((element) => {
        const response = props.postPropertys(element);
      });
      count === propertyArr.length && (window.location.href = "/property");
    }
  };

  return (
    <div className="propertyContent">
      {Object.keys(props.user).length !== 0 && (
        <div className="userContentProperty">
          <label className="titleUser">
            <FormattedMessage id="user" />:
          </label>
          <label>{props.user.user.name}</label>
        </div>
      )}
      <AddProperty add={newProperty} index={0} />
      {addProperty.map((element, index) => (
        <AddProperty add={newProperty} index={index + 1} />
      ))}

      <button onClick={() => addUserProperty()}>
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
  );
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ postPropertys }, dispatch);

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Property);
