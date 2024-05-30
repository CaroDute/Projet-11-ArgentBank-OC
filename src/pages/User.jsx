import { Navigate } from "react-router-dom";
import TransactionCard from "../components/TransactionCard";
import { useSelector } from "react-redux";

function User() {
  const auth = useSelector((state) => state.auth);

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
            <h1>
              Welcome back
              <br />
              {auth.firstName} {auth.lastName}
            </h1>
            <button className="edit-button">Edit Name</button>
          </div>
          <TransactionCard transactions={transactions} />
        </main>
      )}
    </>
  );
}

export default User;
