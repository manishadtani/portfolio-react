import styled from "styled-components";

export const TechnologiesContainer = styled.section`
  background-color: ${({ theme }) => theme.backgroundColor.dark};
  color: ${({ theme }) => theme.color.light};
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TechnologiesHeader = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

export const TechnologiesIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  max-width: 800px;
  width: 100%;
  margin-top: 2rem;
`;

export const TechnologyIcon = styled.img`
  width: 64px;
  height: 64px;
  object-fit: contain;
  background-color: white;
  border-radius: 12px;
  padding: 0.5rem;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 48px;
    height: 48px;
  }
`;
