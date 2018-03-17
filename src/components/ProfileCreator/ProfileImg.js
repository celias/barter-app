import React, { Component } from 'react';
import firebase from './../../fire';
import axios from 'axios';
import { getUserImg } from './../../ducks/ProfileCreatorReducer';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';


 class ProfileImg extends Component {
  constructor(props) {
    super(props);
    this.state = { file: '', imagePreview: '' };

    this.handlePreview = this.handlePreview.bind(this);
    // this.handleUpload = this.handleUpload.bind(this);
  }

  handlePreview(file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
         file: file[0],
         imagePreview: reader.result,

      }, () => this.handleUpload())};
    reader.readAsDataURL(file[0]);
  }

  handleUpload() {
    console.log("its got the fucking image!", this.state.file)
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef
      .child(`profilePictures/${this.state.file.name}`)
      .put(this.state.file);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        console.log(snapshot);
      },
      (error) => {},
      (success) => {
        console.log(uploadTask.snapshot.downloadURL)
        // console.log(this.props.getUserImg(uploadTask.snapshot.downloadURL))
        this.props.getUserImg(uploadTask.snapshot.downloadURL)
          // axios.put("/api/getUserImg", { userImg: uploadTask.snapshot.downloadURL })
          // .then(response => response.data)
          // .catch(console.log)
        // console.log(uploadTask.snapshot.downloadURL); // make put request
      },
    );
  }

  render() {
    console.log(this.props)
    return (
      <div>

        {this.state.imagePreview && <img src={this.state.imagePreview} />}

        <input
          placeholder="ImageUpload"
          type="file"
          onChange={(event) => {
            this.handlePreview(event.target.files)
					}}
        />

        
      </div>
    );
  }
}
function mapStateToProps( state ){
  return {
    user: state.user,
    form: state.form
  }
}


export default connect( mapStateToProps, { getUserImg } )( ProfileImg );