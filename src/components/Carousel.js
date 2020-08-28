import React from 'react';
import Carousel from 'react-images';

const images = [{ source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FkH-u9imlmnk%2Fhqdefault.jpg&f=1&nofb=1' }, { source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd1dd4ethwnlwo2.cloudfront.net%2Fwp-content%2Fuploads%2F2018%2F10%2F43547057_2191559784440266_1177029217713176510_n.jpg&f=1&nofb=1' }, {source: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FZwKuQ6_-adw%2Fmaxresdefault.jpg&f=1&nofb=1'}];

class Component extends React.Component {
  render() {
    return <Carousel views={images}/>
  }
}

export default Component