export interface FilterByOption {
  key: string;
  value: string;
  label: string;
}

export const filterByOptions: FilterByOption[] = [
  {
    key: 'currency',
    value: 'currency',
    label: 'Moneda',
  },
  {
    key: 'continent',
    value: 'continent',
    label: 'Continente',
  },
];
