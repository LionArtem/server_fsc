import React from 'react';

import { navigationList } from '.././utils/constants';
import NavigationListLinks from '.././components/NavigationListLinks';

function Home() {
  return (
    <section className="navigation">
      <nav>
        <ul className="navigation__list">
          {navigationList.map((data, i) => (
            <NavigationListLinks key={i} title={data.title} />
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default Home;
