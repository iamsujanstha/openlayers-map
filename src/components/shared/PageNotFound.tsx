import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledPaged = styled.div`
  display: flex;
  width: 100%;
  height: 100dvh;
  align-items: center;
  justify-content: center;

  & div { 
    text-align: center;
    & button {
      text-transform: uppercase;
      font-weight: 600;
      background-color: transparent;
      letter-spacing: 3px;
      font-size: 1.6rem;
      padding: 1em 3em;
      color: var(--color-brand-500);
      border: 1px solid var(--color-brand-500);
      cursor: pointer;
      transition: all .3s;
      background-color: var(--color-grey-0);

      &:hover {
        background-color: var(--color-grey-300);
      }
    }
  }
`;

const StyledErrorBlock = styled.div`
& .error-code {
  font-size: 8rem;
  font-weight: 700;
  letter-spacing: 1rem;
}

& .error-title {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 2rem;
  letter-spacing: 4px;
  margin-top: -1rem;
  margin-bottom: 1rem;
}

& .error-desc {
  max-width: 55ch;
  margin-bottom: 3.2rem;
}
`

export default function PageNotFound() {

  const navigate = useNavigate()
  return (
    <StyledPaged>
      <div>
        <StyledErrorBlock>
          <p className='error-code'>404</p>
          <p className='error-title'>OOPS! PAGE NOT FOUND</p>
          <p className='error-desc'>Sorry, the page you're looking doesn't exist. If you think something is broken report a problem.</p>
        </StyledErrorBlock>
        <button onClick={() => navigate('/')}>return home</button>
      </div>
    </StyledPaged>
  );
}
