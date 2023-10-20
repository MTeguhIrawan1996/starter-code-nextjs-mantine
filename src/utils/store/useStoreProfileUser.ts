import { create } from 'zustand';

import { IGetUserData } from '@/services/graphql/query/user/useReadProfileUser';

interface ProfileUser {
  profileUser: IGetUserData | undefined;
  setProfileUser: (role: IGetUserData) => void;
}

export const useStoreProfileUser = create<ProfileUser>((set) => ({
  profileUser: undefined,
  setProfileUser: (profileUser: IGetUserData) => set({ profileUser }),
}));
