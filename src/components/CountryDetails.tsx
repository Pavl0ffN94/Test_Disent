import {memo} from 'react';

import {NavigateFunction} from 'react-router-dom';
import {Info} from './Info';
import {useGetOneCountriQuery} from '../redux';

interface CountryDetailsProps {
  navigate: NavigateFunction;
  name?: string;
}

const CountryDetailsImpl = ({name = '', navigate}: CountryDetailsProps) => {
  const {data, status, error} = useGetOneCountriQuery(name);
  const currentCountry = data ? data[0] : {};
  console.log(data);

  return (
    <>
      {status === 'pending' && <h2>Loading...</h2>}
      {status === 'rejected' && <h2> Failed to load</h2>}
      {error && (
        <>
          <span>{error.status}</span>
          <span>{error.error}</span>
        </>
      )}
      {status === 'fulfilled' && <Info push={navigate} {...currentCountry} />}
    </>
  );
};

export const CountryDetails = memo(CountryDetailsImpl);
