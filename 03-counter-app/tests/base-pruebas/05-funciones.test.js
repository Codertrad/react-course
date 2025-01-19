import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

/* eslint-disable no-undef */
describe("Pruebas en 05-funciones", () => {
	test("getUser debe de retornar un objeto", () => {
		const testUser = {
			uid: "ABC123",
			username: "El_Papi1502",
		};

		const user = getUser();

		expect(testUser).toStrictEqual(user);
	});

	test("getUsuario activo debe retornar un objeto", () => {
		const name = "Julian";
		const testUsuarioActivo = {
			uid: "ABC567",
			username: name,
		};

		const usuarioActivo = getUsuarioActivo(name);

		expect(testUsuarioActivo).toStrictEqual(usuarioActivo);
	});
});
