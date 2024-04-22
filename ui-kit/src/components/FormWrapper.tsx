import styled from "styled-components"
import { MdArrowForward } from 'react-icons/md'
import { FC, ReactNode } from "react"

type FormWrapperProps = {
    children: ReactNode
    title?: string
    index?: number
    isLast?: boolean
}

export const FormWrapper: FC<FormWrapperProps> = ({ children, title, index }) => {
    return <FormWrapperContainer>
        <FormContainer>
            <FormTitleWrapper>
                <FormIndexTitle>
                    {index}
                    <MdArrowForward />
                </FormIndexTitle>
                {title}
            </FormTitleWrapper>
            {children}
        </FormContainer>
    </FormWrapperContainer>
}

const FormWrapperContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const FormContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const FormTitleWrapper = styled.div`
    position: relative;
    height: 3rem;
    align-items: center;
    font-size: 1.5rem;
    width: 100%;
    font-weight: 300;
    font-family: 'Segoe UI', sans-serif;
    margin-bottom: 1rem;
`
const FormIndexTitle = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    transform: translateX(-150%);
    color: rgb(4, 69, 175);
`