# Pomodoro Timer

A simple Pomodoro Timer built with React, TypeScript, and Vite.

The application helps users organize focused work sessions and breaks using the Pomodoro technique.

## Features

- 25-minute focus sessions
- 5-minute short breaks
- 15-minute long breaks
- Automatic transition between focus and break sessions
- Start, pause, and reset controls
- Session type indicator
- Remaining time display
- Completed focus session counter
- Visual progress indicator
- Responsive layout

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- Oxlint

## Project Structure

```text
pomodoro-timer/
├── public/
├── src/
│   ├── components/
│   │   ├── Timer.css
│   │   └── Timer.tsx
│   ├── hooks/
│   │   └── usePomodoroTimer.ts
│   ├── types/
│   │   └── pomodoro.ts
│   ├── App.css
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone <repository-url>
cd pomodoro-timer
```

Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at the local URL displayed by Vite.

## Available Scripts

### Start the development server

```bash
npm run dev
```

### Build the application

```bash
npm run build
```

### Run linting

```bash
npm run lint
```

### Preview the production build

```bash
npm run preview
```

## How It Works

The timer follows the standard Pomodoro cycle:

1. Start a focus session.
2. Work until the focus timer reaches zero.
3. Take a short break.
4. Start another focus session.
5. After several completed focus sessions, take a longer break.
6. Continue the cycle.

The timer state and session transitions are managed by the `usePomodoroTimer` custom hook.

## Main Components

### `Timer`

The `Timer` component is responsible for displaying and controlling the timer interface.

It provides controls for:

- Starting the timer
- Pausing the timer
- Resetting the current session

It also displays the current session type, remaining time, and completed focus sessions.

### `usePomodoroTimer`

The `usePomodoroTimer` hook contains the timer logic and state management.

It handles:

- Countdown updates
- Session transitions
- Focus session tracking
- Short break transitions
- Long break transitions
- Timer controls
- Progress calculation

### `pomodoro.ts`

The Pomodoro type definitions are kept separately to provide type safety across the timer implementation.

## Pomodoro Configuration

The timer uses the following default durations:

| Session | Duration |
|---|---:|
| Focus | 25 minutes |
| Short Break | 5 minutes |
| Long Break | 15 minutes |

The timer automatically switches to the appropriate session when the current countdown reaches zero.

## Roadmap Project

This project was created as part of the roadmap.sh **Pomodoro Timer** project.

Project requirements:

https://roadmap.sh/projects/pomodoro-timer

## Code Quality

The project uses TypeScript for static type checking and Oxlint for code quality.

Before committing changes, run:

```bash
npm run lint
npm run build
```

## License

This project was created for educational purposes as part of a roadmap.sh project.