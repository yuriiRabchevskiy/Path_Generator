import { IPoint, SelectedTeethType } from "src/app/helpers/general";

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
  viewBoxX: 82.8,
  viewBoxY: 172.5,
  defaultPath: 'M 12.715 0.553 C 20.215 -1.114 61.215 37.053 72.715 57.552 C 83.215 76.269 84.073 125.542 79.715 136.052 C 71.215 156.553 42.596 174.768 25.715 171.553 C 6.715 167.935 9.003 129.888 4.215 99.052 C 1.032 78.553 -5.285 4.553 12.715 0.553 Z',
  convertedPath: '',
  convertedPoints: null,
  points: [
    { type: IDataLineType.M, x: 12.715, y: 0.553 },
    { type: IDataLineType.C, x1: 20.215, y1: -1.114, x2: 61.215, y2: 37.053, x: 72.715, y: 57.552 },
    { type: IDataLineType.C, x1: 83.215, y1: 76.269, x2: 84.073, y2: 125.542, x: 79.715, y: 136.052 },
    { type: IDataLineType.C, x1: 71.215, y1: 156.553, x2: 42.596, y2: 174.768, x: 25.715, y: 171.553 },
    { type: IDataLineType.C, x1: 6.715, y1: 167.935, x2: 9.003, y2: 129.888, x: 4.215, y: 99.052 },
    { type: IDataLineType.C, x1: 1.032, y1: 78.553, x2: -5.285, y2: 4.553, x: 12.715, y: 0.553, end: 'Z' },
  ],
};

export const RIGHT_BI_CUSPID: ITeethDataObject = {
  type: SelectedTeethType.RIGHT_BICUSPID,
  viewBoxX: 83,
  viewBoxY: 172.6,
  defaultPath: 'M 69.972 0.553 C 62.472 -1.114 21.472 37.053 9.972 57.552 C -0.528 76.269 -1.386 125.542 2.972 136.052 C 11.472 156.553 40.09 174.768 56.972 171.553 C 75.972 167.935 73.684 129.888 78.472 99.052 C 81.655 78.553 87.972 4.553 69.972 0.553 Z',
  convertedPath: '',
  convertedPoints: null,
  points: [
    { type: IDataLineType.M, x: 69.972, y: 0.553 },
    { type: IDataLineType.C, x1: 62.472, y1: -1.114, x2: 21.472, y2: 37.053, x: 9.972, y: 57.552 },
    { type: IDataLineType.C, x1: -0.528, y1: 76.269, x2: -1.386, y2: 125.542, x: 2.972, y: 136.052 },
    { type: IDataLineType.C, x1: 11.472, y1: 156.553, x2: 40.09, y2: 174.768, x: 56.972, y: 171.553 },
    { type: IDataLineType.C, x1: 75.972, y1: 167.935, x2: 73.684, y2: 129.888, x: 78.472, y: 99.052 },
    { type: IDataLineType.C, x1: 81.655, y1: 78.553, x2: 87.972, y2: 4.553, x: 69.972, y: 0.553, end: 'Z' },
  ],
};

export const LEFT_CUSPID: ITeethDataObject = {
  type: SelectedTeethType.LEFT_CUSPID,
  viewBoxX: 123,
  viewBoxY: 208.5,
  defaultPath: 'M 84.194 36.5 C 98.193 53 113.952 76.078 120.194 106 C 124.574 127 121.93 149.5 112.43 165.5 C 105.463 177.234 78.93 207.5 66.194 207.5 C 53.458 207.5 2.309 186.209 0.694 114 C -0.57 57.5 3.694 0.5 32.694 0.5 C 48.93 0.5 67.691 17.05 84.194 36.5 Z',
  convertedPath: '',
  convertedPoints: null,
  points: [
    { type: IDataLineType.M, x: 84.194, y: 36.5 },
    { type: IDataLineType.C, x1: 98.193, y1: 53, x2: 113.952, y2: 76.078, x: 120.194, y: 106 },
    { type: IDataLineType.C, x1: 124.574, y1: 127, x2: 121.93, y2: 149.5, x: 112.43, y: 165.5 },
    { type: IDataLineType.C, x1: 105.463, y1: 177.234, x2: 78.93, y2: 207.5, x: 66.194, y: 207.5 },
    { type: IDataLineType.C, x1: 53.458, y1: 207.5, x2: 2.309, y2: 186.209, x: 0.694, y: 114 },
    { type: IDataLineType.C, x1: -0.57, y1: 57.5, x2: 3.694, y2: 0.5, x: 32.694, y: 0.5 },
    { type: IDataLineType.C, x1: 48.93, y1: 0.5, x2: 67.691, y2: 17.05, x: 84.194, y: 36.5, end: 'Z' },
  ],
};

