import { IPoint, SelectedTeethType } from 'src/app/helpers/general';

export enum IDataLineType {
  C = 'C',
  M = 'M',
  L = 'L',
}

export interface IDataLine {
  type: IDataLineType;
  x: number;
  y: number;
  x1?: number;
  y1?: number;
  x2?: number;
  y2?: number;
  end?: string;
}

export interface IConvertedPathToPolygon {
  arrayOfPointsAsIPoint100: IPoint[];
  arrayOfPointsAsIPoint20: IPoint[];
  arrayOfPointsAsArrayArrayNumbers100: number[][];
  arrayOfPointsAsArrayArrayNumbers20: number[][];
}

export interface ITeethDataObject {
  type: SelectedTeethType;
  viewBoxX: number;
  viewBoxY: number;
  points: IDataLine[];
  defaultPath: string;
  convertedPath: string;
  convertedPoints: IConvertedPathToPolygon | null;
}

// { type: IDataLineType.M, x: , y:  },
// { type: IDataLineType.C, x1: , y1: , x2: , y2: , x: , y:  },
// { type: IDataLineType.L, x: , y: , end: 'Z' }

export const LEFT_BI_CUSPID: ITeethDataObject = {
  type: SelectedTeethType.LEFT_BICUSPID,
  viewBoxX: 85,
  viewBoxY: 164.3,
  defaultPath: 'M 16.743 0.867 C 36.743 -3.577 63.743 33.368 75.243 53.867 C 85.743 72.584 86.101 118.857 81.743 129.367 C 73.243 149.868 53.124 166.582 36.243 163.367 C 17.243 159.749 3.6 126.367 1.243 93.367 C -0.257 72.367 -1.257 4.867 16.743 0.867 Z',
  convertedPath: '',
  convertedPoints: null,
  points: [
    { type: IDataLineType.M, x: 16.743, y: 0.867 },
    { type: IDataLineType.C, x1: 36.743, y1: -3.577, x2: 63.743, y2: 33.368, x: 75.243, y: 53.867 },
    { type: IDataLineType.C, x1: 85.743, y1: 72.584, x2: 86.101, y2: 118.857, x: 81.743, y: 129.367 },
    { type: IDataLineType.C, x1: 73.243, y1: 149.868, x2: 53.124, y2: 166.582, x: 36.243, y: 163.367 },
    { type: IDataLineType.C, x1: 17.243, y1: 159.749, x2: 3.6, y2: 126.367, x: 1.243, y: 93.367 },
    { type: IDataLineType.C, x1: -0.257, y1: 72.367, x2: -1.257, y2: 4.867, x: 16.743, y: 0.867, end: 'Z' },
  ],
};

export const RIGHT_BI_CUSPID: ITeethDataObject = {
  type: SelectedTeethType.RIGHT_BICUSPID,
  viewBoxX: 82.85,
  viewBoxY: 172.5,
  defaultPath: 'M69.972 0.553105C62.472 -1.1139 21.472 37.0531 9.97201 57.5521C-0.527992 76.2691 -1.38599 125.542 2.97201 136.052C11.472 156.553 40.09 174.768 56.972 171.553C75.972 167.935 73.684 129.888 78.472 99.0521C81.655 78.5531 87.972 4.5531 69.972 0.553105Z',
  convertedPath: '',
  convertedPoints: null,
  points: [
    { type: IDataLineType.M, x: 69.972, y: 0.553105 },
    { type: IDataLineType.C, x1: 62.472, y1: -1.1139, x2: 21.472, y2: 37.0531, x: 9.97201, y: 57.5521 },
    { type: IDataLineType.C, x1: -0.527992, y1: 76.2691, x2: -1.38599, y2: 125.542, x: 2.97201, y: 136.052 },
    { type: IDataLineType.C, x1: 11.472, y1: 156.553, x2: 40.09, y2: 174.768, x: 56.972, y: 171.553 },
    { type: IDataLineType.C, x1: 75.972, y1: 167.935, x2: 73.684, y2: 129.888, x: 78.472, y: 99.0521 },
    { type: IDataLineType.C, x1: 81.655, y1: 78.5531, x2: 87.972, y2: 4.5531, x: 69.972, y: 0.553105, end: 'Z' },
  ],
};

