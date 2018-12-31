import React from 'react'
import classNames from 'classnames'
import Dropzone from 'react-dropzone'
import styled from 'styled-components';

const getColor = (props) => {
  if (props.isDragReject) {
      return '#c66';
  }
  if (props.isDragActive) {    
      return '#6c6';
  } 
  return '#666';
};

const Container = styled.div`
  width: 200px;
  height: 200px;
  border-width: 2px;
  border-radius: 5px;
  border-color: ${props => getColor(props)};
  border-style: ${props => props.isDragReject || props.isDragActive ? 'solid' : 'dashed'};
  background-color: ${props => props.isDragReject || props.isDragActive ? '#eee' : ''};
`;

class RecipeEditor extends React.Component {
   onDrop = (acceptedFiles, rejectedFiles) => {
     // Do something with files
     console.log(acceptedFiles)
   }

   render() {
    return (
      <Dropzone onDrop={this.onDrop} accept="image/*">
        {({getRootProps, getInputProps, isDragActive, isDragReject}) => {
          return (
            <Container
              isDragActive={isDragActive}
              isDragReject={isDragReject}
              {...getRootProps()}
              className={classNames('dropzone', {'dropzone--isActive': isDragActive})}
            >
              <input {...getInputProps()} />
              {
                isDragActive ?
                  <p>{isDragReject ? 'Only images are accepted' : 'Drop files here...'}</p> :
                  <p>Drop an image here, or click to select files to upload.</p>
              }
            </Container>
          )
        }}
      </Dropzone>
    );
  }
}

export default RecipeEditor;
