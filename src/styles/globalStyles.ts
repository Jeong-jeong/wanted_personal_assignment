import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
* {
	box-sizing: border-box;
	margin: 0;
	font-family: 'Spoqa Han Sans Neo', apple-system, system-ui, Dotum,'돋움',Helvetica, sans-serif; 
}

	body {
	background-color: #fff;
}

a {
	color: inherit;
	text-decoration: none;
}

button {
	cursor: pointer;
}

ol, ui, li {
	list-style: none;
}

img {
	display: block;
	width: 100%;
	height: 100%;
}
`;

export default GlobalStyle;
