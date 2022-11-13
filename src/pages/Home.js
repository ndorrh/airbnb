import React from 'react';
import Banner from '../features/banner/Banner';
import Card from '../features/card/Card';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Banner />
      <section className="cards__section">
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Comfortableprivate places, with room for friends or family."
        />
      </section>
    </div>
  );
}

export default Home;
