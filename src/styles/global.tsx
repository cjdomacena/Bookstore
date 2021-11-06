import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
	margin: 0;
	padding: 0;
	outline: 0;
	box-sizing: border-box;
	font-family: 'Open Sans', sans-serif;
	font-size: 1rem;
}

ul
{
	list-style: none;
}

h1,h2,h3,h4,h5
{
	font-size: 1rem;	margin: 0;
	padding: 0;
}
p 
{
	font-size: 1rem;
	margin: 0;
	padding: 0;
}
a 
{
	text-decoration: none;
	color: inherit;
	font-size: 1rem;
}
button 
{
	border: none;
	background-color: transparent;
	
}

#root {
	margin: 0 auto;
}

`