'use client';

import { createContext, useContext, useRef } from 'react';
import { useStoreWithEqualityFn } from 'zustand/traditional';
import { createStore } from 'zustand/vanilla';

interface State {
  member: Member | null;
}

interface Actions {
  setMember: (member: Member) => void;
}

type MemberStore = State & Actions;

const createMemberStore = (initial: Member | null) => {
  const create = createStore<MemberStore>();

  return create((set) => ({
    member: initial,
    setMember: (member) => set({ member }),
  }));
};

type MemberStoreApi = ReturnType<typeof createMemberStore>;

const MemberContext = createContext<MemberStoreApi | null>(null);

export const MemberProvider: FC<{
  member: Member | null;
  children: ReactNode;
}> = ({ member, children }) => {
  const storeRef = useRef<MemberStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createMemberStore(member);
  }

  return (
    <MemberContext.Provider value={storeRef.current}>
      {children}
    </MemberContext.Provider>
  );
};

export const useMemberStore = <T,>(selector: (store: MemberStore) => T): T => {
  const memberStore = useContext(MemberContext);

  if (memberStore === null) {
    throw new Error('MemberStore must be used within MemberProvider');
  }

  return useStoreWithEqualityFn(memberStore, selector);
};
