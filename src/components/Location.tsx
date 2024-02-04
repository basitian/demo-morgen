'use client';
import React from 'react';
import { useGeolocation } from '@/hooks/useGeolocation';

const Location = () => {
  const locationState = useGeolocation({
    timeout: 10000,
  });

  if (locationState.loading) {
    return <p>loading... (you may need to enable permissions)</p>;
  }

  if (locationState.error) {
    return <p>Error {JSON.stringify(locationState.error)}</p>;
  }
  return <div>{JSON.stringify(locationState)}</div>;
};

export default Location;
