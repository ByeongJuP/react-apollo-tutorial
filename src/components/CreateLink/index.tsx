import React, { useRef, useState } from 'react';
// import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import './CreateLink.scss';
import { usePostMutation } from '../../graphql/generated/schema';

interface PropTypes {}
const baseClassName = 'create-link';

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`;

const CreateLink: React.FC<PropTypes> = ({}) => {
  const [url, setUrl] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const descInputRef = useRef<HTMLInputElement>(null);
  const urlInputRef = useRef<HTMLInputElement>(null);

  const [postLink] = usePostMutation({
    onCompleted() {
      alert('Link post complete.');
      window.location.href = '/';
    },
    onError(e) {
      console.log(e.message);
      alert('Error! check error message in console.');
    }
  });

  const verifyPostData = () => {
    if (!url || url.length < 1) {
      descInputRef.current!.focus();
      return alert('cannot enter empty url');
    } else if (!desc || url.length < 1) {
      urlInputRef.current!.focus();
      return alert('cannot enter empty description');
    }

    postLink({ variables: { description: desc, url } });
  };

  return (
    <div className={`${baseClassName}`}>
      <div className={`${baseClassName}__title`}>
        <span className={`${baseClassName}__title__content`}>Create Link</span>
      </div>
      <div className={`${baseClassName}__wrapper`}>
        <div className={`${baseClassName}__wrapper__input`}>
          <span className={`${baseClassName}__wrapper__input__title`}>Descriptoin : </span>
          <input
            className={`${baseClassName}__wrapper__input__content`}
            type="text"
            ref={descInputRef}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            placeholder="A description for the link"
          />
        </div>
        <div className={`${baseClassName}__wrapper__input`}>
          <span className={`${baseClassName}__wrapper__input__title`}>Url : </span>
          <input
            className={`${baseClassName}__wrapper__input__content`}
            type="text"
            ref={urlInputRef}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
            placeholder="The URL for the link"
          />
        </div>
      </div>
      <button className={`${baseClassName}__btn`} onClick={verifyPostData}>
        Add Link
      </button>
    </div>
  );
};

export default CreateLink;
