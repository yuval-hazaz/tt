import { Event } from "../event/Event";

export type Customer = {
  createdAt: Date;
  email: string | null;
  events?: Array<Event>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  phone_2: string | null;
  updatedAt: Date;
};
