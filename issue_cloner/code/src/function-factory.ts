import clone_issue from './functions/cloneIssue';

export const functionFactory = {
  // Add your functions here
  //on_work_creation,
  clone_issue,
} as const;

export type FunctionFactoryType = keyof typeof functionFactory;
