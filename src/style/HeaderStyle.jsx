import styled from 'styled-components'

export const MainHeader = styled.header`

.header {
    background-color: ${({ theme }) => theme.color.blackBg};
    text-align: center;
    color: ${({ theme }) => theme.color.whiteText};
    padding: 15px;
    position: relative;

    h1, h2, h3, h4, h5, h6{
        color: ${({ theme }) => theme.color.whiteText};
    }

    .back-btn {
        position: absolute;
        top: 0;
        left: 10px;
        bottom: 0;
        height: 100%;
        margin: auto;
        display: flex;
        align-items: center;

        a {
            font-size: 20px;
        }

    }
}

`