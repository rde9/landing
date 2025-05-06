import Link from 'next/link';
import Button from './Button';
import { SlideInAboutSection } from './Animation';
import { categories } from '@/constants';

const Divider = () => {
  return <div className="mb-6 mt-10 h-1 w-full max-w-[100px] bg-border-icon" />;
};

const About = () => {
  return (
    <div id="border-wrapper" className="border-t border-border-light">
      <SlideInAboutSection
        duration={0.6}
        delay={1.0 + categories.length * 0.3}
        className="flex min-h-about flex-col justify-between p-body-margin"
      >
        <h2 className="text-featured tracking-tighter">About</h2>

        <div className="max-w-[650px]">
          <section id="profile">
            <ul className="flex flex-col gap-6">
              <li>
                <figure className="profile">
                  <div className="relative flex items-center gap-4">
                    <div
                      className="size-16 select-none rounded-full border border-border-icon bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: "url('/front-facing-baby-chick.webp')" }}
                    />
                    <div className="flex flex-col">
                      <span className="text-large font-bold">rde9</span>
                      <span className="text-small text-fg-secondary">Master&apos;s student</span>
                    </div>
                  </div>
                  <ul className="mt-1 text-lg">
                    <li>A self-proclaimed &quot;developer&quot;.</li>
                    <li>I&apos;m into a little bit of everything.</li>
                    <li>
                      <Link
                        href="https://blog.kaai.dev/about"
                        target="_blank"
                        className="hover:underline"
                      >
                        <span>{`More>>`}</span>
                      </Link>
                    </li>
                  </ul>
                </figure>
              </li>
              <li>
                <figure className="profile">
                  <div className="relative flex items-center gap-4">
                    <div
                      className="size-16 select-none rounded-full border border-border-icon bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: "url('/asana.webp')" }}
                    />
                    <div className="flex flex-col">
                      <span className="text-large font-bold">
                        <ruby>
                          華<rt>か</rt>愛<rt>あい</rt>
                        </ruby>
                        あさな
                      </span>
                      <span className="text-small text-fg-secondary">看板娘</span>
                    </div>
                  </div>
                  <ul className="mt-1 text-lg">
                    <li>
                      Character Design:{' '}
                      <Link
                        href="https://space.bilibili.com/386429593"
                        target="_blank"
                        className="hover:underline"
                      >
                        園葵_Aoi
                      </Link>
                      {' (Ver.1) '}/{' '}
                      <Link
                        href="https://x.com/_Haruiroha"
                        target="_blank"
                        className="hover:underline"
                      >
                        はるゐろは
                      </Link>
                      {' (Ver.0)'}
                    </li>
                    <li>Copyright Reserved</li>
                  </ul>
                </figure>
              </li>
            </ul>
          </section>
          <Divider />
          <section id="license">
            <ul className="mt-1 text-lg">
              <li>
                Icon: Solar Icon Set by{' '}
                <Link
                  href="https://github.com/480-Design/Solar-Icon-Set"
                  target="_blank"
                  className="hover:underline"
                >
                  480 Design
                </Link>
              </li>
              <li>Licensed under CC BY 4.0</li>
            </ul>
          </section>
          <div className="mt-8">
            <Button href="#">Contact</Button>
          </div>
        </div>
      </SlideInAboutSection>
    </div>
  );
};

export default About;
