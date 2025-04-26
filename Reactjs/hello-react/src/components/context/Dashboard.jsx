import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Dashboard = () => {
  const { isLoggedIn, userName, logout } = useContext(UserContext);

  return (
    <div>
      <h2>Dashboard</h2>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {userName}!</p>
          <button onClick={logout}>Log Out</button>
        </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default Dashboard;