export const LEFT_CUSPID: ITeethDataObject = {
  type: SelectedTeethType.LEFT_CUSPID,
  viewBoxX: 122.9,
  viewBoxY: 197.7,
  defaultPath: 'M84.194 36.5C98.193 53 113.952 76.078 120.194 106C124.574 127 121.93 149.5 112.43 165.5C105.463 177.234 84.194 197 66 197C45 197 2.03631 174 0.694007 114C-0.569993 57.5 3.69401 0.5 32.694 0.5C48.93 0.5 67.691 17.05 84.194 36.5Z',
  convertedPath: '',
  convertedPoints: null,
  points: [
    { type: IDataLineType.M, x: 84.194, y: 36.5 },
    { type: IDataLineType.C, x1: 98.193, y1: 53, x2: 113.952, y2: 76.078, x: 120.194, y: 106 },
    { type: IDataLineType.C, x1: 124.574, y1: 127, x2: 121.93, y2: 149.5, x: 112.43, y: 165.5 },
    { type: IDataLineType.C, x1: 105.463, y1: 177.234, x2: 84.194, y2: 197, x: 66, y: 197 },
    { type: IDataLineType.C, x1: 45, y1: 197, x2: 2.03631, y2: 174, x: 0.694007, y: 114 },
    { type: IDataLineType.C, x1: -0.569993, y1: 57.5, x2: 3.69401, y2: 0.5, x: 32.694, y: 0.5 },
    { type: IDataLineType.C, x1: 48.93, y1: 0.5, x2: 67.691, y2: 17.05, x: 84.194, y: 36.5, end: 'Z' },
  ],
};

export const RIGHT_CUSPID: ITeethDataObject = {
  type: SelectedTeethType.RIGHT_CUSPID,
  viewBoxX: 125.6,
  viewBoxY: 208,
  defaultPath: 'M39.694 36.5C25.694 53 9.93601 76.078 3.69401 106C-0.685995 127 -2.592 144.5 11.694 164.5C25.98 184.5 47.194 207.5 62.694 207.5C78.194 207.5 117.469 187 123.194 115C127.607 59.5 125.699 0.499 94.194 0.5C76.694 0.5 56.197 17.05 39.694 36.5Z',
  convertedPath: '',
  convertedPoints: null,
  points: [
    { type: IDataLineType.M, x: 39.694, y: 36.5 },
    { type: IDataLineType.C, x1: 25.694, y1: 53, x2: 9.93601, y2: 76.078, x: 3.69401, y: 106 },
    { type: IDataLineType.C, x1: -0.685995, y1: 127, x2: -2.592, y2: 144.5, x: 11.694, y: 164.5 },
    { type: IDataLineType.C, x1: 25.98, y1: 184.5, x2: 47.194, y2: 207.5, x: 62.694, y: 207.5 },
    { type: IDataLineType.C, x1: 78.194, y1: 207.5, x2: 117.469, y2: 187, x: 123.194, y: 115 },
    { type: IDataLineType.C, x1: 127.607, y1: 59.5, x2: 125.699, y2: 0.499, x: 94.194, y: 0.5 },
    { type: IDataLineType.C, x1: 76.694, y1: 0.5, x2: 56.197, y2: 17.05, x: 39.694, y: 36.5, end: 'Z' },
  ],
};

