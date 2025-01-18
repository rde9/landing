import WaveLine from "./Wave";

const App = () => {
  return (
    <div className="container mx-auto px-4 min-h-screen bg-[#f5f5f5]">
      <div className="diagonal-bg hidden sm:block" />
      <div className="tachie" />

      <header className="flex justify-between items-center pt-6 pb-1">
        <h1 className="text-3xl md:text-4xl font-quicksand font-bold">{`kaai.dev </>`}</h1>
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
            <h2 className="text-md font-bold text-gray-500">Character</h2>
            <div className="text-gray-400">
              <p>Kanban Musume 華愛あさな "Kaai Asana"</p>
              <ul>
                <li>Character Design: 园葵_Aoi & はるゐろは</li>
                <li>Illustration: 园葵_Aoi</li>
              </ul>
              <p className="text-sm">Copyright Reserved</p>
            </div>
          </section>

          <section className="attribution">
            <h2 className="text-md font-bold text-gray-500">Attribution</h2>
            <div className="text-gray-400">
              <p>Icon: Solar Icon Set by 480 Design</p>
              <p className="text-sm">Licensed under CC BY 4.0</p>
            </div>
          </section>
        </footer>
      </main>
    </div>
  );
};

export default App;
