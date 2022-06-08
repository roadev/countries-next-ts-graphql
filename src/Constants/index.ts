export interface FilterByOption {
  key: string;
  value: string;
  label: string;
}

export const filterByOptions: FilterByOption[] = [
  {
    key: 'currencies',
    value: 'currencies',
    label: 'Monedas',
  },
  {
    key: 'continents',
    value: 'continents',
    label: 'Continentes',
  },
];
