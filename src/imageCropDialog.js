import React, { Component } from 'react';
import { Dialog, DialogTitle, DialogActions, Button } from '@material-ui/core';
import ReactCrop from 'react-image-crop';
import styled from 'styled-components';

const ImageCrop = styled(ReactCrop)`

`;

class ImageCropDialog extends Component {
  state = {
    open: true,
    crop: {
      aspect: 5/2
    }
  }

  setCrop = (crop) => {
    this.setState({ crop })
  }

  closeDialog = () => {
    this.props.onClose();
    this.setState({ open: false })
  }

  saveImage = () => {
    fetch("http://localhost:5000/image", {
      method: 'post',
      body: {
        image: this.props.image,
        crop: this.state.crop,
        recipeId: this.props.id
      }
    })
  }

  render() {
    return (
      <Dialog
        open={this.state.open}
      >
        <DialogTitle id="alert-dialog-title">
          Click and drag to crop your main image
        </DialogTitle>
        <ImageCrop 
          src={URL.createObjectURL(this.props.image)}
          crop={this.state.crop}
          onChange={this.setCrop}
        />
        <DialogActions>
          <Button onClick={this.closeDialog}>Cancel</Button>
          <Button onClick={this.saveImage}>Save</Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default ImageCropDialog;
