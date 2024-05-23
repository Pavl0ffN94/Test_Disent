import {FC, memo} from 'react';
import {useNavigate} from 'react-router-dom';
import {CountryInfo} from '../types/country';
import {useGetCountriesQuery} from '../redux';
import {Card, List} from '../components';

const HomePageImpl: FC = () => {
  const navigate = useNavigate();

  const {data, error, status} = useGetCountriesQuery();

  return (
    <>
      {error && <h2>Can't fetch data</h2>}
      {status === 'pending' && <h2>Loading...</h2>}

      {status === 'fulfilled' && (
        <List>
          {data.map(c => {
            const countryInfo: CountryInfo = {
              img: c.flags.png,
              name: c.name.common,
              info: [
                {
                  title: 'Population',
                  descrition: c.population.toLocaleString(),
                },
                {
                  title: 'Region',
                  descrition: c.region,
                },
                {
                  title: 'Capital',
                  descrition: c.capital,
                },
              ],
            };

            return (
              <Card
                key={c.flags.png}
                onClick={() => void navigate(`${c.name.common}`)}
                {...countryInfo}
              />
            );
          })}
        </List>
      )}
    </>
  );
};

export const HomePage = memo(HomePageImpl);
