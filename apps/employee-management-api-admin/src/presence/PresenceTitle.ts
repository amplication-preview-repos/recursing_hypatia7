import { Presence as TPresence } from "../api/presence/Presence";

export const PRESENCE_TITLE_FIELD = "id";

export const PresenceTitle = (record: TPresence): string => {
  return record.id?.toString() || String(record.id);
};