export const RIGHT_CUSPID: ITeethDataObject = {
  type: SelectedTeethType.RIGHT_CUSPID,
  viewBoxX: 125.7,
  viewBoxY: 208.2,
  defaultPath: 'M 39.694 36.5 C 25.694 53 9.936 76.078 3.694 106 C -0.686 127 -2.592 144.5 11.694 164.5 C 25.98 184.5 47.194 207.5 62.694 207.5 C 78.194 207.5 117.469 187 123.194 115 C 127.607 59.5 125.699 0.499 94.194 0.5 C 76.694 0.5 56.197 17.05 39.694 36.5 Z',
  convertedPath: '',
  convertedPoints: null,
  points: [
    { type: IDataLineType.M, x: 39.694, y: 36.5 },
    { type: IDataLineType.C, x1: 25.694, y1: 53, x2: 9.936, y2: 76.078, x: 3.694, y: 106 },
    { type: IDataLineType.C, x1: -0.686, y1: 127, x2: -2.592, y2: 144.5, x: 11.694, y: 164.5 },
    { type: IDataLineType.C, x1: 25.98, y1: 184.5, x2: 47.194, y2: 207.5, x: 62.694, y: 207.5 },
    { type: IDataLineType.C, x1: 78.194, y1: 207.5, x2: 117.469, y2: 187, x: 123.194, y: 115 },
    { type: IDataLineType.C, x1: 127.607, y1: 59.5, x2: 125.699, y2: 0.499, x: 94.194, y: 0.5 },
    { type: IDataLineType.C, x1: 76.694, y1: 0.5, x2: 56.197, y2: 17.05, x: 39.694, y: 36.5, end: 'Z' },
  ],
};

export const LEFT_LATERAL: ITeethDataObject = {
  type: SelectedTeethType.LEFT_LATERAL,
  viewBoxX: 142.8,
  viewBoxY: 202.1,
  defaultPath: 'M 91.006 18.082 C 102.329 25.106 112.022 29.722 121.506 39.082 C 133.151 50.575 136.797 57.959 139.506 74.082 C 141.873 88.172 142.23 96.296 142.006 110.582 C 141.601 136.324 143.506 172.582 133.557 187.082 C 123.608 201.582 94.078 202.628 67.506 200.582 C 45.215 198.865 30.218 192.839 16.006 175.582 C 2.006 158.583 0.678 132.518 0.506 103.582 C 0.39 84.031 1.918 70.257 6.506 54.083 C 11.094 37.908 25.153 6.659 38.506 2.081 C 56.006 -3.918 75.409 8.408 91.006 18.082 Z',
  convertedPath: '',
  convertedPoints: null,
  points: [
    { type: IDataLineType.M, x: 91.006, y: 18.082 },
    { type: IDataLineType.C, x1: 102.329, y1: 25.106, x2: 112.022, y2: 29.722, x: 121.506, y: 39.082 },
    { type: IDataLineType.C, x1: 133.151, y1: 50.575, x2: 136.797, y2: 57.959, x: 139.506, y: 74.082 },
    { type: IDataLineType.C, x1: 141.873, y1: 88.172, x2: 142.23, y2: 96.296, x: 142.006, y: 110.582 },
    { type: IDataLineType.C, x1: 141.601, y1: 136.324, x2: 143.506, y2: 172.582, x: 133.557, y: 187.082 },
    { type: IDataLineType.C, x1: 123.608, y1: 201.582, x2: 94.078, y2: 202.628, x: 67.506, y: 200.582 },
    { type: IDataLineType.C, x1: 45.215, y1: 198.865, x2: 30.218, y2: 192.839, x: 16.006, y: 175.582 },
    { type: IDataLineType.C, x1: 2.006, y1: 158.583, x2: 0.678, y2: 132.518, x: 0.506, y: 103.582 },
    { type: IDataLineType.C, x1: 0.39, y1: 84.031, x2: 1.918, y2: 70.257, x: 6.506, y: 54.083 },
    { type: IDataLineType.C, x1: 11.094, y1: 37.908, x2: 25.153, y2: 6.659, x: 38.506, y: 2.081 },
    { type: IDataLineType.C, x1: 56.006, y1: -3.918, x2: 75.409, y2: 8.408, x: 91.006, y: 18.082, end: 'Z' },
  ],
};

