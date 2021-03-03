export enum ActionTypes {
  PATH = 'path',
  Q_CURVE = 'q_curve',
}

export enum SelectedTeethType {
  LEFT_CENTRAL = 'left_central',
  RIGHT_CENTRAL = 'right_central',
  LEFT_LATERAL = 'left_lateral',
  RIGHT_LATERAL = 'right_lateral',
  LEFT_CUSPID = 'left_cuspid',
  RIGHT_CUSPID = 'right_cuspid',
  LEFT_BICUSPID = 'left_first_bicuspid',
  RIGHT_BICUSPID = 'right_first_bicuspid',
}

export interface IPoint {
  x: number;
  y: number;
}

export interface IBreakPoint {
  x: number;
  y: number;
  id: number;
}

export const createSvgPoint = (container: any, e: any) => {
  const { clientX, clientY } = e;
  const pt = container.createSVGPoint();
  // pass event coordinates
  pt.x = clientX;
  pt.y = clientY;
  const svgP: IPoint = pt.matrixTransform(container.getScreenCTM().inverse());
  return svgP;
};
