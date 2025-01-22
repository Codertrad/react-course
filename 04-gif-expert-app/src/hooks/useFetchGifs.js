/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getimagesGifs = async () => {
		const gifsImages = await getGifs(category);
		setImages(gifsImages);
		setIsLoading(false);
	};

	useEffect(() => {
		getimagesGifs();
	}, []);

	return {
		images,
		isLoading,
	};
};
