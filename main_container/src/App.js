import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import BlogSection from './components/BlogSection';
import TigerFactCard from './components/TigerFactCard';

// PUBLIC_INTERFACE
function App() {
  const conservationContent = (
    <>
      <p>
        Tigers, majestic apex predators, are globally endangered. Fewer than 4,000 individuals remain in the wild, a stark decline from over 100,000 a century ago. This critical situation is driven by relentless habitat loss due to deforestation and agricultural expansion, widespread poaching for their valuable body parts used in traditional medicine, and escalating human-wildlife conflict as human populations encroach upon tiger territories.
      </p>
      <p>
        <strong>Key Threats:</strong>
        <ul>
          <li><strong>Habitat Destruction & Fragmentation:</strong> Roads, dams, and expanding settlements isolate tiger populations, reducing genetic diversity and prey availability.</li>
          <li><strong>Poaching & Illegal Wildlife Trade:</strong> A persistent demand for tiger skins, bones, and other derivatives fuels a lucrative black market.</li>
          <li><strong>Human-Wildlife Conflict:</strong> As natural habitats shrink, tigers may prey on livestock, leading to retaliatory killings by local communities.</li>
          <li><strong>Climate Change:</strong> Rising sea levels threaten mangrove habitats like the Sundarbans, home to a unique tiger population.</li>
        </ul>
      </p>
      <p>
        Dedicated international and local organizations are at the forefront of tiger conservation. Their multi-faceted strategies include strengthening anti-poaching patrols with advanced technology, restoring and protecting crucial tiger corridors, working with local communities to mitigate conflict and provide alternative livelihoods, and conducting vital research to monitor populations and understand their needs. Global initiatives like the Global Tiger Recovery Program aim to double tiger numbers by creating safer habitats and reducing threats.
      </p>
      <p>
        While the challenges are immense, there are beacons of hope. Countries like India and Nepal have demonstrated success in increasing their tiger populations through concerted conservation efforts, proving that with sustained commitment, political will, and global support, we can secure a future for these magnificent animals. Your awareness and support can make a difference.
      </p>
    </>
  );

  const habitatContent = (
    <>
      <p>
        Tigers are incredibly adaptable, inhabiting a wide array of ecosystems across Asia. From the frigid, snow-covered taiga forests of the Russian Far East (Amur tigers) to the steamy tropical rainforests of Sumatra (Sumatran tigers), and the mangrove swamps of the Sundarbans (Bengal tigers), each subspecies has uniquely evolved to thrive in its environment.
      </p>
      <p>
        <strong>Essential Habitat Features:</strong>
        <ul>
          <li><strong>Dense Vegetation Cover:</strong> Crucial for stalking and ambushing prey. Tigers rely on stealth and camouflage provided by tall grasses, shrubs, and trees.</li>
          <li><strong>Proximity to Water:</strong> Tigers are strong swimmers and enjoy water for cooling down, playing, and sometimes hunting. Rivers and waterholes are vital.</li>
          <li><strong>Abundant Prey Base:</strong> A healthy population of ungulates (deer, wild boar, etc.) is necessary to sustain tigers. An adult tiger requires a significant amount of food.</li>
          <li><strong>Sufficient Territory:</strong> Tigers are solitary and territorial. Males, in particular, require vast areas, sometimes up to 100 square kilometers or more, to roam and hunt.</li>
        </ul>
      </p>
      <p>
        The ongoing fragmentation and degradation of these habitats pose the most significant threat to tiger survival. Human activities, including logging, agriculture, and infrastructure development, shrink and isolate these wild spaces. This not only reduces the available area for tigers but also creates "islands" of habitat, leading to inbreeding and reduced genetic diversity, making populations more vulnerable to disease and environmental changes. Protecting large, interconnected landscapes is paramount for their long-term survival.
      </p>
    </>
  );
  
  const subspeciesContent = (
    <>
      <p>
        While often referred to as a single species, tigers (<em>Panthera tigris</em>) have several recognized subspecies, each adapted to its unique environment. Historically, nine subspecies were identified, but sadly, three (Bali, Javan, and Caspian tigers) have gone extinct in the last century.
      </p>
      <p>
        <strong>Surviving Tiger Subspecies:</strong>
        <ul>
          <li><strong>Bengal Tiger (<em>Panthera tigris tigris</em>):</strong> The most numerous subspecies, found primarily in India, Bangladesh, Nepal, Bhutan, and Myanmar. Inhabits diverse habitats including grasslands, tropical and subtropical rainforests, and mangroves.</li>
          <li><strong>Amur Tiger (Siberian Tiger) (<em>Panthera tigris altaica</em>):</strong> The largest tiger subspecies, adapted to the harsh, cold climate of the Russian Far East and parts of China. They have thicker fur and a paler coat.</li>
          <li><strong>Indochinese Tiger (<em>Panthera tigris corbetti</em>):</strong> Found in several Southeast Asian countries, including Thailand, Laos, Vietnam, Cambodia, and Myanmar. They are generally smaller and darker than Bengal tigers.</li>
          <li><strong>Malayan Tiger (<em>Panthera tigris jacksoni</em>):</strong> Found exclusively in the southern parts of the Malay Peninsula. Critically endangered, with a very small population.</li>
          <li><strong>Sumatran Tiger (<em>Panthera tigris sumatrae</em>):</strong> Found only on the Indonesian island of Sumatra. The smallest surviving tiger subspecies, adapted to dense tropical forests. Critically endangered.</li>
          <li><strong>South China Tiger (<em>Panthera tigris amoyensis</em>):</strong> Considered functionally extinct in the wild, with hopes resting on captive breeding programs and potential reintroduction. Historically found in southern China.</li>
        </ul>
      </p>
      <p>
      Each subspecies faces unique conservation challenges, from habitat loss specific to their region to varying degrees of poaching pressure. Understanding the distinctions and needs of each subspecies is crucial for targeted and effective conservation strategies.
      </p>
    </>
  );

  const behaviorContent = (
    <>
      <p>
        Tigers are fascinating creatures with complex behaviors, primarily shaped by their solitary and predatory nature. Understanding their behavior is key to their conservation and to fostering respect for these wild animals.
      </p>
        <strong>Key Behavioral Traits:</strong>
        <ul>
          <li><strong>Solitary Hunters:</strong> Unlike lions, tigers are generally solitary animals, especially adult males. They hunt alone, relying on stealth and power to bring down prey. Females may be seen with cubs for an extended period.</li>
          <li><strong>Nocturnal Activity:</strong> Tigers are primarily nocturnal, meaning they are most active during the night, from dusk till dawn, which is when they do most of their hunting.</li>
          <li><strong>Territorial Marking:</strong> Tigers mark their territories using scent (urine, scat, and gland secretions) and visual signals (scratches on trees). This communicates their presence and helps avoid confrontations.</li>
          <li><strong>Ambush Predators:</strong> They are ambush hunters, using dense cover to stalk close to their prey before launching a powerful attack, usually targeting the neck or throat.</li>
          <li><strong>Powerful Swimmers:</strong> Most tigers are adept swimmers and don't avoid water. They may hunt in water or use it to cool off. The tigers of the Sundarbans are particularly known for their aquatic abilities.</li>
          <li><strong>Communication:</strong> Tigers communicate through a variety of vocalizations, including roars (for long-distance communication), chuffs (a friendly greeting), growls, and hisses.</li>
          <li><strong>Parental Care:</strong> Tigresses are devoted mothers, raising their cubs (usually 2-3 per litter) for up to two years, teaching them essential survival and hunting skills.</li>
        </ul>
      <p>
        The behavior of tigers can vary slightly between subspecies and individuals, influenced by factors like habitat, prey availability, and human disturbance. Studying these behaviors helps scientists develop better strategies to protect them and manage human-tiger interactions.
      </p>
    </>
  );


  const tigerFacts = [
    {
      title: "Mighty Roar",
      fact: "A tiger's roar can be heard up to 3 kilometers (1.8 miles) away and is used to communicate and define territory.",
      icon: "🗣️"
    },
    {
      title: "Unique Stripes",
      fact: "No two tigers have the same stripe pattern. Like human fingerprints, each pattern is unique and even visible on their skin.",
      icon: "🐅"
    },
    {
      title: "Nocturnal Hunters",
      fact: "Tigers have exceptional night vision, about six times better than humans, making them highly effective nocturnal predators.",
      icon: "🌙"
    },
    {
      title: "Powerful Bite",
      fact: "With a bite force of over 1,000 psi, tigers can crush the bones of their prey. Their canines can reach up to 4 inches long.",
      icon: "🦷"
    },
    {
      title: "Solitary Kings",
      fact: "Tigers are primarily solitary animals, with males and females only coming together for mating. They fiercely protect their territories.",
      icon: "👑"
    },
    {
      title: "Strong Swimmers",
      fact: "Unlike many other cats, tigers are excellent swimmers and often cool off in rivers and lakes, sometimes even hunting in water.",
      icon: "🏊"
    },
    {
      title: "Variety of Prey",
      fact: "Tigers primarily prey on large ungulates like deer and wild boar, but can also hunt smaller animals like monkeys and birds if needed.",
      icon: "🎯"
    },
     {
      title: "Conservation Icon",
      fact: "The tiger is a 'flagship species' – its conservation also protects vast ecosystems and many other species that share its habitat.",
      icon: "🚩"
    }
  ];

  return (
    <div className="app">
      <Navigation />

      <main>
        <Header />

        <BlogSection 
          id="conservation"
          title="Crisis & Conservation"
          content={conservationContent}
          imageUrl="https://source.unsplash.com/random/600x400/?tiger,wildlife,rescue"
          imageAlt="Tiger conservation efforts in the wild"
        />

        <BlogSection 
          id="habitat"
          title="Diverse Habitats"
          content={habitatContent}
          imageUrl="https://source.unsplash.com/random/600x400/?jungle,tiger,habitat"
          imageAlt="Tiger in its lush natural habitat"
          reversed={true}
        />
        
        <BlogSection
          id="subspecies"
          title="Tiger Subspecies: A Closer Look"
          content={subspeciesContent}
          imageUrl="https://source.unsplash.com/random/600x400/?tigers,variety,species"
          imageAlt="Various tiger subspecies"
        />

        <BlogSection
          id="behavior"
          title="The Secret Life of Tigers"
          content={behaviorContent}
          imageUrl="https://source.unsplash.com/random/600x400/?tiger,behavior,stealth"
          imageAlt="Tiger exhibiting natural behavior"
          reversed={true}
        />

        <section id="facts" className="facts-section">
          <div className="container">
            <h2 className="section-title centered">Fascinating Tiger Facts</h2>
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
            <h2 className="section-title centered">Gallery of the Great Cats</h2>
            <div className="image-gallery">
              <div className="gallery-image">
                <img src="https://source.unsplash.com/random/600x400/?bengal,tiger,india" alt="Bengal Tiger in Indian Jungle" />
                <p>Regal Bengal Tiger</p>
              </div>
              <div className="gallery-image">
                <img src="https://source.unsplash.com/random/600x400/?siberian,tiger,snow" alt="Siberian Tiger in Snowy Forest" />
                <p>Majestic Amur (Siberian) Tiger</p>
              </div>
              <div className="gallery-image">
                <img src="https://source.unsplash.com/random/600x400/?sumatran,tiger,forest" alt="Sumatran Tiger in Dense Forest" />
                <p>Elusive Sumatran Tiger</p>
              </div>
               <div className="gallery-image">
                <img src="https://source.unsplash.com/random/600x400/?indochinese,tiger,wild" alt="Indochinese Tiger in its habitat" />
                <p>Indochinese Tiger Prowling</p>
              </div>
               <div className="gallery-image">
                <img src="https://source.unsplash.com/random/600x400/?tiger,cub,playful" alt="Playful Tiger Cub" />
                <p>Future King: Tiger Cub</p>
              </div>
               <div className="gallery-image">
                <img src="https://source.unsplash.com/random/600x400/?tiger,stripes,closeup" alt="Close up of Tiger Stripes" />
                <p>Nature's Camouflage: Stripes</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Tiger Tales | Exploring the world of these magnificent predators.</p>
            <div className="footer-links">
              <a href="#conservation">Conservation</a>
              <a href="#habitat">Habitat</a>
              <a href="#subspecies">Subspecies</a>
              <a href="#behavior">Behavior</a>
              <a href="#facts">Facts</a>
              <a href="#gallery">Gallery</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
