import styled from "styled-components";
import {Variant} from './../../Enum'


interface IProps{
	variant?: Variant
}

export const ButtonCustom = styled.button<IProps>`

margin: 8px;
border-radius: 99rem;
padding: .3rem 1.5rem;
${props => {
	switch(props.variant)
	{
		case Variant.FILLED:
			return `
				color:${props.theme.palette.common.white};
				background-color: ${props.theme.palette.primary.main};
				&:hover
				{
					background: ${props.theme.palette.secondary.contrast};
					transition: all .3s ease;
				}
			`;
		case Variant.OUTLINE:
		default:
			return `
				color: ${props.theme.palette.secondary.contrast};
				border:1px solid ${props.theme.palette.secondary.contrast};
				&:hover
				{
					background: ${props.theme.palette.primary.main};
					color:${props.theme.palette.common.white};
					border-color:transparent;
					transition: all .3s ease;
				}
			`;
	}
}}


`