export interface Exercise {
  _id: string;
  name: string;
  sets: string;
  reps: string;
  weight: string;
}

export interface Workout {
  _id: string;
  name: string;
  exercises: Exercise[];
  progress?: number;
}