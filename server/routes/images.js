const AWS = require('aws-sdk');
const config = require('config');

const {
  aws: {
    imageBucketName: Bucket,
    region,
    identityPoolId: IdentityPoolId
  }
} = config;

AWS.config.update({
  region,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId
  })
});

var s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: { Bucket }
});

module.exports = (app) => {
  app.post('/image', (req, res) => {
    const { recipeId } = req.body;
    // Ensure parent album exists for recipe, then upload the photo
    s3.headObject({ Key: recipeId }, function(err, data) {
      if (!err) {
        // uploadPhotoToAlbum()
        console.log('album already exists')
        return // 'Album already exists.'
      }
      if (err.code !== 'NotFound') {
        res.status(500).send('There was an error creating your album: ' + err.message);
        return;
      }
      s3.putObject({ Key: recipeId }, function(err, data) {
        if (err) {
          res.status(500).send('There was an error creating your album: ' + err.message);
          return;
        }
        // uploadPhotoToAlbum()
        console.log('Successfully created album.');
      });
    });
  })
}