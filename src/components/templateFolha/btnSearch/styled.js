import styled from 'styled-components'

export const ContainerSearch = styled.div`
    border-left: 6px solid #1A2F3A;
    border-right: 6px solid #1A2F3A;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: rgba(221,235,249,.45);
    width: 100%;
`

export const ButtonSearch = styled.button`
    border-radius: 2px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px;
    padding-left: 15px;
    padding-right: 15px;
    background:#1A2F3A;
    color: #fff;

    :hover {
        color: #fff;
    }

    :active, :focus {
        background: #98afbb;
        color: #333;
        font-weight: 600;
    }
`