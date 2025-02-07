import { useEffect } from 'react';
import anime from 'animejs';
import WaveLine from './Wave';

const App = () => {
  useEffect(() => {
    anime
      .timeline({})
      .add({
        targets: '.letter',
        translateX: [-32, 0],
        opacity: [0, 1],
        filter: ['blur(5px)', 'blur(0px)'],
        easing: 'easeOutExpo',
        duration: 800,
        delay: (_, i) => 500 + 150 * i,
      })
      .add({
        targets: '.sign',
        opacity: [0, 1],
        filter: ['blur(5px)', 'blur(0px)'],
        easing: 'easeOutCubic',
        duration: 1200,
        delay: (_, i) => 1500 + 50 * i,
      });
  }, []);

  return (
    <div className="container mx-auto min-h-screen overflow-hidden bg-[#f5f5f5] px-4">
      <div className="diagonal-bg" />
      <div className="tachie" />

      <header className="flex items-center justify-between pb-1 pt-6">
        <h1 className="font-quicksand text-3xl font-bold">
          <span className="letter">k</span>
          <span className="letter">a</span>
          <span className="letter">a</span>
          <span className="letter">i</span>
          <span className="letter">.</span>
          <span className="letter">d</span>
          <span className="letter">e</span>
          <span className="letter">v</span>
          <span className="letter"> </span>
          <span className="sign">&lt;</span>
          <span className="sign">/</span>
          <span className="sign">&gt;</span>
        </h1>
      </header>

      <div className="waveline w-50% h-6">
        <WaveLine />
      </div>

      <main className="relative py-4 font-mapleMono">
        <nav className="relative z-10">
          <span className="nav-item">
            <a
              href="https://blog.kaai.dev"
              className="nav-link"
              target="_blank"
            >
              <span className="nav-text">blog</span>
              <span className="nav-icon icon-[solar--pen-outline]" />
            </a>
          </span>
          <span className="nav-item">
            <a
              href="https://gallery.kaai.dev"
              className="nav-link"
              target="_blank"
            >
              <span className="nav-text">gallery</span>
              <span className="nav-icon icon-[solar--pallete-2-linear]" />
            </a>
          </span>
          <span className="nav-item">
            <a
              href="https://album.kaai.dev"
              className="nav-link"
              target="_blank"
            >
              <span className="nav-text">album</span>
              <span className="nav-icon icon-[solar--camera-outline]" />
            </a>
          </span>
          <span className="nav-item">
            <a href="https://lab.kaai.dev" className="nav-link" target="_blank">
              <span className="nav-text">laboratory</span>
              <span className="nav-icon icon-[solar--test-tube-outline]" />
            </a>
          </span>
          <span className="nav-item">
            <span className="nav-text">about</span>
            <span className="nav-icon icon-[solar--chat-round-outline]" />
          </span>
        </nav>

        <footer className="mt-6">
          <div className="copyright mb-6">
            <p>©2021-2025 made with ❤️ by rde9</p>
          </div>

          <section className="character-info mb-4">
            <h2 className="text-sm font-bold text-gray-500">Character</h2>
            <div className="text-xs text-gray-400">
              <p>Kanban Musume 華愛あさな "Kaai Asana"</p>
              <ul>
                <li>Character Design: 园葵_Aoi & はるゐろは</li>
                <li>Illustration: 园葵_Aoi</li>
              </ul>
              <p className="text-xs">Copyright Reserved</p>
            </div>
          </section>

          <section className="attribution">
            <h2 className="text-sm font-bold text-gray-500">Attribution</h2>
            <div className="text-xs text-gray-400">
              <p>Icon: Solar Icon Set by 480 Design</p>
              <p className="text-xs">Licensed under CC BY 4.0</p>
            </div>
          </section>
        </footer>
      </main>
    </div>
  );
};

export default App;
