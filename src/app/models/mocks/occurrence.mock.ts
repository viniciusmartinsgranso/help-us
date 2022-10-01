import { OccurrenceTypeEnum } from '../enums/occurrence-type.enum';
import { OccurrenceProxy } from '../proxies/occurrence.proxy';

export const mockedOccurrences: OccurrenceProxy[] = [
  {
    title: 'aaaa',
    description: 'dfwefwe',
    location: 'er23r32',
    type: OccurrenceTypeEnum.CRASH,
    id: 1,
  },
  {
    title: 'bbbbb',
    description: 'dfwefwe',
    location: 'er23r32',
    type: OccurrenceTypeEnum.CRASH,
    id: 2,
  },
  {
    title: 'cccccc',
    description: 'dfwefwe',
    location: 'er23r32',
    type: OccurrenceTypeEnum.CRASH,
    id: 3,
  },
];
