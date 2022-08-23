import React from 'react';
import Link from '../Link';
import './LinkList.scss';
import { useLinkQuery } from './hooks';

interface PropTypes {}
const baseClassName = 'link-list';

const LinkList: React.FC<PropTypes> = ({}) => {
  const { loading, error, data } = useLinkQuery();

  return (
    <div className={`${baseClassName}`}>
      <div className={`${baseClassName}__title`}>
        <span className={`${baseClassName}__title__content`}>Link List</span>
      </div>
      {!loading && !!data.length ? data.map((x, idx) => <Link key={idx} link={x} />) : <></>}
    </div>
  );
};

export default LinkList;
