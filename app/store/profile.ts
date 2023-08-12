import { create } from "zustand";
import { persist } from "zustand/middleware";

const key = "Profile";
export interface ProfileStore {
  userName: string;
  avatar: string;

  updateUserName: (_: string) => void;
  updateAvatar: (_: string) => void;
}

export const useProfileStore = create<ProfileStore>()(
  persist(
    (set, get) => ({
      userName:
        "Lora",
      avatar: "https://www.dolldivine.com/rinmaru/rinmaru-anime-avatar-creator.jpg",
      updateUserName(userName: string) {
        set(() => ({ userName: userName?.trim() }));
      },
      updateAvatar(code: string) {
        set(() => ({ avatar: code?.trim() }));
      },
    }),
    {
      name: key,
      version: 1,
    }
  )
);
