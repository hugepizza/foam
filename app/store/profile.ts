import { create } from "zustand";
import { persist } from "zustand/middleware";

const key = "Profile";
export interface ProfileStore {
  userName: string;
  avatar: string;
  subject: string;
  from?: string;

  updateUserName: (_: string) => void;
  updateAvatar: (_: string) => void;
  updateSubject: (_: string) => void;
  updateFrom: (_?: string) => void;
}

export const useProfileStore = create<ProfileStore>()(
  persist(
    (set, get) => ({
      userName: "Lora",
      subject: "none",
      avatar:
        "https://www.dolldivine.com/rinmaru/rinmaru-anime-avatar-creator.jpg",
      updateUserName(userName: string) {
        set(() => ({ userName: userName?.trim() }));
      },
      updateAvatar(avatar: string) {
        set(() => ({ avatar: avatar?.trim() }));
      },
      updateSubject(subject: string) {
        set(() => ({ subject: subject?.trim() }));
      },
      updateFrom(from?: string) {
        set(() => ({ from: from?.trim() }));
      },
    }),
    {
      name: key,
      version: 1,
    }
  )
);
