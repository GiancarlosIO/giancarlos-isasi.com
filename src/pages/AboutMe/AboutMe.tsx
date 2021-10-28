import * as React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';

import Header from '@/components/Header';
import Container from '@/components/Container';

import { stackTech } from './constants';

const Inner = styled.div`
  display: grid;
  grid-template-columns: 1;
  ${props => props.theme.breakpoints.mediaMd()} {
    grid-template-columns: 6fr 4fr;
  }
`;

type AboutMeProps = {};
const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <div className="relative bg-purple-50 dark:bg-gray-700">
      <Container>
        <Header />
        <Inner className="min-h-screen dark:text-white">
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
                  className="underline text-purple-500 dark:text-purple-400"
                >
                  Crehana
                </a>
                .
                <br />
                Puedes ver el conjuntos de tools, libs y frameworks que manejo{' '}
                <a
                  href="#stack-tech"
                  className="underline text-purple-500 dark:text-purple-400"
                >
                  aqui
                </a>
              </p>
              <p className="mb-4">
                En los últimos años como Frontend he estado involucrado en
                aplicaciones de todo tipo y tamaño. Todo esto me ha permito
                ganar experiencia en temas no solo relacionados a la creación de
                UI sino también en temas como{' '}
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
                <span className="underline">escalabilidad</span>, documentación,
                etc.
              </p>

              <p>Cuento con experiencia sólida en:</p>
              <section className="mt-4">
                <h3 className="font-bold">
                  Infraestructura y Arquitectura Frontend
                </h3>
                <p>
                  Me he encargado de definir las herramientas, workflows, libs,
                  frameworks, monorepos, CI/CD, documentación y demas temas que
                  giran entorno a la construcción y escalabilidad de
                  aplicaciones javascript usadas por millones de usuarios.
                </p>
              </section>
              <br />
              <section>
                <h3 className="font-bold">Web performance</h3>
                <p>
                  He trabajado en mejorar métricas core de performance (LCP,
                  FID, CLS, etc) en aplicaciones complejas de React. El impacto
                  de mi trabajo se ha visto reflejado en mejoras de las
                  principales páginas ecommerce, en donde se ha llegado a pasar
                  de 7 a 50-80 puntos en Lighthouse.
                  <br />
                  Una de las frases que me gusta mucho es:
                  <span className="italic font-medium">
                    {" Let's"} make the web faster{' '}
                    <span role="img" aria-label="fire">
                      🔥
                    </span>
                  </span>
                </p>
              </section>
              <br />
              <section>
                <h3 className="font-bold">Javascript tooling</h3>
                <p>
                  Tengo conocimiento sólido en configuraciones avanzadas de
                  tools existentes dentro del ecosistema de javascript: webpack,
                  babel, eslint, prettier, typescript, lerna, nextjs, etc.
                  <br />
                  También he creado custom CLIs y scripts de node para automizar
                  tareas repetitivas.
                </p>
              </section>
              <br />
              <section>
                <h3 className="font-bold">
                  Creación de components de UI con React.js
                </h3>
                <p>
                  Llevo usando React.js hace más de 5 años por lo que cuento con
                  experiencia avanzada, no solo con la librería misma, sino
                  también en todo su ecosistema.
                  <br />
                  Además de estar involucrado en la creación y rediseño de
                  páginas web, también tengo experiencia en la creación de
                  frameworks y librerías de UI basadas en el design system de la
                  compañia (buttons, dialogs, form fields, etc).
                </p>
              </section>
            </main>
            <div className="mt-8" id="stack-tech">
              <section>
                <h2 className="text-2xl font-bold mb-4">
                  <a href="#stack-tech">Stack Tech</a>
                </h2>
                {stackTech.map(stack => (
                  <React.Fragment key={stack.title}>
                    <h3 className="font-bold">{stack.title}</h3>
                    <ul className="list-disc list-inside mb-4">
                      {stack.items.map(item => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </React.Fragment>
                ))}
              </section>
            </div>
          </div>
        </Inner>
      </Container>
    </div>
  );
};

export default AboutMe;
