import styled from 'styled-components';

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 826px;
    height: 809px;
    flex-shrink: 0;
    margin: 88px 307px 127px 307px;

`

export const Forms = styled.form`
    flex-direction: column;
    display: flex;
    font-family: 'Popins', sans-serif;
    font-size: 20px;
    color: #505050;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
export const Label = styled.label`
    font-family: 'Popins', sans-serif;
    font-size: 20px;
    color: #000;
    font-weight: 500;
    margin: 0 0 8px 0;
`

export const Input = styled.input`
    width: 421px;
    height: 45px;
    flex-shrink: 0;
    border-radius: 16px;
    border: #E85B81 1px solid;
    background-color: #fafafa;
    font-family: 'Popins', sans-serif;
    font-size: 16px;
    color: #505050;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 8px 0px 8px 27px;
`
export const Button = styled.button`
    width: 420px;
    height: 56px;
    font-family: 'Popins', sans-serif;
    flex-shrink: 0;
    background-color: #E85B81;
    border: none;
    border-radius: 16px;
    color: #fafafa;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const Textinho = styled.p`
    font-family: 'Popins', sans-serif;
    font-size: 20px;
    color: #000;
    font-weight: 400;
    text-align: center;
`

export const Tabela = styled.table`
    width: 420px;
    height: 260px;
    font-family: 'Popins', sans-serif;
    color: #000;
    margin-top: 20px;
    border-collapse: collapse;
`
export const TH = styled.th`
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #E85B81;
    text-align: left;
    padding: 8px 0px 8px 27px;
`

export const TR = styled.tr`
    &:nth-child(even){
        background-color: beige;
    }
`

export const TD = styled.td`
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #505050;
    text-align: left;
    padding: 8px 0px 8px 27px;
`

export const Titulo01 = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 36px;
    font-weight: 700;
    color: #E85B81;
    text-align: center;
    margin: 100px 0 20px 0;
`