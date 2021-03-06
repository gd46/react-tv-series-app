import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const SeriesListItem = ({ series }) => (
  <Link to={`/series/${series.show.id}`}>
    <li>
      {series.show.name}
    </li>
  </Link>
);

const SeriesList = (props) => {
  return (
    <div>
      <ul className="series-list">
        {props.list.map(series => (
          <SeriesListItem key={series.show.id} series={series} />
        ))}
      </ul>
    </div>
  )
}

export default SeriesList;
