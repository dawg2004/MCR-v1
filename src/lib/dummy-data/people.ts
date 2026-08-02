// TEMP: 正式ダミーデータ(20名)はマスタープラン手順12で整備予定

export interface SriScores {
  love: number;
  marriage: number;
  work: number;
  friendship: number;
  soul: number;
}

export interface Person {
  id: string;
  name: string;
  soulCode: string;
  sri: SriScores;
}

export const people: Person[] = [
  {
    id: "p001",
    name: "濱田佳徳",
    soulCode: "SC-3891",
    sri: { love: 82, marriage: 74, work: 91, friendship: 68, soul: 96 },
  },
  {
    id: "p002",
    name: "鳥川千佳子",
    soulCode: "SC-1042",
    sri: { love: 95, marriage: 88, work: 63, friendship: 79, soul: 84 },
  },
  {
    id: "p003",
    name: "泉澤志帆",
    soulCode: "SC-5567",
    sri: { love: 71, marriage: 69, work: 85, friendship: 92, soul: 77 },
  },
  {
    id: "p004",
    name: "神代蓮",
    soulCode: "SC-2210",
    sri: { love: 60, marriage: 55, work: 78, friendship: 81, soul: 90 },
  },
  {
    id: "p005",
    name: "早乙女悠真",
    soulCode: "SC-4483",
    sri: { love: 88, marriage: 92, work: 70, friendship: 66, soul: 73 },
  },
];