export const RIGHT_LATERAL: ITeethDataObject = {
  type: SelectedTeethType.RIGHT_LATERAL,
  viewBoxX: 142.9,
  viewBoxY: 201.2,
  defaultPath: 'M 51.557 18.082 C 40.233 25.106 30.541 29.722 21.057 39.082 C 9.412 50.575 5.766 57.959 3.057 74.082 C 0.69 88.172 0.333 96.296 0.557 110.582 C 0.557 198.582 -2.443 197.082 75.057 200.582 C 97.348 198.865 112.345 192.839 126.557 175.582 C 140.557 158.583 141.885 132.518 142.057 103.582 C 142.173 84.031 140.645 70.257 136.057 54.083 C 131.469 37.908 117.41 6.659 104.057 2.081 C 86.557 -3.918 67.154 8.408 51.557 18.082 Z',
  convertedPath: '',
  convertedPoints: null,
  points: [
    { type: IDataLineType.M, x: 51.557, y: 18.082 },
    { type: IDataLineType.C, x1: 40.233, y1: 25.106, x2: 30.541, y2: 29.722, x: 21.057, y: 39.082 },
    { type: IDataLineType.C, x1: 9.412, y1: 50.575, x2: 5.766, y2: 57.959, x: 3.057, y: 74.082 },
    { type: IDataLineType.C, x1: 0.69, y1: 88.172, x2: 0.333, y2: 96.296, x: 0.557, y: 110.582 },
    { type: IDataLineType.C, x1: 0.557, y1: 198.582, x2: -2.443, y2: 197.082, x: 75.057, y: 200.582 },
    { type: IDataLineType.C, x1: 97.348, y1: 198.865, x2: 112.345, y2: 192.839, x: 126.557, y: 175.582 },
    { type: IDataLineType.C, x1: 140.557, y1: 158.583, x2: 141.885, y2: 132.518, x: 142.057, y: 103.582 },
    { type: IDataLineType.C, x1: 142.173, y1: 84.031, x2: 140.645, y2: 70.257, x: 136.057, y: 54.083 },
    { type: IDataLineType.C, x1: 131.469, y1: 37.908, x2: 117.41, y2: 6.659, x: 104.057, y: 2.081 },
    { type: IDataLineType.C, x1: 86.557, y1: -3.918, x2: 67.154, y2: 8.408, x: 51.557, y: 18.082, end: 'Z' },
  ],
};

