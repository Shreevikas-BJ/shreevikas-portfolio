import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";

const source = fs.readFileSync(new URL("../lib/robotMotion.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } });
const sandbox = { exports: {} };
vm.runInNewContext(compiled.outputText, sandbox);
const { ROBOT_PACE, ROBOT_ACTION_MS, createRobotMotion, greetRobot, requestRobotRepair, stepRobotMotion } = sandbox.exports;

for (const fps of [30, 60, 120]) {
  for (const mode of ["walk", "run"]) {
    let state = createRobotMotion(0);
    state.urgent = mode === "run";
    const target = mode === "run" ? 1000 : 100;
    for (let frame = 1; frame <= fps; frame++) state = stepRobotMotion(state, target, frame * 1000 / fps, 1 / fps);
    assert.ok(Math.abs(state.y - ROBOT_PACE[mode]) < 0.001, `${mode} must keep its fixed pace at ${fps} fps`);
  }
}

let state = createRobotMotion(200);
state.urgent = true;
state = stepRobotMotion(state, 0, 1000, 1);
assert.equal(state.y, 56);
assert.equal(state.direction, "up");
state = stepRobotMotion(createRobotMotion(0), 10, 1000, 1);
assert.equal(state.y, 10, "Never overshoot the target");
assert.equal(stepRobotMotion(createRobotMotion(0), 100, 1000, -1).y, 0);

state = createRobotMotion(0);
state.urgent = true;
state = stepRobotMotion(state, 144, 1000, 1);
assert.equal(state.mode, "run");
state = stepRobotMotion(state, 144, 1001, 0.016);
assert.equal(state.mode, "breathe");
assert.equal(stepRobotMotion(state, 144, 1001 + ROBOT_ACTION_MS.breathe - 1, 0.016).mode, "breathe");
assert.equal(stepRobotMotion(state, 144, 1001 + ROBOT_ACTION_MS.breathe, 0.016).mode, "idle");

state = greetRobot(createRobotMotion(0), 0);
assert.equal(state.mode, "wave");
assert.equal(stepRobotMotion(state, 100, ROBOT_ACTION_MS.wave - 1, 0.016).y, 0);
assert.equal(stepRobotMotion(state, 100, ROBOT_ACTION_MS.wave, 0.016).mode, "walk");

state = requestRobotRepair(createRobotMotion(0));
assert.equal(stepRobotMotion(state, 0, 0, 0.016, false).mode, "idle", "Wait until shortcut navigation settles before repairing");
assert.equal(stepRobotMotion(state, 100, 0, 0.016, false).mode, "walk", "Approach the destination while navigation settles");
state = stepRobotMotion(state, 0, 0, 0.016);
assert.equal(state.mode, "weld");
state = stepRobotMotion(state, 0, ROBOT_ACTION_MS.weld, 0.016);
assert.equal(state.mode, "wipe");
state = stepRobotMotion(state, 0, ROBOT_ACTION_MS.weld + ROBOT_ACTION_MS.wipe, 0.016);
assert.equal(state.mode, "idle");
assert.equal(state.pendingRepair, false);
assert.equal(requestRobotRepair(greetRobot(state, 10000)).mode, "idle", "A new shortcut replaces the prior gesture");

console.log("Robot motion: fixed paces, frame-rate independence, catch-up, breathing, waving and repair lifecycle PASS");
