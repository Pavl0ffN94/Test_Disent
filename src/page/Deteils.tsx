import {useNavigate, useParams} from 'react-router-dom';
import {IoArrowBack} from 'react-icons/io5';

import {Button, CountryDetails} from '../components';

export const Details = () => {
  const navigate = useNavigate();
  const {name} = useParams();

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack />
        <span>Back</span>
      </Button>
      <CountryDetails name={name} navigate={navigate} />
    </div>
  );
};
