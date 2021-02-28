export enum LineType {
  Verical = 'Verical',
  Horizontal = 'Horizontal',
}
export interface ILine {
  type: LineType;
  x1: number;
  x2: number;
  y1: number;
  y2: number;
  transformX: number;
  transformY: number;
  label: string | number;
}

export interface ILinesData {
  horizontalLines: ILine[];
  vericalLines: ILine[];
}

export class LinesData implements ILinesData {
  horizontalLines: ILine[] = [];
  vericalLines: ILine[] = [];
  constructor() {
    this.createLines();
  }

  createLines() {
    for (let i = 0; i <= 100; i++) {
      const _d: number = i * 0.01;
      const _h: ILine = {
        type: LineType.Horizontal,
        x1: 0,
        x2: 1,
        y1: _d,
        y2: _d,
        transformX: -0.015,
        transformY: _d + 0.003,
        label: i,
      };
      const _v: ILine = {
        type: LineType.Verical,
        x1: _d,
        x2: _d,
        y1: 0,
        y2: 1,
        transformX: _d - 0.0025,
        transformY: -0.01,
        label: i,
      };
      this.horizontalLines.push(_h);
      this.vericalLines.push(_v);
    }
  }
}
