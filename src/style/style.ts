import styled from 'styled-components';


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
    background: #24253a;
    a{transition: all 0.2s}
    a{color:#778;text-decoration:none};

    a.active, a:hover {
      color:white;
    }
`

export const Page = styled.div`
    padding: 10px;
`
