import Cookies from 'js-cookie';
import { useSession } from 'next-auth/react';
import * as React from 'react';

export const useUpdateSession = () => {
  const { data: session, update } = useSession();
  const accessToken = Cookies.get('accesToken');
  const refreshToken = Cookies.get('refreshToken');
  // console.log(session);
  React.useEffect(() => {
    if (accessToken && refreshToken && session) {
      // console.log('jalan use update session');
      try {
        const updateSession = async () => {
          await update({
            ...session,
            user: {
              ...session?.user,
              login: {
                ...session?.user.login,
                accessToken: {
                  ...session?.user.login.accessToken,
                  token: accessToken,
                },
                refreshToken: {
                  ...session?.user.login.refreshToken,
                  token: refreshToken,
                },
              },
            },
          });
          Cookies.remove('accesToken');
          Cookies.remove('refreshToken');
        };
        updateSession();
      } catch (err) {
        return;
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken, refreshToken, session]);
};
