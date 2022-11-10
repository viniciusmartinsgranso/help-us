import { OccurrenceTypeEnum } from '../enums/occurrence-type.enum';
import { OccurrenceProxy } from '../proxies/occurrence.proxy';
import { UserProxy } from '../proxies/user.proxy';
import { mockedUsers } from './user.mock';

const userMocked: UserProxy[] = mockedUsers;

export const mockedOccurrences: OccurrenceProxy[] = [
  {
    title: 'aaaa',
    description: 'dfwefwe',
    location: 'er232',
    type: OccurrenceTypeEnum.CRASH,
    id: 0,
    photoUrl: 'assets/images/vini.jpg',
    user: userMocked[0],
  },
  {
    title: 'aaaa',
    description: 'dfwefwe',
    location: 'er232',
    type: OccurrenceTypeEnum.CRASH,
    id: 1,
    photoUrl: 'assets/images/vini.jpg',
    user: userMocked[0],
  },
  {
    title: 'aaaa',
    description: 'dfwefwe',
    location: 'er232',
    type: OccurrenceTypeEnum.CRASH,
    id: 2,
    photoUrl: 'assets/images/vini.jpg',
    user: userMocked[0],
  },
];
