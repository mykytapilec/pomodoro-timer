import { useCallback, useEffect, useState } from 'react';
import type {
  PomodoroTimerState,
  SessionType,
  TimerConfig,
} from '../types/pomodoro';

const DEFAULT_CONFIG: TimerConfig = {
  workDuration: 25 * 60,
  shortBreakDuration: 5 * 60,
  longBreakDuration: 15 * 60,
};

const getDuration = (
  sessionType: SessionType,
  config: TimerConfig,
): number => {
  switch (sessionType) {
    case 'shortBreak':
      return config.shortBreakDuration;
    case 'longBreak':
      return config.longBreakDuration;
    case 'work':
    default:
      return config.workDuration;
  }
};

const getNextSessionType = (
  sessionType: SessionType,
  completedWorkSessions: number,
): SessionType => {
  if (sessionType !== 'work') {
    return 'work';
  }

  return completedWorkSessions % 4 === 0 ? 'longBreak' : 'shortBreak';
};

export const usePomodoroTimer = (
  config: TimerConfig = DEFAULT_CONFIG,
): PomodoroTimerState & {
  start: () => void;
  pause: () => void;
  reset: () => void;
} => {
  const [state, setState] = useState<PomodoroTimerState>({
    sessionType: 'work',
    remainingSeconds: config.workDuration,
    isRunning: false,
    completedWorkSessions: 0,
  });

  const start = useCallback(() => {
    setState((currentState) => ({
      ...currentState,
      isRunning: true,
    }));
  }, []);

  const pause = useCallback(() => {
    setState((currentState) => ({
      ...currentState,
      isRunning: false,
    }));
  }, []);

  const reset = useCallback(() => {
    setState((currentState) => ({
      ...currentState,
      remainingSeconds: getDuration(currentState.sessionType, config),
      isRunning: false,
    }));
  }, [config]);

  useEffect(() => {
    if (!state.isRunning) {
      return;
    }

    const timerId = window.setInterval(() => {
      setState((currentState) => {
        if (currentState.remainingSeconds > 1) {
          return {
            ...currentState,
            remainingSeconds: currentState.remainingSeconds - 1,
          };
        }

        const completedWorkSessions =
          currentState.sessionType === 'work'
            ? currentState.completedWorkSessions + 1
            : currentState.completedWorkSessions;

        const nextSessionType = getNextSessionType(
          currentState.sessionType,
          completedWorkSessions,
        );

        return {
          sessionType: nextSessionType,
          remainingSeconds: getDuration(nextSessionType, config),
          isRunning: false,
          completedWorkSessions,
        };
      });
    }, 1000);

    return () => {
      window.clearInterval(timerId);
    };
  }, [config, state.isRunning]);

  return {
    ...state,
    start,
    pause,
    reset,
  };
};