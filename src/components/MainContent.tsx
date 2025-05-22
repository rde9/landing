'use client';

import React from 'react';
import Link from 'next/link';
import { SlideInCategoryListItem } from './Animation';
import { categories } from '@/constants';

const MainContent: React.FC = () => {
  return (
    <main className="flex-1">
      <section className="p-body-margin">
        <ul className="m-0 grid list-none grid-cols-1 gap-body-margin p-0 md:grid-cols-2">
          {categories.map((category, i) => (
            <SlideInCategoryListItem
              key={category.id}
              className={`li-${category.id}`}
              duration={0.6}
              delay={i * 0.3}
            >
              <div className="m-0 flex flex-col gap-1 pb-body-margin">
                <figure
                  className="relative w-full overflow-hidden rounded-large-radius"
                  style={{ aspectRatio: '16/9' }}
                >
                  <Link
                    href={category.url}
                    target="_blank"
                    className="group relative block size-full"
                  >
                    <img
                      src={category.imageUrl}
                      alt={category.title}
                      className="size-full scale-105 object-cover transition-all duration-500 group-hover:scale-100 group-hover:blur-sm"
                    />
                    <span className="absolute inset-0 flex scale-100 items-center justify-center font-featured text-featured font-bold leading-featured tracking-featured text-featured-text opacity-0 mix-blend-luminosity transition-all duration-500 group-hover:scale-105 group-hover:opacity-100">
                      {category.title}
                    </span>
                  </Link>
                </figure>

                <div className="flex flex-col">
                  <h2 className="flex items-center gap-1 text-medium tracking-normal">
                    {category.svg && <span dangerouslySetInnerHTML={{ __html: category.svg }} />}
                    <Link href={category.url} target="_blank">
                      <span className="flex justify-between">
                        <span className="inline-block">{category.description}</span>
                        <span className="mx-1 inline-block font-bold opacity-20 md:hidden">
                          &#10045;
                        </span>
                        <span className="inline-block md:hidden">
                          {category.description_mobile}
                        </span>
                      </span>
                    </Link>
                  </h2>
                  <span className="my-[-3px] block text-small text-fg-secondary">
                    illustrator:&nbsp;
                    <Link
                      href={category.illustratorUrl}
                      target="_blank"
                      className="hover:underline"
                    >
                      {category.illustrator}
                    </Link>
                  </span>
                </div>
              </div>
            </SlideInCategoryListItem>
          ))}
          <SlideInCategoryListItem
            key="li-more"
            className="li-more"
            duration={0.6}
            delay={categories.length * 0.3}
          >
            <div className="m-0 flex flex-col gap-1 pb-body-margin">
              <figure
                className="flex w-full items-center justify-center overflow-hidden rounded-large-radius"
                style={{ aspectRatio: '16/9' }}
              >
                <h2 className="flex select-none gap-1 text-medium tracking-normal">
                  <span>to be continued...</span>
                </h2>
              </figure>
            </div>
          </SlideInCategoryListItem>
        </ul>
      </section>
    </main>
  );
};

export default MainContent;
