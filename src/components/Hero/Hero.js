import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Joel Mateo Robles Atuesta <br />
        Ingeniero Mecánico <br />
        Universidad de los Andes - CO
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/mateo-robles-156688113/'}>LinkedIn Profile</Button>
    </LeftSection>
  </Section>
);

export default Hero;