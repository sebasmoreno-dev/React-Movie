import styled from 'styled-components';

//1. se coloca como priroidad el linear gradient.
//2. el linear gradient va dentro de background-image
//3. Despues la variable yfinalmente la url con la imagen
export const Wrapper = styled.div`
  background-image:
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2) 41%,
      rgba(0, 0, 0, 0.65) 100%,
    var(--darkGrey)),
    url(${({ image }) => image});
  background-size: 100%, cover;
  background-position: center;
  height: 600px;
  position: relative;
  animation: animateHeroImage 1s;

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  padding: 20px;
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

export const Text = styled.div`
  z-index: 100;
  max-width: 700px;
  position: absolute;
  bottom: 40px;
  margin-right: 20px;
  margin-left: 100px;
  color: var(--white);

  h1 {
    font-size: var(--fontSuperBig);

    @media screen and (min-width: 720px) {
      font-size: var(--fontBig);
    }
  }

  p {
    font-size: var(--fontMed);

    @media screen  and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 100%;
    margin-left: 30px;
  }
`;