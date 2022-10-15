import { OccurrenceTypeEnum } from '../enums/occurrence-type.enum';

export interface OccurrenceProxy {
  id: number;
  type: OccurrenceTypeEnum;
  title: string;
  description: string;
  location: string;
  user?: string;
  userPhoto?: string;
  photoUrl?: string;
}
