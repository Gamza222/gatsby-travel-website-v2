import styled from "styled-components";
import { Link } from "gatsby";

export const Button = styled(Link)`
    background: ${({primary}) => (primary === 'true' ? '#F26A2E' : '#077BF1')};
    white-space: nowrap;
    padding: ${ ({big})  => (big === 'true' ? '16px 40px' : '14px 32px')};
    color: #fff;
    font-size: ${ ({big}) => (big === 'true' ? '20px':'16px')};
    border-radius: ${({round}) => (round === 'true' ? '50px' : '0')};
    outline: none;
    border: none;
    min-width: 100px;
    cursor: pointer;
    text-decoration: none;
    transition: .3s !important;
    
    &:hover {
        background: ${({primary }) => (primary === 'true' ? '#077BF1' : '#F26A2E')};
        transform: translateY(2px);
    }
`