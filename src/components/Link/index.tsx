import React from 'react';
import { LinkType } from '../../commons/type/index';

interface PropTypes {
  link: LinkType;
}

const Link: React.FC<PropTypes> = ({ link }) => {
  return (
    <div>
      <div>
        {link.description} ({link.url})
      </div>
    </div>
  );
};

export default Link;
