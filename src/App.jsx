
import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import Header from './components/Header';
import Hero from './components/Hero';
import TechnologyCard from './components/TechnologyCard';
import StackPanel from './components/StackPanel';
import Footer from './components/Footer';

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setLoading(true);
        const response = await fetch('/data/technologies.json');
        if (!response.ok) throw new Error('Unable to load technology data.');
        const data = await response.json();
        setTechnologies(data);
      } catch (error) {
        console.error(error);
        toast.error('Could not load technology data. Please refresh the page.');
      } finally {
        setTimeout(() => setLoading(false), 250);
      }
    };
    loadTechnologies();
  }, []);

  const addToStack = (technology) => {
    if (stack.some((item) => item.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }
    setStack((current) => [...current, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };

  const removeFromStack = (id) => {
    const removed = stack.find((item) => item.id === id);
    setStack((current) => current.filter((item) => item.id !== id));
    if (removed) toast.info(`${removed.name} removed from your stack.`);
  };

  const removeAll = () => {
    if (!stack.length) {
      toast.info('Your stack is already empty.');
      return;
    }
    setStack([]);
    toast.info('All technologies were removed from your stack.');
  };

  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />

        <section className="technology-section section" id="technologies">
          <div className="section-heading">
            <div>
              <h2>Explore the <span>Technologies</span></h2>
              <p>Pick one technology per category to build your ideal stack.</p>
            </div>
          </div>

          {loading ? (
            <div className="loading-card" aria-live="polite">
              <div className="spinner" />
              <p>Loading technologies...</p>
            </div>
          ) : (
            <div className="builder-layout">
              <div className="technology-grid">
                {technologies.map((technology) => (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    added={stack.some((item) => item.id === technology.id)}
                    onAdd={addToStack}
                  />
                ))}
              </div>
              <StackPanel stack={stack} onRemove={removeFromStack} onRemoveAll={removeAll} />
            </div>
          )}
        </section>

        <section className="info-section section" id="projects">
          <div className="info-card">
            <p className="eyebrow">PROJECT READY</p>
            <h2>Build a stack that fits your next project.</h2>
            <p>Compare familiar tools, choose the technologies you need, and keep your selected stack visible while you explore.</p>
            <a className="gradient-button" href="#technologies">Build Your Stack</a>
          </div>
        </section>

        <section className="about-contact section" id="about">
          <div className="mini-info">
            <p className="eyebrow">ABOUT</p>
            <h2>A simple workspace for better technology choices.</h2>
            <p>Dev Stack brings frontend, backend, database, language, styling, and DevOps options into one clean comparison experience.</p>
          </div>
          <div className="mini-info" id="contact">
            <p className="eyebrow">CONTACT</p>
            <h2>Have an idea for your next build?</h2>
            <p>Use the stack builder to organize your choices, then take your final technology list into your project planning workflow.</p>
            <button className="outline-button" onClick={() => toast.info('Thanks for reaching out!')}>Contact Dev Stack</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
