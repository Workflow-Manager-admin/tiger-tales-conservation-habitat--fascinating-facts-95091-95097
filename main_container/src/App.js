import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import BlogSection from './components/BlogSection';
import TigerFactCard from './components/TigerFactCard';

function App() {
  const conservationContent = (
    <>
      <p>
        Tigers face unprecedented challenges in the wild. With fewer than 4,000 remaining globally, 
        conservation efforts are more critical than ever. Habitat loss, poaching, and human-wildlife 
        conflict have driven these magnificent creatures to the brink of extinction.
      </p>
      <p>
        International organizations work tirelessly to protect tiger populations through anti-poaching 
        patrols, habitat preservation, and community education programs. These initiatives aim to 
        secure a future where tigers can thrive once again in their natural environments.
      </p>
      <p>
        Recent successful conservation projects have seen tiger numbers increase in certain regions, 
        offering hope that with continued effort and global support, we can ensure these iconic 
        predators remain part of our planet's biodiversity.
      </p>
    </>
  );

  const habitatContent = (
    <>
      <p>
        Tigers inhabit a diverse range of environments across Asia, from the snowy taiga of the Russian 
        Far East to the tropical forests of Indonesia. Each subspecies has adapted to its unique habitat, 
        demonstrating the remarkable versatility of these big cats.
      </p>
      <p>
        The ideal tiger habitat includes dense vegetation for stalking prey, access to water sources, 
        and sufficient territory to support their hunting needs. An adult tiger may require up to 100 
        square kilometers of land to thrive in the wild.
      </p>
      <p>
        Unfortunately, human encroachment continues to fragment these vital habitats, creating isolated 
        tiger populations that struggle to maintain genetic diversity and find adequate resources.
      </p>
    </>
  );

  const tigerFacts = [
    {
      title: "Power & Speed",
      fact: "Tigers can leap over 6 meters and run at speeds of up to 65 km/h for short bursts.",
      icon: "⚡"
    },
    {
      title: "Unique Stripes",
      fact: "Each tiger's stripe pattern is unique like a fingerprint and even penetrates their skin.",
      icon: "👆"
    },
    {
      title: "Night Vision",
      fact: "Tigers have excellent night vision with 6x better light perception than humans.",
      icon: "👁️"
    },
    {
      title: "Powerful Bite",
      fact: "With a bite force of 1,050 psi, tigers have one of the strongest bites in the animal kingdom.",
      icon: "🦷"
    }
  ];

  return (
    <div className="app">
      <Navigation />

      <main>
        <Header />

        <BlogSection 
          id="conservation"
          title="Conservation Status"
          content={conservationContent}
          imageUrl="https://source.unsplash.com/random/600x400/?tiger,conservation"
          imageAlt="Tiger conservation efforts"
        />

        <BlogSection 
          id="habitat"
          title="Natural Habitat"
          content={habitatContent}
          imageUrl="https://source.unsplash.com/random/600x400/?tiger,jungle"
          imageAlt="Tiger in its natural habitat"
          reversed={true}
        />

        <section id="facts" className="facts-section">
          <div className="container">
            <h2 className="section-title centered">Fascinating Facts</h2>
            <div className="fact-cards">
              {tigerFacts.map((fact, index) => (
                <TigerFactCard
                  key={index}
                  title={fact.title}
                  fact={fact.fact}
                  icon={fact.icon}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="gallery-section">
          <div className="container">
            <h2 className="section-title centered">Tiger Gallery</h2>
            <div className="image-gallery">
              <div className="gallery-image">
                <img src="https://source.unsplash.com/random/600x400/?bengal,tiger" alt="Bengal Tiger" />
                <p>Bengal Tiger</p>
              </div>
              <div className="gallery-image">
                <img src="https://source.unsplash.com/random/600x400/?siberian,tiger" alt="Siberian Tiger" />
                <p>Siberian Tiger</p>
              </div>
              <div className="gallery-image">
                <img src="https://source.unsplash.com/random/600x400/?sumatran,tiger" alt="Sumatran Tiger" />
                <p>Sumatran Tiger</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Tiger Tales | A comprehensive blog about tiger conservation, habitat and facts</p>
            <div className="footer-links">
              <a href="#conservation">Conservation</a>
              <a href="#habitat">Habitat</a>
              <a href="#facts">Facts</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
