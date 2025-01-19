import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

/* eslint-disable no-undef */
describe('Pruebas en 09-promesas', () => {
	test('getHeroesByIdAsync debe de retornar 1 Heroe', (done) => {
		const id = 1;

		getHeroeByIdAsync(id).then((hero) => {
			expect(hero).toEqual({
				id: 1,
				name: 'Batman',
				owner: 'DC',
			});

			done();
		});
	});

	test('getHeroesByIdAsync debe de retornar un error si heroe no existe', (done) => {
		const id = 100;

		getHeroeByIdAsync(id).catch((err) => {
			expect(err).toBe('No se pudo encontrar el héroe ' + id);

			done();
		});
	});
});
