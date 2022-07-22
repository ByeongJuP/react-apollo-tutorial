import React, { useRef } from 'react';
import './LinkInputForm.scss';

interface PropTypes {
  url: string;
  setUrl: Function;
  desc: string;
  setDesc: Function;
}

const baseClassName = 'link-input-from';

const LinkInputForm: React.FC<PropTypes> = ({ url, setUrl, desc, setDesc }) => {
  const descInputRef = useRef<HTMLInputElement>(null);
  const urlInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={`${baseClassName}`}>
      <div className={`${baseClassName}__desc`}>
        <span className={`${baseClassName}__desc__title`}>Descriptoin : </span>
        <input
          className={`${baseClassName}__desc__content`}
          type="text"
          ref={descInputRef}
          defaultValue={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          placeholder="A description for the link"
        />
      </div>
      <div className={`${baseClassName}__url`}>
        <span className={`${baseClassName}__url__title`}>Url : </span>
        <input
          className={`${baseClassName}__url__content`}
          type="text"
          ref={urlInputRef}
          defaultValue={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          placeholder="The URL for the link"
        />
      </div>
    </div>
  );
};

export default LinkInputForm;
