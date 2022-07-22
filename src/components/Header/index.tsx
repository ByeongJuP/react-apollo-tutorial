import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

interface PrpoTypes {}

const Header: React.FC<PrpoTypes> = ({}) => {
  return (
    <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
        <div className="fw7 mr1">Hacker News</div>
        <Link to="/" className="ml1 no-underline black">
          LIST
        </Link>
        <div className="ml1">|</div>
        <Link to="/create" className="ml1 no-underline black">
          NEW
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Header);
