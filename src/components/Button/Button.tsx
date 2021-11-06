import { FC } from "react";
import { ButtonCustom } from "./ButtonStyle";
import {Variant} from './../../Enum'


interface ButtonProps{
	text: string,
	variant: Variant
}

export const Button:FC<ButtonProps> = ({text, variant}) => 
{
	return(
		<ButtonCustom variant={variant}>{text}</ButtonCustom>
	);
}

export default Button