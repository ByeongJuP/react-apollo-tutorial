import React from 'react';
import Link from '../Link/link';
import { LinkType } from '../../commons/type';

interface PropTypes {}

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
    <div>
      {defaultLinkList.map((x, idx) => (
        <Link key={idx} link={x} />
      ))}
    </div>
  );
};

export default LinkList;
