/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en componente <CounterApp />', () => {
	const initialValue = 100;

	test('Debe hacer match con el snapshot', () => {
		const { container } = render(<CounterApp value={initialValue} />);
		expect(container).toMatchSnapshot();
	});

	test('Debe mostrar el valor inicial de 100', () => {
		render(<CounterApp value={initialValue} />);
		expect(screen.getByText(100)).toBeTruthy();
	});

	test('Debe de incrementar con el boton +1', () => {
		render(<CounterApp value={initialValue} />);
		fireEvent.click(screen.getByText('+1'));
		expect(screen.getByText('101')).toBeTruthy();
	});

	test('Debe decrementar con el boton -1', () => {
		render(<CounterApp value={initialValue} />);
		fireEvent.click(screen.getByText('-1'));
		expect(screen.getByText('99')).toBeTruthy();
	});

	test('Debe de funcionar el boton de reset', () => {
		render(<CounterApp value={initialValue} />);
		fireEvent.click(screen.getByText('+1'));
		fireEvent.click(screen.getByText('+1'));
		fireEvent.click(screen.getByText('+1'));
		fireEvent.click(screen.getByText('+1'));
		fireEvent.click(screen.getByText('+1'));
		fireEvent.click(screen.getByText('+1'));

		fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

		expect(screen.getByText(initialValue)).toBeTruthy();
	});
});
