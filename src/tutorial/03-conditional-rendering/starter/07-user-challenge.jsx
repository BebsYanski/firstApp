import { useState } from "react";

const UserChallenge = () => {

  const [user, setUser] = useState(null);

  const login = function(){
    setUser({name: "Yannick"});
  };

  const logout = () => {
    setUser(null);
  };

  {/* <div>
    <h2>{user ? `hello there, ${user.name}` : "please login"}</h2>
    <button onClick={user ? logout : login} className="btn">{user ? "log out" : "log in"}</button>
  </div> */}
  return (
    <div>
      {user ? (
        <div>
          <h4>Hello there, {user.name}</h4>
          <button className='btn' onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please login</h4>
          <button className='btn' onClick={login}>
            login
          </button>
        </div>
      )}
    </div>
  )
};

export default UserChallenge;
