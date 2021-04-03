import { ActionType } from '../action-types';
import { Middleware } from './middleware';
import bundle from '../../bundler';

let timer: NodeJS.Timeout;

export const bundlerMiddleware: Middleware = ({ getState, dispatch }) => (next) => (action) => {
  next(action);
  if (action.type !== ActionType.UPDATE_CELL) {
    return;
  }
  const { cells } = getState();
  const cell = cells?.data[action.payload.id];
  if (cell && cell.type === 'text') {
    return;
  }

  clearTimeout(timer);
  timer = setTimeout(async () => {
    const result = await bundle(action.payload.content);
    dispatch({
      type: ActionType.BUNDLE_CREATED,
      payload: {
        cellID: action.payload.id,
        bundle: result,
      },
    });
  }, 750);
};
