import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { deleteUserSession, isLogin, userInfo } from '../../commons/util';

interface PrpoTypes {}

const Header: React.FC<PrpoTypes> = ({}) => {
  const loginState = isLogin();
  const getUserInfo = userInfo();
  return (
    <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
        <Link to="/" className="ml1 no-underline black">
          LIST
        </Link>
        <div className="ml1">|</div>
        <Link to="/create" className="ml1 no-underline black">
          NEW
        </Link>
        <div className="ml1">|</div>
        {loginState ? (
          <span
            className="ml1 no-underline black"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              deleteUserSession();
              window.location.href = '/';
            }}>
            SignOut
          </span>
        ) : (
          <>
            <Link to="/signUp" className="ml1 no-underline black">
              SignUp
            </Link>
            <div className="ml1">|</div>
            <Link to="/signIn" className="ml1 no-underline black">
              SignIn
            </Link>
          </>
        )}
      </div>
      {getUserInfo && (
        <div className="black">
          <span>👤{getUserInfo && getUserInfo.name}님.</span>
        </div>
      )}
    </div>
  );
};

export default withRouter(Header);
