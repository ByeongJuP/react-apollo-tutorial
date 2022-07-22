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
  const location = useLocation<any>();

  const descInputRef = useRef<HTMLInputElement>(null);
  const urlInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!!location.state.link) {
      const link: LinkType = location.state.link;
      setUrl(link.url);
      setDesc(link.description || '');
    }
  }, [location]);

  const verifyUpdateData = () => {
    if (!url || url.length < 1 || !urlInputRef.current!.value.length) {
      descInputRef.current!.focus();
      return alert('cannot enter empty url');
    } else if (!desc || url.length < 1 || !descInputRef.current!.value.length) {
      urlInputRef.current!.focus();
      return alert('cannot enter empty description');
    }
  };
  return (
    <div className={`${baseClassName}`}>
      <div className={`${baseClassName}__title`}>
        <span className={`${baseClassName}__title__content`}>Update Link</span>
      </div>
      <LinkInputForm
        url={url}
        setUrl={setUrl}
        desc={desc}
        setDesc={setDesc}
        descInputRef={descInputRef}
        urlInputRef={urlInputRef}
      />
      <button className={`${baseClassName}__btn`} onClick={verifyUpdateData}>
        Update Link
      </button>
    </div>
  );
};

export default UpdateLink;
