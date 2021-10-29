import { createGlobalStyle } from 'styled-components';

export const SVGCss = createGlobalStyle`
	/* SVG Animation */

	#ConeLight {
		fill: orange !important;
		animation: .6s infinite coneCycle;
	}

	@keyframes coneCycle {
		50% {
			fill: white;
		}
		100% {
			fill: #d62209;
		}
	}


	/* Crane Light Animation */

	#CraneLight {
		fill: white;
		animation: .6s infinite coneCycle;
	}


	/* Crane Whinch Animation  */

	#Winch {
		transform: translateX(88px);
		animation: 4s linear infinite winchCycle;
		animation-direction: alternate-reverse;
	}

	@keyframes winchCycle {
		0% {
			transform: translateX(88px);
		}
		100% {
			transform: translateX(4px);
		}
	}


	/* Paint Roller Animation */

	#PaintRoller {
		animation: .7s ease infinite paintRoller;
		transform: translateY(-1px);
		animation-direction: alternate-reverse;
	}

	@keyframes paintRoller {
		0% {
			transform: translateY(-7px);
		}
		100% {
			transform: translateY(21px);
		}
	}
`;
