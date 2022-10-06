import { OccurrenceTypeEnum } from '../enums/occurrence-type.enum';
import { OccurrenceProxy } from '../proxies/occurrence.proxy';

export const mockedOccurrences: OccurrenceProxy[] = [
  {
    title: 'aaaa',
    description: 'dfwefwe',
    location: 'er232',
    type: OccurrenceTypeEnum.CRASH,
    id: 1,
    photoUrl: 'assets/images/vini.jpg',
    user: 'Vini',
    userPhoto: 'assets/images/vini.jpg',
  },
  {
    title: 'bbbbb',
    description: 'dfwefwe',
    location: 'errrr',
    type: OccurrenceTypeEnum.CRASH,
    id: 2,
    user: 'fwefwe',
    userPhoto: 'assets/images/vini.jpg',
  },
  {
    title: 'cccccc',
    description: 'dfwefwe',
    location: 'er23rdadasd32',
    type: OccurrenceTypeEnum.CRASH,
    id: 3,
    user: 'xxxx',
    userPhoto: 'assets/images/vini.jpg',
  },
];
