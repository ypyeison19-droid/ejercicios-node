import test from "node:test";
import assert from "node:assert";

import {
  sumar,
  restar,
  multiplicar,
  esPar,
  promedio
} from "../src/app.js";

test("sumar", () => {
  assert.strictEqual(sumar(2, 3), 5);
});

test("restar", () => {
  assert.strictEqual(restar(10, 4), 6);
});

test("multiplicar", () => {
  assert.strictEqual(multiplicar(3, 4), 12);
});

test("esPar", () => {
  assert.strictEqual(esPar(8), true);
});

test("promedio", () => {
  assert.strictEqual(promedio(4, 5, 6), 5);
});