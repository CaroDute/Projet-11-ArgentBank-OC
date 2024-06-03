import { useDispatch, useSelector } from "react-redux";
import { hideEditUserName } from "../features/login/authSlice";

function FormEdit() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleCancelClick = () => {
    dispatch(hideEditUserName());
  };

  return (
    <div className="form-edit-content">
      <form action="submit">
        <div className="input-edit-wrapper">
          <label htmlFor="username">User name:</label>
          <input type="text" id="username" value={auth.userName} />
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
          <button className="form-edit-button" type="submit">
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
