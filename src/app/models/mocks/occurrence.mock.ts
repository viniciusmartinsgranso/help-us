import { OccurrenceTypeEnum } from '../enums/occurrence-type.enum';
import { OccurrenceProxy } from '../proxies/occurrence.proxy';
import { mockedUsers } from './user.mock';

export const mockedOccurrences: OccurrenceProxy[] = [
  {
    title: 'aaaa',
    description: 'dfwefwe',
    location: 'er232',
    type: OccurrenceTypeEnum.CRASH,
    id: 0,
    photoUrl: 'assets/images/vini.jpg',
    user: mockedUsers[0],
  },
];
