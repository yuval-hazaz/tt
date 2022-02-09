import { Event as TEvent } from "../api/event/Event";

export const EVENT_TITLE_FIELD = "remarks";

export const EventTitle = (record: TEvent): string => {
  return record.remarks || record.id;
};
