import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';
import Intro from '../../components/Intro';

class Series extends Component {
  state = {
    series: [],
    seriesName: 'Vikings',
    isFetching: false
  }

  componentDidMount() {
    fetch('http://api.tvmaze.com/search/shows?q=Vikings')
      .then((response) => response.json())
      .then((json) => this.setState({ series: json}));
  }

  onSeriesInputChange = (event) => {
    this.setState({seriesName: event.target.value, isFetching: true});

    fetch(`http://api.tvmaze.com/search/shows?q=${event.target.value}`)
      .then((response) => response.json())
      .then((json) => this.setState({ series: json, isFetching: false }));
  }

  render() {
    const { series, seriesName, isFetching } = this.state;
    return (
      <div>
        <Intro message="Here you can find all of your favorite series"/>
        <div>
          <input value={seriesName} type="text" onChange={this.onSeriesInputChange} />
        </div>
        {
          !isFetching && seriesName.length === 0 && seriesName.trim() === ''
          &&
          <p>Please enter series into name input</p>
        }
        {
          !isFetching && series.length === 0 && seriesName !== ''
          &&
          <p>No TV series have been found with this name</p>
        }
        {
          isFetching && <Loader />
        }
        {
          !isFetching && <SeriesList list={series} />
        }
      </div>
    )
  }
}

export default Series;
