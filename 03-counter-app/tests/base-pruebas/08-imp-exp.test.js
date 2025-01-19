import {
	getHeroeById,
	getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp';

/* eslint-disable no-undef */
describe('Pruebas en 08-imp-exp', () => {
	test('getHeroeById debe retornar un heroe por ID', () => {
		const id = 1;
		const hero = getHeroeById(id);

		expect(hero).toStrictEqual({ id: 1, name: 'Batman', owner: 'DC' });
	});

	test('getHeroeById debe retornar undefined si no existe', () => {
		const id = 100;
		const hero = getHeroeById(id);

		expect(hero).toBe(undefined);
		//Undefined is a falsy value, in this case both test are the same
		expect(hero).toBeFalsy();
	});

	//Homework
	test('getHeroesByOwner debe retornar arr con DC Heroes, length === 3, Debe ser el mismo arr', () => {
		//Arr with DC Heroes
		const heroesFilered = getHeroesByOwner('DC');

		//Length === 3
		expect(3).toBe(heroesFilered.length);

		//toEqual to fileteredArr
		expect(heroesFilered).toEqual([
			{ id: 1, name: 'Batman', owner: 'DC' },
			{ id: 3, name: 'Superman', owner: 'DC' },
			{ id: 4, name: 'Flash', owner: 'DC' },
		]);
	});

	test('getHeroesByOwner debe retornar arr con Marvel Heroes, length === 2', () => {
		//Return arr with Marvel Heroes
		const heroesFiltered = getHeroesByOwner('Marvel');
		//Length === 2
		expect(2).toBe(heroesFiltered.length);

		//toEqual to fileredArr
		expect(heroesFiltered).toEqual([
			{ id: 2, name: 'Spiderman', owner: 'Marvel' },
			{ id: 5, name: 'Wolverine', owner: 'Marvel' },
		]);
	});
});
