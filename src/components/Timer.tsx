import { usePomodoroTimer } from '../hooks/usePomodoroTimer';
import type { SessionType } from '../types/pomodoro';
import './Timer.css';

const SESSION_LABELS: Record<SessionType, string> = {
  work: 'Work',
  shortBreak: 'Short Break',
  longBreak: 'Long Break',
};

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
    .toString()
    .padStart(2, '0')}`;
};

function Timer() {
  const {
    sessionType,
    remainingSeconds,
    isRunning,
    completedWorkSessions,
    start,
    pause,
    reset,
  } = usePomodoroTimer();

  const handlePrimaryAction = () => {
    if (isRunning) {
      pause();
      return;
    }

    start();
  };

  return (
    <section className="timer" aria-labelledby="timer-title">
      <h1 id="timer-title">Pomodoro Timer</h1>

      <p className="timer__session" aria-live="polite">
        {SESSION_LABELS[sessionType]}
      </p>

      <p
        className="timer__display"
        aria-label={`${Math.floor(remainingSeconds / 60)} minutes and ${
          remainingSeconds % 60
        } seconds remaining`}
      >
        {formatTime(remainingSeconds)}
      </p>

      <div className="timer__controls">
        <button type="button" onClick={handlePrimaryAction}>
          {isRunning ? 'Pause' : 'Start'}
        </button>

        <button type="button" onClick={reset}>
          Reset
        </button>
      </div>

      <p className="timer__sessions" aria-live="polite">
        Work sessions completed: {completedWorkSessions}
      </p>
    </section>
  );
}

export default Timer;