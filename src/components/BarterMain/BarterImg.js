import React, { Component } from 'react';
import firebase from './../../fire';
import axios from 'axios';
import { getBarterImg } from './../../ducks/ProfileCreatorReducer';
import { connect } from 'react-redux';




class BarterImg extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            file: '',
            imagePreview: ''
        };

        this.handlePreview = this.handlePreview.bind(this);
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

    handleUpload(){
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
        this.props.getBarterImg(uploadTask.snapshot.downloadURL)
      },
    );
  }

  render() {
    console.log(this.props)
    return (
      <div>
        
    

        {this.state.imagePreview && <img src={this.state.imagePreview} />}

        <input
          placeholder="Barter Upload"
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

  export default connect( mapStateToProps, { getBarterImg } )( BarterImg );

