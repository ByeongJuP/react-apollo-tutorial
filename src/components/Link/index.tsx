import React from 'react';
import { useHistory } from 'react-router';
import { LinkType } from '../../commons/type/index';
import { useDeleteMutation } from '../../graphql/generated/schema';
import './Link.scss';

interface PropTypes {
  link: LinkType;
}

const baseClassName = 'link';

const Link: React.FC<PropTypes> = ({ link }) => {
  const history = useHistory();

  const [deleteLink] = useDeleteMutation({
    onCompleted() {
      alert('Delete is success');
      window.location.reload();
    },
    onError(e) {
      console.log(e.message);
      return alert('Error! check error message in console.');
    }
  });
  const deleteLinkFn = () => {
    const confirm = window.confirm(`Delete '${link.description}'?`);

    if (!confirm) {
      return false;
    }
    deleteLink({ variables: { id: Number(link.id) } });
  };
  return (
    <div className={`${baseClassName}`}>
      <div className={`${baseClassName}__wrapper`}>
        <span className={`${baseClassName}__wrapper__desc`}>{link.description}</span>
        <span>(</span>
        <span
          className={`${baseClassName}__wrapper__url`}
          onClick={() => {
            if (!!link.url) {
              const hasHttp = !link.url.split('http')[0];
              hasHttp ? window.open(link.url, '_blank') : window.open('http://' + link.url, '_blank');
            }
          }}>{`${link.url}`}</span>
        <span>)</span>
      </div>
      <span className={`${baseClassName}__emoji`} onClick={deleteLinkFn} title="삭제">
        ❌
      </span>
      <span
        className={`${baseClassName}__emoji`}
        onClick={() => {
          history.push({ pathname: '/update', state: { link } });
        }}
        title="수정">
        📝
      </span>
    </div>
  );
};

export default Link;
