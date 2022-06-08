import * as React from 'react';
import { useRouter } from 'next/router';

export default function CountryDetailTable() {
  const router = useRouter();
  console.log('router', router.query);
}
