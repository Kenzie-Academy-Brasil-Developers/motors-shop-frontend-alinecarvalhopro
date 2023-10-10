import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

/* Reset Style */
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* Colors */
:root {
--color-brand-1: #4529E6;
--color-brand-2: #5126EA;
--color-brand-3: #B0A6F0;
--color-brand-4: #EDEAFD;

--color-greyScale-0: #0B0D0D;
--color-greyScale-1: #212529;
--color-greyScale-2: #495057;
--color-greyScale-3: #868E96;
--color-greyScale-4: #ADB5BD;
--color-greyScale-5: #CED4DA;
--color-greyScale-6: #DEE2E6;
--color-greyScale-7: #E9ECEF;
--color-greyScale-8: #F1F3F5;
--color-greyScale-9: #F8F9FA;
--color-greyScale-10: #FDFDFD;
--color-whiteFixed: #FFFFFF;

--color-feedback-alert-1: #CD2B31;
--color-feedback-alert-2: #FDD8D8;
--color-feedback-alert-3: #FFE5E5;

--color-feedback-success-1: #18794E;
--color-feedback-success-2: #CCEBD7;
--color-feedback-success-3: #DDF3E4;

--color-randomProfile-1: #E34D8C;
--color-randomProfile-2: #C04277;
--color-randomProfile-3: #7D2A4D;
--color-randomProfile-4: #7000FF;
--color-randomProfile-5: #6200E3;
--color-randomProfile-6: #36007D;
--color-randomProfile-7: #349974;
--color-randomProfile-8: #2A7D5F;
--color-randomProfile-9: #153D2E;
--color-randomProfile-10: #6100FF;
--color-randomProfile-11: #5700E3;
--color-randomProfile-12: #30007D;
}
`;
