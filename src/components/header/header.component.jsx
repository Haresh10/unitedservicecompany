import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <div className="options">
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => {}}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/login">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   currentUser: SelectCurrentUser,
//   hidden: SelectHidden,
// });
// const mapDispatchToProps = (dispatch) => ({
//   signOutStart: () => dispatch(signOutStart()),
// });
export default Header;
