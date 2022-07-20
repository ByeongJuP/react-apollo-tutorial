import { useFeedQuery } from '../../graphql/generated/schema';

export const useLinkQuery = () => {
  const { loading, error, data } = useFeedQuery({});

  if (!data?.feed.links) {
    return { loading, error, data: [] };
  }

  return { loading, error, data: data?.feed.links };
};
