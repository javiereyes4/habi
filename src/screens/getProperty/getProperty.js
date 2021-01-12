import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { getPropertys } from "../../redux/actions/propertyActions";
import { bindActionCreators } from "redux";
import { moneyFormat } from "../../formaters/index";
import "./getProperty.css";

function GetProperty(props) {
  const [property, setProperty] = useState([]);
  const [propertyFilter, setPropertyFilter] = useState([]);
  useEffect(() => {
    const getProp = async () => {
      const listProperty = await props.getPropertys();
      setProperty(listProperty);
      setPropertyFilter(listProperty);
    };
    getProp();
  }, []);

  const filterName = (value) => {
    if (value !== "") {
      const asd = property.filter((element) => element.address.includes(value));
      setProperty(asd);
    } else {
      setProperty(propertyFilter);
    }
  };
  return (
    <div>
      <div className="filterContent">
        <label className="addressFilter">
          <FormattedMessage id="address" />
        </label>
        <input
          onChange={(e) => {
            filterName(e.target.value);
          }}
        />
      </div>
      <div className="getContent">
        <table className="tableProperty">
          <tr>
            <th>
              <FormattedMessage id="areaProperty" />
            </th>
            <th>
              <FormattedMessage id="address" />
            </th>
            <th>
              <FormattedMessage id="bedroom" />
            </th>
            <th>
              <FormattedMessage id="price" />
            </th>
          </tr>
          {property !== undefined ? (
            property.map((element) => {
              return (
                <tr>
                  <td>{element.area}</td>
                  <td>{element.address}</td>
                  <td>{element.bedroom}</td>
                  <td>{moneyFormat(element.price)}</td>
                </tr>
              );
            })
          ) : (
            <label>nada</label>
          )}
        </table>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getPropertys }, dispatch);

function mapStateToProps(state) {
  return {
    property: state.property,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GetProperty);
