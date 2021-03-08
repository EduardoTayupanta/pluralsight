import React, { Component } from 'react';
import './App.css';

const testData = [
  {
    name: 'Dan Abramov',
    avatar_url: 'https://avatars0.githubusercontent.com/u/810438?v=4',
    company: '@facebook',
  },
  {
    name: 'Sophie Alpert',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6820?v=4',
    company: 'Humu',
  },
  {
    name: 'Sebastian Markbåge',
    avatar_url: 'https://avatars2.githubusercontent.com/u/63648?v=4',
    company: 'Facebook',
  },
];

const CardList = (props) => {
  return (
    <div>
      <Card />
    </div>
  );
};

class Card extends Component {
  render() {
    const profile = testData[0];

    return (
      <div className="github-profile">
        <img src={profile.avatar_url} alt="img" />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

class Example6 extends Component {
  render() {
    return (
      <div className="header">
        {this.props.title}
        <CardList />
      </div>
    );
  }
}

export default Example6;
