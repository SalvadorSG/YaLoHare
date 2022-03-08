import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { api_client } from '../../lib/fetcher';

export default withApiAuthRequired(async (req, res) => {
  // If your Access Token is expired and you have a Refresh Token
  // `getAccessToken` will fetch you a new one using the `refresh_token` grant
  const { accessToken } = await getAccessToken(req, res);
  // console.log('accessToken', accessToken);
  // console.log('client', api_client.defaults.baseURL);

  const res_api = await api_client.get('/evento', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.status(200).json(res_api.data);
});
