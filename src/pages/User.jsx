import { Navigate } from "react-router-dom";
import TransactionCard from "../components/TransactionCard";
import FormEdit from "../components/FormEdit";
import { useDispatch, useSelector } from "react-redux";
import { showEditUserName } from "../features/login/authSlice"

function User() {
  const auth = useSelector((state) => state.auth);
  const showForm = useSelector((state) => state.auth.showForm)
  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(showEditUserName())
  };


  const transactions = [
    {
      title: "Argent Bank Checking (x8349)",
      solde: "$2,082.79",
      description: "Available Balance",
      text: "View transactions",
    },
    {
      title: "Argent Bank Savings (x6712)",
      solde: "$10,928.42",
      description: "Available Balance",
      text: "View transactions",
    },
    {
      title: "Argent Bank Credit Card (x8349)",
      solde: "$184.30",
      description: "Current Balance",
      text: "View transactions",
    },
  ];

  return (
    <>
      {!auth.isAuthenticated ? (
        <Navigate to="/login" />
      ) : (
        <main className="main bg-dark">
          <div className="header">
            {showForm ? (
              <div className="center-content">
                <div className="edit-user-info">
                  <h2>Edit user info</h2>
                </div>
                <FormEdit />
              </div>
            ) : (
              <>
                <h1>
                  Welcome back
                  <br />
                  {auth.firstName} {auth.lastName}
                </h1>
                <button onClick={handleSubmit} className="edit-button">
                  Edit Name
                </button>
              </>
            )}
          </div>
          <TransactionCard transactions={transactions} />
        </main>
      )}
    </>
  );
}

export default User;
