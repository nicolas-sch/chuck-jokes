import styled from "styled-components";

export const BodyContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Image = styled.img`
    width: 25rem;

    @media(max-width: 450px) {
        width: 50%;
    }
`
export const SearchContainer = styled.div`
    width: 60%;
    max-width: 1216px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    @media(max-width: 450px) {
        width: 90%;
        flex-direction: column;
    }
`
export const Input = styled.input`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border: 1px solid #000;
    border-radius: 3px;

    @media(max-width: 450px) {
        width: 70%;
    }
`

export const Button = styled.button`
    width: 6rem;
    padding: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #82807a;
    border-radius: 3px;
    border: none;
    color: #FFFFFF;
    cursor: pointer;

    @media(max-width: 450px) {
        width: 70%;
    }
`

export const Joke = styled.div`
    width: 55%;
    max-width: 1216px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #82807a;
    border-radius: 5px;
    padding: 10px;
    color: #FFFFFF;
    font-size: 20px;
    
    @media(max-width: 450px) {
        width: 80%;
    }
`