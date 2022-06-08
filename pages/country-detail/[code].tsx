import * as React from 'react';
import { useRouter } from 'next/router';

export default function CountryDetail() {
  const router = useRouter();
  console.log('router', router.query);
  return <div>test</div>;
}
