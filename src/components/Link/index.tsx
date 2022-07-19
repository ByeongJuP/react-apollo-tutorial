import React from 'react';
import { LinkType } from '../../commons/type/index';
import './Link.scss';

interface PropTypes {
  link: LinkType;
}

const baseClassName = 'link';

const Link: React.FC<PropTypes> = ({ link }) => {
  return (
    <div className={`${baseClassName}`}>
      <div className={`${baseClassName}__wrapper`}>
        <span className={`${baseClassName}__wrapper__desc`}>{link.description}</span>
        <span>(</span>
        <a
          className={`${baseClassName}__wrapper__url`}
          onClick={() => {
            if (!!link.url) {
              const hasHttp = !link.url.split('http')[0];
              hasHttp ? window.open(link.url, '_blank') : window.open('http://' + link.url, '_blank');
            }
          }}>{`${link.url}`}</a>
        <span>)</span>
      </div>
    </div>
  );
};

export default Link;
