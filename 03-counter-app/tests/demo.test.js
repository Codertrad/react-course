/* eslint-disable no-undef */

describe("Pruebas en <DemoComponent />", () => {
	test("Esta prueba no debe de fallar", () => {
		// Inicializacion
		const message1 = "Hola Mundo";

		// Estimulo o evaluacion
		const message2 = message1.trim();

		//Observar el comportamiento
		expect(message1).toBe(message2);
	});
});
