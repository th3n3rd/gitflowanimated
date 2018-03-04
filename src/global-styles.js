import styled, {injectGlobal, keyframes} from 'styled-components';

injectGlobal`
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

    html {
        box-sizing: border-box;
      }
      *, *:before, *:after {
        box-sizing: inherit;
      }
`;

export const spacing = '10px';

export const colors = {
    material: {
        background: '#263238',
        foreground: '#B0BEC5',
        primary: '#607D8B',
        secondary: '#546E7A'
    }
};

export const Button = styled.button`
  border: none;
  background: transparent;
  border: 1px solid #2196F3;
  color: #2196F3;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  transition: all .2s;
  &:hover {
    background-color: #E3F2FD;
  }
`;

export const ButtonIcon = styled.button`
  width: 24px;
  height: 24px;
  background: transparent;
  background: transparent;
  border: 1px solid #2196F3;
  color: #2196F3;
  border-radius: 50%;
  cursor: pointer;
  transition: all .2s;
  &:hover {
    background-color: #2196F3;
    color: #fff;
    transform: scale(1.1);
  }
`;

export const fallDownAnimation = keyframes`
    to {
      transform: translate(-50%, 0);
    }
`;

export const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;

export const FlowElm = styled.div`
`;
