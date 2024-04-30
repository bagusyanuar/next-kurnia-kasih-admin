'use client'

import React from 'react'
import styled from 'styled-components'
import SidebarBrand from './sidebar.brand'
import SidebarItem from './sidebar.item'

const Container = styled.div`
    height: 100vh;
    width: 250px;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 1rem 1rem;

    img {
        width: 120px;
        height: auto;
    }
`

const ItemContaier = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`

const Sidebar = () => {
    return (
        <Container>
            <SidebarBrand />
            <ItemContaier>
                <SidebarItem to='/dashboard' text='Dashboard' icon='ri-dashboard-fill' />
                <SidebarItem to='/category' text='Category' icon='ri-price-tag-line' />
                <SidebarItem to='/product' text='Product' icon='ri-motorbike-line' />
            </ItemContaier>
        </Container>
    )
}

export default Sidebar