export const ROBOT_PACE = { walk: 72, run: 144 } as const;
export const ROBOT_ACTION_MS = { wave: 1600, breathe: 1500, weld: 1700, wipe: 1400 } as const;

export type RobotMode = "idle" | "walk" | "run" | "breathe" | "wave" | "weld" | "wipe";
export type RobotMotion = {
  y: number;
  mode: RobotMode;
  direction: "up" | "down";
  until: number;
  urgent: boolean;
  pendingRepair: boolean;
};

export function createRobotMotion(y: number): RobotMotion {
  return { y, mode: "idle", direction: "down", until: 0, urgent: false, pendingRepair: false };
}

export function greetRobot(state: RobotMotion, now: number): RobotMotion {
  return { ...state, mode: "wave", until: now + ROBOT_ACTION_MS.wave, pendingRepair: false };
}

export function requestRobotRepair(state: RobotMotion): RobotMotion {
  return { ...state, mode: "idle", until: 0, pendingRepair: true };
}

function startAction(state: RobotMotion, mode: keyof typeof ROBOT_ACTION_MS, now: number): RobotMotion {
  return { ...state, mode, until: now + ROBOT_ACTION_MS[mode] };
}

export function stepRobotMotion(state: RobotMotion, target: number, now: number, seconds: number, repairReady = true): RobotMotion {
  if (state.until > now) return state;
  if (state.mode === "weld") return startAction(state, "wipe", now);
  if (state.mode === "wipe") return { ...state, mode: "idle", until: 0, pendingRepair: false, urgent: false };

  const distance = target - state.y;
  if (Math.abs(distance) > 1) {
    const mode = state.urgent || Math.abs(distance) > 110 ? "run" : "walk";
    const step = Math.min(Math.abs(distance), ROBOT_PACE[mode] * Math.max(0, seconds));
    return {
      ...state,
      y: state.y + Math.sign(distance) * step,
      mode,
      direction: distance < 0 ? "up" : "down",
      until: 0,
      urgent: mode === "run"
    };
  }

  const arrived = { ...state, y: target, until: 0 };
  if (state.mode === "run") return startAction({ ...arrived, urgent: false }, "breathe", now);
  if (state.pendingRepair && repairReady) return startAction(arrived, "weld", now);
  return { ...arrived, mode: "idle", urgent: false };
}
