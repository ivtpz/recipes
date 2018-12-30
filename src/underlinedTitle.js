import React, { Component } from 'react';
import styled from 'styled-components';
import Measure from 'react-measure';
import underline from './images/underline1.png'
  
const UnderlinedText = styled.div`
  font-size: calc(20px + 1.6vmin);
  font-weight: 600;
  background: url(${underline}) no-repeat;
  background-position: 0 1.08em;
  padding-bottom: 20px;
  display: inline-block;
  width: fit-content;
  background-size: ${({ width }) => width}px;
`

class UnderlinedTitle extends Component {
  state = {
    dimensions: {
      width: -1
    }
  }
  render() {
    return (
      <Measure
        bounds
        onResize={contentRect => {
          console.log(contentRect)
          this.setState({ dimensions: contentRect.bounds })
        } }
      >
        {({ measureRef }) => (
          <UnderlinedText
            ref={measureRef}
            width={this.state.dimensions.width}
          >{this.props.children}</UnderlinedText>
        )}
      </Measure>
    );
  }
}

export default UnderlinedTitle;