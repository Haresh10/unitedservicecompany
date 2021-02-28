import React from "react";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import Logo from "../../assets/usc_logo.png";
import "./header.styles.scss";
import { SelectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

const Header = ({ currentUser, signOutStart }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <img className="logo" src={Logo} alt="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/order">
          CREATE ORDER
        </Link>
        {currentUser ? (
          <div className="option" onClick={signOutStart}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: SelectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
