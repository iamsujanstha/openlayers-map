import { FC } from 'react';
import { FallbackProps } from 'react-error-boundary';
import styled from 'styled-components';

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 1.5rem;
  height: 100dvh;
  background-color:gray;

  > button {
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 2px;
    padding: 0.5em 1.5em;
    background-color: var(--color-grey-0);
    margin-top: 1em;
    cursor: pointer;
    &:hover {
      background-color: #a7a2a2;
    }
  }
`;

const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <StyledPage>
      <p>⚠️Something went wrong. {error.message}</p>
      <button onClick={resetErrorBoundary}>TRY AGAIN</button>
    </StyledPage>
  );
};

export default ErrorFallback;