export const LEFT_LATERAL: ITeethDataObject = {
  type: SelectedTeethType.LEFT_LATERAL,
  viewBoxX: 142.6,
  viewBoxY: 202,
  defaultPath: 'M142 121C141.595 146.742 143.506 172.582 133.557 187.082C123.608 201.582 94.078 202.628 67.506 200.582C45.215 198.865 30.218 192.839 16.006 175.582C2.006 158.583 0.678002 132.518 0.506002 103.582C0.390002 84.0311 1.918 70.2571 6.506 54.0831C11.094 37.9081 25.153 6.65907 38.506 2.08107C68 -11.4999 142.675 77.9589 142 121Z',
  convertedPath: '',
  convertedPoints: null,
  points: [
    { type: IDataLineType.M, x: 142, y: 121 },
    { type: IDataLineType.C, x1: 141.595, y1: 146.742, x2: 143.506, y2: 172.582, x: 133.557, y: 187.082 },
    { type: IDataLineType.C, x1: 123.608, y1: 201.582, x2: 94.078, y2: 202.628, x: 67.506, y: 200.582 },
    { type: IDataLineType.C, x1: 45.215, y1: 198.865, x2: 30.218, y2: 192.839, x: 16.006, y: 175.582 },
    { type: IDataLineType.C, x1: 2.006, y1: 158.583, x2: 0.678002, y2: 132.518, x: 0.506002, y: 103.582 },
    { type: IDataLineType.C, x1: 0.390002, y1: 84.0311, x2: 1.918, y2: 70.2571, x: 6.506, y: 54.0831 },
    { type: IDataLineType.C, x1: 11.094, y1: 37.9081, x2: 25.153, y2: 6.65907, x: 38.506, y: 2.08107 },
    { type: IDataLineType.C, x1: 68, y1: -11.4999, x2: 142.675, y2: 77.9589, x: 142, y: 121, end: 'Z' },
  ],
};

export const RIGHT_LATERAL: ITeethDataObject = {
  type: SelectedTeethType.RIGHT_LATERAL,
  viewBoxX: 142.2,
  viewBoxY: 201.1,
  defaultPath: 'M 0.5 115.5 C 0.5 182 6 197.5 74.557 200.582 C 96.848 198.865 111.845 192.839 126.057 175.582 C 140.057 158.583 141.385 132.518 141.557 103.582 C 141.673 84.031 140.145 70.257 135.557 54.083 C 130.969 37.908 116.5 0.5 98 0.5 C 57.443 0.5 0.5 49 0.5 115.5 Z',
  convertedPath: '',
  convertedPoints: null,
  points: [
    { type: IDataLineType.M, x: 0.5, y: 115.5 },
    { type: IDataLineType.C, x1: 0.5, y1: 182, x2: 6, y2: 197.5, x: 74.557, y: 200.582 },
    { type: IDataLineType.C, x1: 96.848, y1: 198.865, x2: 111.845, y2: 192.839, x: 126.057, y: 175.582 },
    { type: IDataLineType.C, x1: 140.057, y1: 158.583, x2: 141.385, y2: 132.518, x: 141.557, y: 103.582 },
    { type: IDataLineType.C, x1: 141.673, y1: 84.031, x2: 140.145, y2: 70.257, x: 135.557, y: 54.083 },
    { type: IDataLineType.C, x1: 130.969, y1: 37.908, x2: 116.5, y2: 0.5, x: 98, y: 0.5 },
    { type: IDataLineType.C, x1: 57.443, y1: 0.5, x2: 0.5, y2: 49, x: 0.5, y: 115.5, end: 'Z' },
  ],
};

