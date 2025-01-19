/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */

test("Esta prueba no debe de fallar", () => {
  if (0 === 1) {
    throw new Error("No se puede dividir entre cero");
  }
});
