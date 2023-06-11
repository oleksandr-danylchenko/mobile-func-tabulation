import { functionsOptions } from '@/fixtures/functions';
import {
  TabulationControls,
  TabulationResults,
} from '@/store/slices/tabulationSlice';

export const evaluateFunctionResults = (
  controls: TabulationControls,
  signal?: AbortSignal,
): TabulationResults => {
  const { funcKey, xStart, xEnd, step } = controls;
  const funcExecute = functionsOptions[funcKey]!.execute;

  const results: TabulationResults = {
    evaluatedAt: Date.now(),
    x: [],
    y: [],
  };
  for (let x = xStart; x <= xEnd; x += step) {
    if (signal?.aborted) break;

    results.x.push(x.toLocaleString('fullwide'));
    results.y.push(funcExecute(x).toLocaleString('fullwide'));
  }
  return results;
};
