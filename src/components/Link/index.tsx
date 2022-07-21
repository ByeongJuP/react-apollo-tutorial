import React from 'react';
import { LinkType } from '../../commons/type/index';
import { useDeleteMutation } from '../../graphql/generated/schema';
import './Link.scss';

interface PropTypes {
  link: LinkType;
}

const baseClassName = 'link';

const Link: React.FC<PropTypes> = ({ link }) => {
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
        <a
          className={`${baseClassName}__wrapper__url`}
          onClick={() => {
            if (!!link.url) {
              const hasHttp = !link.url.split('http')[0];
              hasHttp ? window.open(link.url, '_blank') : window.open('http://' + link.url, '_blank');
            }
          }}>{`${link.url}`}</a>
        <span>)</span>
        <span className={`${baseClassName}__wrapper__btn`} onClick={deleteLinkFn}>
          ❌
        </span>
      </div>
    </div>
  );
};

export default Link;
