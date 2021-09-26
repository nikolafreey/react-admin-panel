import React from "react";
import "./newUser.css";

function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="jonsmith12" className="" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Jon Smith" className="" />
        </div>
        <div className="newUserItem">
          <label>E-Mail</label>
          <input type="email" placeholder="jonsmith12@gmail.com" className="" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" className="" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 789" className="" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York, USA" className="" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="Male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="Female" />
            <label for="female">Female</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select name="active" id="active" className="newUserSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}

export default NewUser;
