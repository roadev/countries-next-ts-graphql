import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Searchbar from './';

afterEach(() => cleanup);

describe('search field', () => {
  test('renders search field input', () => {
    const { getByLabelText } = render(<Searchbar />);
    expect(getByLabelText('Filtra país')).toBeInTheDocument();
  });

  test('It should allow to type a currency in words', () => {
    const component = render(<Searchbar />);
    const input = component.getByTestId('searchBar').querySelector('input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'COP' } });
    expect(input.value).toBe('COP');
  });

  test('It should allow to type a continent', () => {
    const component = render(<Searchbar />);
    const input = component.getByTestId('searchBar').querySelector('input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'SA' } });
    expect(input.value).toBe('SA');
  });
});
