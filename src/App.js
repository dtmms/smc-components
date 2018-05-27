import React from 'react'

import {ContentCentered, ContentHeader, ContentWrapper, ModalButton} from 'attainia-web-components'

const App = () =>
    <ContentWrapper>
        <ContentHeader hasAddButton />
        <ContentCentered>
            <h1>Welcome to our site!</h1>
        </ContentCentered>
        <ContentCentered>
            <ModalButton />
        </ContentCentered>
    </ContentWrapper>

export default App
