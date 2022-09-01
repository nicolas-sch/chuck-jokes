import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 450px) {
        width: 90%;
    }
`

export const HeaderBanner = styled.div`
    width: 100%;
    max-width: 1216px;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
        font: 5rem;
    }

    @media(max-width: 450px) {
        width: 90%;
    }
`