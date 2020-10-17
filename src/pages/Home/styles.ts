import styled from 'styled-components';
import { shade, size } from 'polished';

export const Title = styled.h1`
  color: #000;
  font-size: 48px;
  line-height: 56px;

  margin-top: 80px;
  max-width: 450px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 8;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 4px 0 0 4px;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    flex: 2;
    height: 70px;
    border-radius: 0 4px 4px 0;
    background: #333;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(1, '#333')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  align-items: center;

  #container {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    display: flex;
    align-items: center;

    & + div {
      margin-top: 24px;
    }
  }
  #users {
    flex: 8;
  }

  a {
    padding: 24px;
    display: block;
    text-decoration: none;
    align-items: center;
    display: flex;

    transition: transform 0.2s;
    &:hover {
      transform: translateX(10px);
    }
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  div {
    margin-left: 16px;
    flex: 1;

    strong {
      font-size: 20px;
      color: #3d3d4d;
    }
    p {
      font-size: 16px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }

  #buttons_icon {
    button {
      margin-top: 10px;
      margin-right: 10px;
      flex: 2;
      border: 0;
      border-radius: 5px;
      display: flex;
    }

    .button1 {
      background: green;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(-0.5, 'green')};
      }
    }
    .button2 {
      background: red;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.5, 'red')};
      }
    }
    svg {
      color: #fff;
      &:hover {
        width: 50px;
        height: 50px;
      }
    }
  }
`;
