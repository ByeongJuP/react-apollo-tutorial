import React from 'react';
import Link from '../Link';
import { LinkType } from '../../commons/type';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import './LinkList.scss';

interface PropTypes {}
const baseClassName = 'link-list';

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;

const defaultLinkList: LinkType[] = [
  {
    id: '1',
    description: 'Prisma turns your database into a GraphQL API 😎',
    url: 'https://www.prismagraphql.com'
  },
  {
    id: '2',
    description: 'The best GraphQL client',
    url: 'https://www.apollographql.com/docs/react/'
  }
];

const LinkList: React.FC<PropTypes> = ({}) => {
  return (
    <div className={`${baseClassName}`}>
      <div className={`${baseClassName}__title`}>
        <span className={`${baseClassName}__title__content`}>Link List</span>
      </div>
      <Query query={FEED_QUERY}>
        {({ data }: { data: any }) => {
          console.log(data);
          if (!data) return <></>;
          const linksToRender: LinkType[] = data.feed?.links;
          return (
            <div>
              {linksToRender.map((x, idx) => (
                <Link key={idx} link={x} />
              ))}
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default LinkList;
