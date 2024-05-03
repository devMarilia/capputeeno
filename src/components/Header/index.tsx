"use client"
import React from 'react'
import styled from 'styled-components'
import {IconInputSearch } from '../Input/index'

import { Saira_Stencil_One } from "next/font/google";
import { CartControl } from '../CartControl.tsx';


const Saira_Stencil = Saira_Stencil_One({ 
  weight: ['400'],
  subsets: ['latin'] 
});

const TagHadr = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }

`

const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 1.5rem;

`

const Header = () => {
  return (
    <TagHadr>
        <Logo className={Saira_Stencil.className}>
            Cappoteeno
        </Logo>
        <div>
            <IconInputSearch placeholder='Procurando por algo específico?'/>
            <CartControl/>
        </div>
    </TagHadr>
  )
}

export default Header