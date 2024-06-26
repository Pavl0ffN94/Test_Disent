import {memo} from 'react';
import styled from 'styled-components';
import {Country} from '../types/country';
import {NavigateFunction} from 'react-router-dom';

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoTitle = styled.h1`
  margin: 0;
  font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  line-height: 1.8;
  font-size: large;
  font-weight: 500;

  & > b {
    font-weight: var(--fw-bold);
  }
`;

interface InfoProps extends Country {
  push: NavigateFunction;
}
const InfoImpl = (props: InfoProps) => {
  const {name, flags, capital, population, region, subregion} = props;

  return (
    <Wrapper>
      <InfoImage src={flags.png} alt='flag' />

      <div>
        <InfoTitle>{name.official}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem>
              <b>Population:</b> {population}
            </ListItem>
            <ListItem>
              <b>Region:</b> {region}
            </ListItem>
            <ListItem>
              <b>Sub Region:</b> {subregion}
            </ListItem>
            <ListItem>
              <b>Capital:</b> {capital}
            </ListItem>
          </List>
          <List></List>
        </ListGroup>
      </div>
    </Wrapper>
  );
};

export const Info = memo(InfoImpl);
