import { ChangeEventHandler, } from "react"
import styled from "styled-components"

export const TextInput = ({ onChange, value, placeholder }: {
    onChange: ChangeEventHandler<HTMLInputElement>,
    value: string,
    placeholder: string
}) => {
    return <Input placeholder={placeholder} value={value} type="text" onChange={onChange} />
}

const Input = styled.input`
    width: 100%;
    padding: 0.5rem;
    border: 0px;
    font-size: 30px;
    outline: none;
    box-sizing: border-box;
    border-bottom: 2px solid rgb(4, 69, 175, 0.2);
    color: rgb(4, 69, 175);
    font-weight: 400;
    &:focus {
        border-bottom: 2px solid rgb(4, 69, 175);
    }
`