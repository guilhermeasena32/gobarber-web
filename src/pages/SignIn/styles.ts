import styled from 'styled-components';
import { shade } from 'polished';
import SignInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh; /* assume 100% do tamanho da tela do usuario*/
  display: flex;
  align-items: stretch;
`;

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center; /* substitui justify-content: center; align-items: center; */
  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }

    h1 {
      margin-bottom: 24px;
    }
  }
  > a {
    /** estilizar apenas o a que vier direto do content */
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 8px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${SignInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
