export interface Task {
  id: number | string;
  text: string;
  day: string;
  reminder: boolean;
}

export type Tasks = Task[];
