import React, { useRef, useState } from 'react';
// import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { usePostMutation } from '../../graphql/generated/schema';
import LinkInputForm from '../LinkInputForm';
import './CreateLink.scss';

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
    if (!url || url.length < 1 || !urlInputRef.current!.value.length) {
      descInputRef.current!.focus();
      return alert('cannot enter empty url');
    } else if (!desc || url.length < 1 || !descInputRef.current!.value.length) {
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
      <LinkInputForm
        url={url}
        setUrl={setUrl}
        desc={desc}
        setDesc={setDesc}
        descInputRef={descInputRef}
        urlInputRef={urlInputRef}
      />
      <button className={`${baseClassName}__btn`} onClick={verifyPostData}>
        Add Link
      </button>
    </div>
  );
};

export default CreateLink;
