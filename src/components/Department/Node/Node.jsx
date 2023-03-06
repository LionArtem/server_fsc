import React from 'react';
import Job from './Job';
import { Link } from 'react-router-dom';

export default function Node({ titleNode, job, link }) {
  return (
    <section className="job-description navigation">
      <h2 className="job-description__titl ">{titleNode}</h2>
      <div className="job-description__conteiner">
        <Link className="navigation__list-links" to={link}>
          <Job job={job} />
        </Link>
      </div>
    </section>
  );
}
