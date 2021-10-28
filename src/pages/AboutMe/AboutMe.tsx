import * as React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';

import Header from '@/components/Header';
import Container from '@/components/Container';

const Inner = styled.div`
  display: grid;
  grid-template-columns: 1;
  ${props => props.theme.breakpoints.mediaMd()} {
    grid-template-columns: 6fr 4fr;
  }
`;

type AboutMeProps = {};
const AboutMe: React.FC<AboutMeProps> = props => {
  return (
    <div className="relative bg-purple-50 dark:bg-gray-700">
      <Container>
        <Header />
        <Inner className="h-screen">
          <div className="py-20">
            <h1 className="text-2xl font-bold mb-4">Sobre mí</h1>
            <main>
              <p className="mb-4">
                Hola! Soy Giancarlos Isasi, un desarrollador web que se
                especializa en el lado frontend.
                <br />
                Actualmente trabajo como{' '}
                <span className="font-bold">Frontend Technical Expert en </span>
                <a
                  href="https://www.linkedin.com/school/crehana/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-500 dark:text-purple-400 font-bold"
                >
                  Crehana
                </a>
                .
              </p>
              <p className="mb-4">
                En los últimos años como Frontend he estado involucrado en todo
                tipo de proyectos, desde pequeños a gigantes. Proyectos
                ecommerce, elearnings, CMS o incluso applicaciones que contaban
                con más de 10k archivos javascript.
                <br />
                Todo esto me ha permito ganar experiencia en temas no solo
                relacionados a la creación de UI sino también en temas como{' '}
                <span className="underline">
                  Infraestructura y Arquitectura Frontend
                </span>
                , <span className="underline">web performance</span>,{' '}
                <span className="underline">javascript tooling</span>,{' '}
                <span className="underline">
                  testing unitario/functional/integration/snapshot/E2E
                  TDD/BDD/ATDD
                </span>
                , <span className="underline">best-practices</span>,{' '}
                <span className="underline">escalabilidad</span>, etc.
              </p>
              <p>Cuento con experiencia sólida en:</p>
              <div>
                <h2 className="font-bold text-lg">
                  Infraestructura y Arquitectura Frontend
                </h2>
              </div>

              <section>
                <h2 className="font-bold text-lg">Web performance</h2>
                <p>
                  He trabajado en mejorar métricas core de performance (LCP,
                  FID, CLS, etc) en aplicaciones grandes de React.{' '}
                  <span className="italic">
                    {"Let's"} make the web faster{' '}
                    <span role="img" aria-label="fire">
                      🔥
                    </span>
                  </span>
                </p>
              </section>
            </main>
          </div>
        </Inner>
      </Container>
    </div>
  );
};

export default AboutMe;
