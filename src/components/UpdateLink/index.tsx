import React, { useState, useRef, useEffect } from 'react';
import { LinkType } from '../../commons/type';
import { useLocation } from 'react-router';
import LinkInputForm from '../LinkInputForm';
import './UpdateLink.scss';

interface PropTypes {}

const baseClassName = 'update-link';

const UpdateLink: React.FC<PropTypes> = ({}) => {
  const [url, setUrl] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const descInputRef = useRef<HTMLInputElement>(null);
  const urlInputRef = useRef<HTMLInputElement>(null);

  const location = useLocation<any>();
  const links = location.state.link;

  useEffect(() => {
    if (!!location.state.link) {
      const link: LinkType = location.state.link;
      setUrl(link.url);
      setDesc(link.description || '');
    }
  }, [location]);
  return (
    <div className={`${baseClassName}`}>
      <div className={`${baseClassName}__title`}>
        <span className={`${baseClassName}__title__content`}>Update Link</span>
      </div>
      <LinkInputForm url={url} setUrl={setUrl} desc={desc} setDesc={setDesc} />
      <button className={`${baseClassName}__btn`}>Update Link</button>
    </div>
  );
};

export default UpdateLink;
