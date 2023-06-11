import { createAppAsyncThunk } from '@/store/actions/index';
import {
  TabulationControls,
  TabulationResults,
} from '@/store/slices/tabulationSlice';
import { evaluationWorkerInstance } from '@/webWorkers/evaluation/instance';

export const reevaluateFunc = createAppAsyncThunk<
  TabulationResults,
  TabulationControls
>('tabulation/reevaluateFunc', async (newControls) =>
  evaluationWorkerInstance.evaluateFunctionResultsSW(newControls),
);
