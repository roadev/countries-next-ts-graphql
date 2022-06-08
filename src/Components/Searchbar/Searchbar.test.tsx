import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Searchbar from './';

afterEach(() => cleanup);

describe('search field', () => {
  test('renders search field input', () => {
    //   const { container, getByText } = render(<Searchbar />);
    const { getByLabelText } = render(<Searchbar />);
    expect(getByLabelText('Filtra país')).toBeInTheDocument();
    //   expect(container.firstChild).toMatchInlineSnapshot(`
    //     <h1>Hello, World!</h1>
    //   `);
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
    fireEvent.change(input, { target: { value: 'South America' } });
    expect(input.value).toBe('South America');
  });
});
