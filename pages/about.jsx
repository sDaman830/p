import React from 'react';
import Ball from './../components/Balls';

const AboutPage = ({ title, imageUrl }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', maxWidth: '800px', margin: '0 auto', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ flex: 1 }}>
        <h3>{title}</h3>
        <p >
          Hi there! I'm Daman, a computer science enthusiast currently pursuing my B.tech from NIT J. I'm a knight(top 5%) @ LeetCode and won several Hackathons. 
          I love exploring the realms of web development, diving into the world of DevOps, or crafting with GoLang. When I'm not in front of the screen, I love to play basketball
          Besides that, I have an unwavering love for music that adds rhythm and melody to my life's playlist.
        </p>
      </div>
      <div style={{ width: '1px', backgroundColor: '#ccc', height: '100%', margin: '0 20px' }}></div> {/* Partition Line */}
      <div style={{ flex: 1, textAlign: 'center', borderLeft: '2px solid yellow', paddingLeft : '20px' }}>
        <img src={imageUrl} alt="Profile" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} />
        <Ball icon="https://i.imgur.com/3v9s18F.png" />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      title: 'About Me',
      imageUrl: '/profile-pic.jpeg', 
    },
  };
}

export default AboutPage;