import * as React from 'react';

import Header from '@/components/Header';
import Container from '@/components/Container';

const Homepage = props => {
  return (
    <div>
      {/* <div className="bg-gradient-to-r from-green-400 to-blue-500"> */}
      <div className="bg-purple-800">
        <Container className="text-white">
          <Header />
          <section className="h-80 md:h-90 text-white text-center">
            <h1 className="mt-12 text-2xl font-bold">Mr. -N</h1>
            <h2 className="mt-4 text-3xl font-bold">Giancarlos Isasi</h2>
            <p>Frontend engineer</p>
            <img
              className="w-60 mx-auto rounded mt-4"
              src="https://camo.githubusercontent.com/ce00948324d9e3916e58d7fbf02aefba981cc878b2f0bdd2465b10d32c4e986c/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f785541376264704c78516873535164796f672f67697068792e676966"
              alt="Mr. -N"
            />
          </section>
        </Container>
      </div>
      <Container>Blog</Container>
    </div>
  );
};

export default Homepage;