export const LEFT_CENTRAL: ITeethDataObject = {
  type: SelectedTeethType.LEFT_CENTRAL,
  viewBoxX: 204,
  viewBoxY: 233,
  defaultPath: 'M 58.044 231.742 C 21.3 229 0.544 222.5 0.544 175.242 C 0.544 175.242 -0.456 135.742 7.044 91.743 C 12.119 61.966 24.566 33.636 36.544 22.242 C 57.044 2.742 75.272 -0.534 102.044 0.743 C 132.056 2.174 151.276 12.062 171.544 34.242 C 180.225 43.742 189.128 57.863 195.044 76.243 C 200.07 91.858 203.3 113.096 203.3 129.5 C 203.3 147 203.3 165.5 203.3 188 C 202.689 215.5 207.8 231.595 168.8 231.742 C 147.551 231.822 133.577 231.423 113.544 231.595 C 97.778 231.731 93.544 233.242 58.044 231.742 Z',
  convertedPath: '',
  convertedPoints: null,
  points: [
    { type: IDataLineType.M, x: 58.044, y: 231.742 },
    { type: IDataLineType.C, x1: 21.3, y1: 229, x2: 0.544, y2: 222.5, x: 0.544, y: 175.242 },
    { type: IDataLineType.C, x1: 0.544, y1: 175.242, x2: -0.456, y2: 135.742, x: 7.044, y: 91.743 },
    { type: IDataLineType.C, x1: 12.119, y1: 61.966, x2: 24.566, y2: 33.636, x: 36.544, y: 22.242 },
    { type: IDataLineType.C, x1: 57.044, y1: 2.742, x2: 75.272, y2: -0.534, x: 102.044, y: 0.743 },
    { type: IDataLineType.C, x1: 132.056, y1: 2.174, x2: 151.276, y2: 12.062, x: 171.544, y: 34.242 },
    { type: IDataLineType.C, x1: 180.225, y1: 43.742, x2: 189.128, y2: 57.863, x: 195.044, y: 76.243 },
    { type: IDataLineType.C, x1: 200.07, y1: 91.858, x2: 203.3, y2: 113.096, x: 203.3, y: 129.5 },
    { type: IDataLineType.C, x1: 203.3, y1: 147, x2: 203.3, y2: 165.5, x: 203.3, y: 188 },
    { type: IDataLineType.C, x1: 202.689, y1: 215.5, x2: 207.8, y2: 231.595, x: 168.8, y: 231.742 },
    { type: IDataLineType.C, x1: 147.551, y1: 231.822, x2: 133.577, y2: 231.423, x: 113.544, y: 231.595 },
    { type: IDataLineType.C, x1: 97.778, y1: 231.731, x2: 93.544, y2: 233.242, x: 58.044, y: 231.742, end: 'Z' },
  ],
};

export const RIGHT_CENTRAL: ITeethDataObject = {
  type: SelectedTeethType.RIGHT_CENTRAL,
  viewBoxX: 202.5,
  viewBoxY: 233.2,
  defaultPath: 'M 56.168 230.742 C 74.668 232.742 125.168 233.742 160.668 230.742 C 196.168 227.742 201.668 216.242 201.668 182.242 C 201.668 148.242 203.794 135.742 196.294 91.743 C 191.218 61.966 178.772 33.636 166.793 22.242 C 146.293 2.742 128.066 -0.534 101.293 0.743 C 71.282 2.174 52.061 12.062 31.794 34.242 C 23.113 43.742 14.209 57.863 8.294 76.243 C 3.268 91.858 0.467 113.097 0.637 129.5 C 1.669 228.5 -9.45 223.648 56.168 230.742 Z',
  convertedPath: '',
  convertedPoints: null,
  points: [
    { type: IDataLineType.M, x: 56.168, y: 230.742 },
    { type: IDataLineType.C, x1: 74.668, y1: 232.742, x2: 125.168, y2: 233.742, x: 160.668, y: 230.742 },
    { type: IDataLineType.C, x1: 196.168, y1: 227.742, x2: 201.668, y2: 216.242, x: 201.668, y: 182.242 },
    { type: IDataLineType.C, x1: 201.668, y1: 148.242, x2: 203.794, y2: 135.742, x: 196.294, y: 91.743 },
    { type: IDataLineType.C, x1: 191.218, y1: 61.966, x2: 178.772, y2: 33.636, x: 166.793, y: 22.242 },
    { type: IDataLineType.C, x1: 146.293, y1: 2.742, x2: 128.066, y2: -0.534, x: 101.293, y: 0.743 },
    { type: IDataLineType.C, x1: 71.282, y1: 2.174, x2: 52.061, y2: 12.062, x: 31.794, y: 34.242 },
    { type: IDataLineType.C, x1: 23.113, y1: 43.742, x2: 14.209, y2: 57.863, x: 8.294, y: 76.243 },
    { type: IDataLineType.C, x1: 3.268, y1: 91.858, x2: 0.467, y2: 113.097, x: 0.637, y: 129.5 },
    { type: IDataLineType.C, x1: 1.669, y1: 228.5, x2: -9.45, y2: 223.648, x: 56.168, y: 230.742, end: 'Z' },
  ],
};
