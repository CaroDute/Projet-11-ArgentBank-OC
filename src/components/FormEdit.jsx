import { useDispatch, useSelector } from "react-redux";
import { hideEditUserName } from "../features/login/authSlice";
import { edit } from "../features/login/authActions";
import { useState } from "react";

function FormEdit() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleCancelClick = () => {
    dispatch(hideEditUserName());
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    console.log("New username to update:", username);
    dispatch(edit(username));
  };

  return (
    <div className="form-edit-content">
      <form>
        <div className="input-edit-wrapper">
          <label htmlFor="username">User name:</label>
          <input
            type="text"
            id="username"
            value={auth.userName}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-edit-wrapper">
          <label htmlFor="firstname">First name:</label>
          <input
            className="blocked"
            type="text"
            id="firstname"
            value={auth.firstName}
            readOnly
          />
        </div>
        <div className="input-edit-wrapper">
          <label htmlFor="lastname">Last name:</label>
          <input
            className="blocked"
            type="text"
            id="lastname"
            value={auth.lastName}
            readOnly
          />
        </div>
        <div className="button-container">
          <button
            onClick={handleSaveClick}
            className="form-edit-button"
            type="text"
          >
            Save
          </button>
          <button onClick={handleCancelClick} className="form-edit-button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormEdit;
