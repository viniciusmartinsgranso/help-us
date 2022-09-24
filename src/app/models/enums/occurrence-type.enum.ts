export enum OccurrenceTypeEnum {
  CRASH = 0,
  FIRE = 1,
  CAVE_IN = 2,
  COOP = 3,
}

export const occurrenceTypeIconRecord: Record<OccurrenceTypeEnum, string> = {
  [OccurrenceTypeEnum.CRASH]: 'src/assets/images/occurrence/batida.svg',
  [OccurrenceTypeEnum.FIRE]: 'assets/images/occurrence/incendio.svg',
  [OccurrenceTypeEnum.CAVE_IN]: 'assets/images/occurrence/desmoronamento.svg',
  [OccurrenceTypeEnum.COOP]: 'assets/images/occurrence/policia.svg',
};

export const occurrenceTypeTranslate: Record<OccurrenceTypeEnum, string> = {
  [OccurrenceTypeEnum.CRASH]: 'Batida',
  [OccurrenceTypeEnum.FIRE]: 'Incendio',
  [OccurrenceTypeEnum.CAVE_IN]: 'Desmoronamento',
  [OccurrenceTypeEnum.COOP]: 'Policia',
};
