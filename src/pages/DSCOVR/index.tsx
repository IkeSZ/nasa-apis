import React, { useEffect, useState } from 'react';
import { FiPlusSquare } from 'react-icons/fi';

import { Container, PlanetContainer } from './styles';

import Header from '../../components/Header';

import api from '../../services/api';

interface PlanetProps {
  identifier: string;
  image: string;
  date: string;

  centroid_coordinates: {
    lat: number;
    lon: number;
  };

  sun_j2000_position: {
    x: number;
    y: number;
    z: number;
  };

  lunar_j2000_position: {
    x: number;
    y: number;
    z: number;
  };

  dscovr_j2000_position: {
    x: number;
    y: number;
    z: number;
  };
}

const DSCOVR: React.FC = () => {
  const [planets, setPlanets] = useState<PlanetProps[]>([]);

  useEffect(() => {
    api
      .get('https://epic.gsfc.nasa.gov/api/natural')
      .then((response) => setPlanets(response.data));
  }, []);

  return (
    <Container>
      <Header headerTitle="This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft" />

      {planets.map((planet) => {
        const formattedDay = planet.date.slice(8, 10);
        const formattedMonth = planet.date.slice(5, 7);
        const formattedYear = planet.date.slice(0, 4);

        const planetImageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${formattedYear}/${formattedMonth}/${formattedDay}/png/${planet.image}.png`;

        return (
          <PlanetContainer key={planet.identifier}>
            <a href={planetImageUrl} target="_blank" rel="noreferrer">
              <img src={planetImageUrl} alt="Planet" />
            </a>

            <div>
              <p>
                <strong>Latitude:</strong> {planet.centroid_coordinates.lat}
              </p>

              <p>
                <strong>Longitude:</strong> {planet.centroid_coordinates.lon}
              </p>

              <p>
                <strong>Date:</strong> {planet.date}
              </p>
            </div>

            <div>
              <p>
                <strong>X-SUN:</strong> {planet.sun_j2000_position.x}
              </p>

              <p>
                <strong>Y-SUN:</strong> {planet.sun_j2000_position.y}
              </p>

              <p>
                <strong>Z-SUN:</strong> {planet.sun_j2000_position.z}
              </p>
            </div>

            <div>
              <p>
                <strong>X-MOON:</strong> {planet.lunar_j2000_position.x}
              </p>

              <p>
                <strong>Y-MOON:</strong> {planet.lunar_j2000_position.y}
              </p>

              <p>
                <strong>Z-MOON:</strong> {planet.lunar_j2000_position.z}
              </p>
            </div>

            <div>
              <p>
                <strong>DSCOVR-X:</strong> {planet.dscovr_j2000_position.x}
              </p>

              <p>
                <strong>DSCOVR-Y:</strong> {planet.dscovr_j2000_position.y}
              </p>

              <p>
                <strong>DSCOVR-Z:</strong> {planet.dscovr_j2000_position.z}
              </p>
            </div>
          </PlanetContainer>
        );
      })}

      <footer>
        <FiPlusSquare size={16} />
      </footer>
    </Container>
  );
};

export default DSCOVR;
