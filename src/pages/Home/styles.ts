import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
    height:100vh;
    display:flex;
    align-items:center;    
    padding:0 2%;

    @media (max-width:950px){
    }

    
`;

export const Content = styled.div`
    width:100%;
    max-width:1120px;
    margin:0 auto;
`;

export const Apresentation = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media (max-width:950px){
        flex-direction:column-reverse;
    }
`;

export const ApresentationText = styled.div`
    flex:1;   
    
    h1 {
        font-size:80px;
        color:#363636;
        font-weight:300;

        @media (max-width:480px){
            font-size:50px;
        }
    }

    @media (max-width:950px){
        display:flex;
        flex-direction:column;
        align-items:center;
    }
`;

export const ApresentationImg = styled.div`
    display:flex;
    img {
        width:400px;
    }
    @media (max-width:950px){
        img {
            width:200px;
            padding:20px 0;

        }
    }
`;

export const ButtonStart = styled.button`
    margin-top:20px;

    display:flex;
    justify-content:center;
    align-items:center;

    width:250px;
    height:50px;
    border:none;
    border-radius:5px;
    background-color:#E86A50;
    border:2px solid black;
    transition:0.5s;

    svg {
        color:white;
    }

    p {
        font-size:22px;
        color:white;
        font-weight:600;
        margin-left:15px;
    }

    :hover{
        background-color:#6392EF;
    }
    :focus {
        background-color:#3358A3;
    }
`;

export const Main = styled.div`
    width:100%;
    /* background-color:#6392EF; */
    padding:0 2%;

    @media(max-width:1150px){
        max-width:700px;
        margin:0 auto;
    }
`;

export const ContainerContent = styled.div`
    display:flex;

    @media(max-width:1150px){
        flex-direction:column-reverse;
    }
`;

interface ButtonProps {
    inputError: boolean;
}

export const Button = styled.div<ButtonProps>`
    margin:30px 0px;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;

    input {
        background-color:#EBEBEB;
        width:60%;
        height:50px;
        border:none;
        border-radius:5px 0px 0px 5px;

        font-size:18px;
        padding:0 20px;

        :focus {
            height:50px;
        }

        ${(props) => props.inputError && css`
            border-top:2px solid red;
            border-bottom:2px solid red;
            border-left:2px solid red;
            color:red;

            ::placeholder{
                color:red;
            }
        `}

        @media (max-width:400px){
            width:50%;
        }
    }

    select {
        background-color:#EBEBEB;
        position:relative;
        left:-9px;
        width:20%;
        height:50px;
        border:none;
        padding:0 10px;

        margin-left:5px;
        margin-left: 5px;
        font-size: 15px;
        font-weight: 300;

        ${(props) => props.inputError && css`
            border-top:2px solid red;
            border-bottom:2px solid red;
            border-right:2px solid red;
            color:red;
        `}

        option {
            font-size: 15px;
            font-weight: 300;
            height:50px;
        }

        @media (max-width:400px){
            width:30%;
        }
    }

    button {
        position:relative;
        left:-9px;
        width:20%;
        height:50px;
        color: white;

        background-color:#E86A50;
        border:none;
        border-radius:0px 5px 5px 0px;

        display:flex;
        align-items:center;
        justify-content:center;

        transition:0.5s;

        p {
            margin-left:5px;
            margin-left: 5px;
            font-size: 15px;
            font-weight: 300;
            @media (max-width:480px){
                display:none;
            }
        }

        svg {
            @media (max-width:600px){
                display:none;
            }
            @media (max-width:480px){
                display:block;
            }
        }

        :hover{
            background-color:#6392EF;
        }
        :focus {
            background-color:#3358A3;
            height:50px;
        }

        @media (max-width:400px){
            width:20%;
        }
    }
`;

export const Search = styled.div`
    width:60%;
    padding:20px;
    border-radius:5px;
    margin-right:10px;

    @media(max-width: 1150px) {
        width:100%;
    }
`;

export const Favorites = styled.div`
    width:40%;
    padding:20px;
    border-radius:5px;

    @media(max-width: 1150px) {
        width:100%;
    }
`;

export const CardBookResponse = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

export const CardBook = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    background-color:white;
    border:2px solid black;
    border-radius:5px;
    padding:20px;
    margin:10px 0;

    @media (max-width:480px){
        flex-direction:column;
    }
`;

export const CardBookImg = styled.div`
    width:20%;
    display:flex;
    justify-content:center;
    align-items:center;
    img {
        width:80px;
    }

    @media (max-width:480px){
        width:100%;
        img {
            width:50%;
        }
    }
`;

export const CardBookInfo = styled.div`
    width:60%;
    padding:10px;

    h1 {
        font-size: 19px;
        font-weight: 700;
    }

    h2 {
        display: inline-block;
        font-size: 15px;
        font-weight: 400;
        color: #666666;
    }

    span {
        display: inline-block;
        font-size: 15px;
        font-weight: 400;
        color: #666666;
    }

    h4 {
        font-size: 14px;
        font-weight: 400;
    }

    @media (max-width:480px){
        width:100%;

    }
`;

export const Actions = styled.div`
    width:20%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

    @media (max-width:480px){
        width:100%;
    }
`;

export const AddFavorites = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:10px;

    
`;

interface IconStartProps {
    isFavorite: boolean;
}

export const IconStar = styled.div<IconStartProps>`
    display:flex;
    justify-content:center;
    align-items:center;
    transition:0.5s;
    cursor: pointer;
    svg {
            margin-right:10px;
    }
    :hover {
        color:yellow;
    }

    ${(props) => props.isFavorite && css`color:yellow;`}
`;
export const LearnMore = styled.button`
    width:100%;
    height: 48px;
    border: none;
    background-color: #E86A50;
    border-radius: 5px;
    transition:0.5s;

    a {
        text-decoration:none;
        font-size: 14px;
        color: white;
    }

    :hover{
        background-color:#6392EF;
        }
    :focus {
        background-color:#3358A3;
    }
`;

export const MYBooks = styled.div`
    width:100%;

    width: 100%;
    margin: 30px 0 55px 0;

    
`;

export const CardFavoriteBook = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;

    border:2px solid black;
    border-radius:5px;
    padding:20px;
    margin:10px 0;

    @media (max-width:480px){
        flex-direction:column;
    }
`;

export const CardImgFavoriteBook = styled.div`
    width:25%;
    display:flex;
    justify-content:center;
    align-items:center;
    img {
        width:70px;
    }

    @media (max-width:480px){
        width:100%;
            img {
                width:50%;
            }
    }
`;

export const CardInfoFavoriteBook = styled.div`
    width:50%;

    h1 {
        font-size: 18px;
        font-weight: 900;
    }

    h2 {
        font-size: 14px;
        font-weight: 300;
        color: #666;

    }
    h3 {
        font-size: 12px;
        font-weight: 300;
        color: #666;
    }

    @media (max-width:480px){
        width:100%;
    }

    
`;

export const CardActionFavoriteBook = styled.div`
    width:25%;
    @media (max-width:480px){
        width:100%;
    }
`;

interface DoASearchProps {
    errApi: boolean;
}

export const DoASearch = styled.div<DoASearchProps>`
    width:100%;

    p {
        font-size: 18px;
        font-weight: 200;
        ${props => props.errApi && css`color:red;`}
    }
`;

