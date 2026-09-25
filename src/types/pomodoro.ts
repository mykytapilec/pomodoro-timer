export type SessionType = 'work' | 'shortBreak' | 'longBreak';

export interface TimerConfig {
  workDuration: number;
  shortBreakDuration: number;
  longBreakDuration: number;
}

export interface PomodoroTimerState {
  sessionType: SessionType;
  remainingSeconds: number;
  isRunning: boolean;
  completedWorkSessions: number;
}