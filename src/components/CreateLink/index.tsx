import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
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
  const [url, setUrl] = useState('');
  const [desc, setDesc] = useState('');
  return (
    <div className={`${baseClassName}`}>
      <div className={`${baseClassName}__wrapper`}>
        <div className={`${baseClassName}__wrapper__input`}>
          <span className={`${baseClassName}__wrapper__input__title`}>Descriptoin : </span>
          <input
            className={`${baseClassName}__wrapper__input__content`}
            type="text"
            value={desc}
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
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
            placeholder="The URL for the link"
          />
        </div>
      </div>
      <Mutation mutation={POST_MUTATION} variables={{ description: desc, url }}>
        {(postMutation: any) => (
          <button className={`${baseClassName}__btn`} onClick={postMutation}>
            Add Link
          </button>
        )}
      </Mutation>
    </div>
  );
};

export default CreateLink;
