import styled, { keyframes } from "styled-components";

export const ContentBox = styled.div`
  padding: 16px;
  overflow-y: auto;
  flex: 1;
`;

export const LocationBox = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.h4`
  font-size: 1.6rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Coordinate = styled.div`
  display: grid;
  margin-bottom: 6px;
  grid-template-columns: 1fr 4fr;
  align-items: center;

  span {
    font-weight: 700;
    color: #555;
    font-size: 14px;
  }

  input {
    width: 100%;
    max-width: 180px;
    padding: 8px 10px;
    font-size: 16px;
    border-radius: 6px;
    border: 1px solid #ccc;
    text-align: left;
    font-weight: bold;
    color: var(--color-brand-primary);
    background: #fff;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 4fr;
    input {
      max-width: 100%;
    }
  }
`;

export const Divider = styled.hr`
  margin-top: 12px;
  border: none;
  border-top: 1px solid #e0e0e0;
`;

export const MapType = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  `;

const shimmer = keyframes`
  0% {
    background-position: -400px 0;
  }
  100% {
    background-position: 400px 0;
  }
`;

export const ShimmerWrapper = styled.div`
  margin-bottom: 24px;
`;

export const ShimmerLine = styled.div<{ width?: string; height?: string }>`
  background: linear-gradient(to right, #eeeeee 8%,rgb(192, 190, 190) 18%, #eeeeee 33%);
  background-size: 800px 104px;
  animation: ${shimmer} 1s infinite linear;
  border-radius: 6px;
  margin-bottom: 12px;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '16px'};
`;
