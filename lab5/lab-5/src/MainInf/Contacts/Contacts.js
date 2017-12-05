import React, { Component } from 'react';
// import './IconPlusText.css';
import Icon from '../Icon/Icon';
import Text from '../Icon/Text';

class Contacts extends Component {
  render() {
    return (
      <div className="Contacts">
        <Icon icon={this.props.icon}/>
        <Text text={this.props.href} text={this.props.text}/>
{/* 
        <Icon icon="map-marker"/>
        <Text text="London, UK"/>

        <Icon icon="envelope-o"/>
        <Text href="kudato.com" text="Dan Abraham"/>

        <Icon icon="link"/>
        <Text href="tudato.com" text="twitter.com"/> */}
      </div>
    );
  }
}

export default Contacts; 