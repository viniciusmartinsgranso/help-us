export enum OccurrenceTypeEnum {
  CRASH = 0,
  FIRE = 1,
  COOP = 3,
  CAVE_IN = 2,
}

export const occurrenceTypeIconRecord: Record<OccurrenceTypeEnum, string> = {
  [OccurrenceTypeEnum.CRASH]: 'src/assets/images/occurrence/batida.svg',
  [OccurrenceTypeEnum.FIRE]: 'assets/images/occurrence/incendio',
  [OccurrenceTypeEnum.CAVE_IN]: 'assets/images/occurrence/desmoronamento',
  [OccurrenceTypeEnum.COOP]: 'assets/images/occurrence/policia',
};
