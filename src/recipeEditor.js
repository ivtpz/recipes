import React from 'react'
import classNames from 'classnames'
import Dropzone from 'react-dropzone'
import styled from 'styled-components';
import ImageCropDialog from './imageCropDialog';

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
  state = {
    uploadedImage: null
  }
  onDrop = (acceptedFiles, rejectedFiles) => {
     // Do something with files
     console.log(acceptedFiles)
     this.setState({ uploadedImage: acceptedFiles[0] })
  }

  clearUploadedImage = () => {
    this.setState({ uploadedImage: null })
  }

  

  render() {
    return (
      <>
      {this.state.uploadedImage &&
        <ImageCropDialog 
          onClose={this.clearUploadedImage}
          image={this.state.uploadedImage}
          id={this.props.match.params.id}
        />
      }
      <Dropzone onDrop={this.onDrop} accept="image/*" multiple={false}>
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
                  <p>Drop a main image here, or click to select a file to upload.</p>
              }
            </Container>
          )
        }}
      </Dropzone>
      </>
    );
  }
}

export default RecipeEditor;
