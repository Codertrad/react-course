import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One Punch']);

	const onAddCategory = (newCategory) => {
		//Valida si ya esta la categoria para que no se repita
		if (categories.includes(newCategory)) return;

		setCategories([newCategory, ...categories]);
		// setCategories( cat => ['valorant', ...cat])
	};

	return (
		<>
			<h1>Gift Expert App</h1>

			<AddCategory
				//setCategories={setCategories}
				onNewCategory={(e) => onAddCategory(e)}
			/>

			{categories.map((category) => (
				<GifGrid key={category} category={category} />
			))}
		</>
	);
};
