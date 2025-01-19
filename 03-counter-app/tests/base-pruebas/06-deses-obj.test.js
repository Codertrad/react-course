/* eslint-disable no-undef */
import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Pruebas en 06-deses-obj", () => {
	test("usContext debe retornar un objeto", () => {

        const clave = "codertrad"
        const age = 26

		const context = usContext({ clave: clave, edad: age });

		expect(context).toStrictEqual({
			nombreClave: clave,
			anios: age,
			latlng: {
				lat: 14.1232,
				lng: -12.3232,
			},
		});
	});
});
