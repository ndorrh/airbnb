import React from 'react';
import Banner from '../features/banner/Banner';
import Card from '../features/card/Card';
import './Home.css';
import rooms from '../app/store';

function Home() {
  return (
    <div className="home">
      <Banner />
      <section className="cards__section">
        {
          rooms.map((room) => <Card props={room} key={room.id} />)
        }
      </section>
    </div>
  );
}

export default Home;
