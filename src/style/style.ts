import styled from 'styled-components';

export const HEADER_COLOR = 'rgb(9, 113, 241)';

export const MainPage = styled.div`
    padding:0px;
    margin:0px;
    font-size:16px;
    font-family:verdana;
`

export const TopLinks = styled.div`
    display:flex;
    align-items:center;
    padding: 10px;
    gap: 16px;
    background: ${HEADER_COLOR};
    font-weight:bold;
    a{transition: all 0.2s}
    a{color:rgba(255,255,255,0.5);text-decoration:none};

    a.active, a:hover {
      color:white;
    }
`

export const Page = styled.div`
    padding: 16px;
`
