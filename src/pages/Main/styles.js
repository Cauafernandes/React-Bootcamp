import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    margin: 80px auto;
    max-width: 700px;
    background: #FFF;
    padding: 30px;

    h1 {
        font-size: 20px;
        display: flex;
        align-items: center;
        flex-direction: row;
    }

    svg {
        margin-right: 10px;
    }
`
export const Form = styled.form`
    flex-direction: row;
    margin-top: 30px;
    display: flex;

    input{
        border: 1px solid #EEE;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 16px;
        flex: 1;
    }
`

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`

export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading,
}))`
    background: #7159c1;
    border-radius: 4px;
    margin-left: 10px;
    padding: 0 15px;
    border: 0;

    justify-content: center;
    align-items: center;
    display: flex;

    svg {
        margin: 0;
    }

    &[disabled]{
        cursor: not-allowed;
        opacity: 0.6;
    }

    ${props => props.loading && css`
        svg {
            animation: ${rotate} 2s linear infinite;
        }
    `}
`

export const List = styled.ul`
    list-style: none;
    margin-top: 30px;

    li{
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        padding: 15px 0;
        display: flex;

        & + li {
            border-top: 1px solid #EEE;
        }

        a{
            text-decoration: none;
            color: #7159c1;
        }
    }
`
