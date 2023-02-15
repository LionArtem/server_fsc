import React from 'react';
import ChargeYardCard from './ChargeYardCard';

import {
  navigationNodeScatter,
  navigationСrusher,
  navigationGPM,
  navigationСonveyor,
} from '../../../utils/constants';

import Node from './NodeScatter/Node';

function ChargeYard() {
  return (
    <>
      <h1 className="header-department">Шихтовый двор:</h1>
      <section className="navigation navigation__cards">
        <ChargeYardCard title={'Узел расссева'}>
          {navigationNodeScatter.map((data, i) => (
            <Node key={i} title={data.title} link={data.link} />
          ))}
        </ChargeYardCard>
        <ChargeYardCard title={'ГПМ'}>
          {navigationGPM.map((data, i) => (
            <Node key={i} title={data} link={'/'} />
          ))}
        </ChargeYardCard>
        <ChargeYardCard title={'Дробилки'}>
          {navigationСrusher.map((data, i) => (
            <Node key={i} title={data} link={'/'} />
          ))}
        </ChargeYardCard>
        <ChargeYardCard title={'Конвеера'}>
          {navigationСonveyor.map((data, i) => (
            <Node key={i} title={data} link={'/'} />
          ))}
        </ChargeYardCard>
      </section>
    </>
  );
}

export default ChargeYard;
