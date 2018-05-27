import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wheel = ({
    dimensions,
    styles
}) =>
    <div>
    </div>

Wheel.propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    dimensions: PropTypes.shape({
        height: PropTypes.number,
        width: PropTypes.number
    }),
    styles: PropTypes.shape({
        baseColor: PropTypes.string,
        fontColor: PropTypes.string,
        fontSizeAndFace: PropTypes.string
    })
}

Wheel.defaultProps = {
}

export default Wheel
