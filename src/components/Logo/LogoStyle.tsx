import styled from "styled-components";

export const LogoContainer = styled.div`
	color: ${props => props.theme.palette.common.white};
svg {
	width: 2rem;
	height: 2rem;
	margin-right: .5rem;
}
display: flex;
width: fit-content;
align-items: center;
cursor: pointer;
justify-content: center;
`