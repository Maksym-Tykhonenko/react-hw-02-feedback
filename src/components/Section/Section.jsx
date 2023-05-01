import { Title, ContentBlock } from './Section.styled';


export const Section = ({ title, children }) => {
    return (
        <>
            <Title>{title}</Title>
            <ContentBlock>{children}</ContentBlock>
        </>
    )
}