export const LEFT_CENTRAL: ITeethDataObject = {
  type: SelectedTeethType.LEFT_CENTRAL,
  viewBoxX: 203.5,
  viewBoxY: 233,
  defaultPath: 'M 58.244 231.742 C 7.244 224.242 0.744 227.742 0.744 175.242 C 0.744 175.242 -0.256 135.742 7.244 91.743 C 12.319 61.966 24.766 33.636 36.744 22.242 C 57.244 2.742 75.472 -0.534 102.244 0.743 C 132.256 2.174 151.476 12.062 171.744 34.242 C 180.425 43.742 189.328 57.863 195.244 76.243 C 200.27 91.858 202.744 112.838 202.744 129.242 C 202.744 146.742 202.744 165.242 202.244 187.742 C 201.633 215.242 202.744 225.742 169.244 229.242 C 150.748 231.174 133.777 231.423 113.744 231.595 C 97.978 231.731 93.744 233.242 58.244 231.742 Z',
  convertedPath: '',
  convertedPoints: null,
  points: [
    { type: IDataLineType.M, x: 58.244, y: 231.742 },
    { type: IDataLineType.C, x1: 7.244, y1: 224.242, x2: 0.744, y2: 227.742, x: 0.744, y: 175.242 },
    { type: IDataLineType.C, x1: 0.744, y1: 175.242, x2: -0.256, y2: 135.742, x: 7.244, y: 91.743 },
    { type: IDataLineType.C, x1: 12.319, y1: 61.966, x2: 24.766, y2: 33.636, x: 36.744, y: 22.242 },
    { type: IDataLineType.C, x1: 57.244, y1: 2.742, x2: 75.472, y2: -0.534, x: 102.244, y: 0.743 },
    { type: IDataLineType.C, x1: 132.256, y1: 2.174, x2: 151.476, y2: 12.062, x: 171.744, y: 34.242 },
    { type: IDataLineType.C, x1: 180.425, y1: 43.742, x2: 189.328, y2: 57.863, x: 195.244, y: 76.243 },
    { type: IDataLineType.C, x1: 200.27, y1: 91.858, x2: 202.744, y2: 112.838, x: 202.744, y: 129.242 },
    { type: IDataLineType.C, x1: 202.744, y1: 146.742, x2: 202.744, y2: 165.242, x: 202.244, y: 187.742 },
    { type: IDataLineType.C, x1: 201.633, y1: 215.242, x2: 202.744, y2: 225.742, x: 169.244, y: 229.242 },
    { type: IDataLineType.C, x1: 150.748, y1: 231.174, x2: 133.777, y2: 231.423, x: 113.744, y: 231.595 },
    { type: IDataLineType.C, x1: 97.978, y1: 231.731, x2: 93.744, y2: 233.242, x: 58.244, y: 231.742, end: 'Z' },
  ],
};

export const RIGHT_CENTRAL: ITeethDataObject = {
  type: SelectedTeethType.RIGHT_CENTRAL,
  viewBoxX: 202.5,
  viewBoxY: 233.5,
  defaultPath: 'M 56.031 230.742 C 74.531 232.742 125.031 233.742 160.531 230.742 C 196.031 227.742 201.531 216.242 201.531 182.242 C 201.531 148.242 203.657 135.742 196.157 91.743 C 191.081 61.966 178.635 33.636 166.656 22.242 C 146.156 2.742 127.929 -0.534 101.156 0.743 C 71.145 2.174 51.924 12.062 31.657 34.242 C 22.976 43.742 14.072 57.863 8.157 76.243 C 3.131 91.858 0.486 112.839 0.656 129.242 C 1.688 228.242 -9.587 223.648 56.031 230.742 Z',
  convertedPath: '',
  convertedPoints: null,
  points: [
    { type: IDataLineType.M, x: 56.031, y: 230.742 },
    { type: IDataLineType.C, x1: 74.531, y1: 232.742, x2: 125.031, y2: 233.742, x: 160.531, y: 230.742 },
    { type: IDataLineType.C, x1: 196.031, y1: 227.742, x2: 201.531, y2: 216.242, x: 201.531, y: 182.242 },
    { type: IDataLineType.C, x1: 201.531, y1: 148.242, x2: 203.657, y2: 135.742, x: 196.157, y: 91.743 },
    { type: IDataLineType.C, x1: 191.081, y1: 61.966, x2: 178.635, y2: 33.636, x: 166.656, y: 22.242 },
    { type: IDataLineType.C, x1: 146.156, y1: 2.742, x2: 127.929, y2: -0.534, x: 101.156, y: 0.743 },
    { type: IDataLineType.C, x1: 71.145, y1: 2.174, x2: 51.924, y2: 12.062, x: 31.657, y: 34.242 },
    { type: IDataLineType.C, x1: 22.976, y1: 43.742, x2: 14.072, y2: 57.863, x: 8.157, y: 76.243 },
    { type: IDataLineType.C, x1: 3.131, y1: 91.858, x2: 0.486, y2: 112.839, x: 0.656, y: 129.242 },
    { type: IDataLineType.C, x1: 1.688, y1: 228.242, x2: -9.587, y2: 223.648, x: 56.031, y: 230.742, end: 'Z' },
  ],
};
