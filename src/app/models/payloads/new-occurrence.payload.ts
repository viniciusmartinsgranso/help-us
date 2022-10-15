export interface NewOccurrencePayload {
  id: number;
  title: string;
  description: string;
  location: string;
  iconUrl?: string;
  userId?: number;
}
