import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { api_client } from '../../lib/fetcher';

export default withApiAuthRequired(async (req, res) => {
  const { accessToken } = await getAccessToken(req, res);

  const res_api = await api_client.get('/evento', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.status(200).json(res_api.data);
});
