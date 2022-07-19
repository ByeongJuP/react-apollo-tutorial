import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import './CreateLink.scss';
import { useHistory } from 'react-router';

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
  const [url, setUrl] = useState<string | null>(null);
  const [desc, setDesc] = useState<string | null>(null);
  const history = useHistory();

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
            onChange={(e) => {
              setUrl(e.target.value);
            }}
            placeholder="The URL for the link"
          />
        </div>
      </div>
      <Mutation mutation={POST_MUTATION} variables={{ description: desc, url }} onCompleted={() => history.push('/')}>
        {(postMutation: any) => (
          <button
            className={`${baseClassName}__btn`}
            onClick={() => {
              if (!url || url.length < 1) {
                return alert('cannot enter empty url');
              } else if (!desc || url.length < 1) {
                return alert('cannot enter empty description');
              }
              postMutation();
            }}>
            Add Link
          </button>
        )}
      </Mutation>
    </div>
  );
};

export default CreateLink;
