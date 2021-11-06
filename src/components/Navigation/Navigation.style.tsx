import styled from "styled-components";



export const Container = styled.div`
  background: ${props => props.theme.palette.secondary.contrast};
  padding: 1rem;
  color: ${props => props.theme.palette.primary.contrast}
`;
