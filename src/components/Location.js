import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Location = () => {
  const { dispatch, currency } = useContext(AppContext);

  const changeLocation = (val) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: val,
    });
  };

  return (
    <div className="alert alert-secondary">
      <select
        className="custom-select"
        value={currency}
        onChange={(event) => changeLocation(event.target.value)}
      >
        <option value="$" disabled>
          Currency ($ Dollar)
        </option>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>
    </div>
  );
};

export default Location;
