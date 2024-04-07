import { generateID } from "@/utils/string";
import { Notification } from "./../types/notification.interface";
import { create } from "zustand";

type NotificationState = {
  notifcations: Notification[];
  showNotification: (notification: Omit<Notification, "id">) => void;
  dismissNotification: (id: string) => void;
};

export const useNotificationStore = create<NotificationState>((set, get) => ({
  notifcations: [],
  showNotification: (notification) => {
    const id = generateID();
    set((state) => ({
      notifcations: [...state.notifcations, { id: id, ...notification }],
    }));
    setTimeout(() => {
      get().dismissNotification(id);
    }, 5000);
  },
  dismissNotification: (id) => {
    set((state) => ({
      notifcations: state.notifcations.filter((p) => p.id !== id),
    }));
  },
}));
