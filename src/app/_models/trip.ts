export class Trip {
  id?: string;
  date: Date = new Date();
  startKm: number;
  endKm: number;
  totalKm: number;
  comment: string;
}
