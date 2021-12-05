import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import InputAdornment from '@material-ui/core/InputAdornment';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import axios from "axios";



class Upload extends Component {
    state = {

        // Initially, no file is selected
        selectedFile: null,
        fileUploaded: false
    };

    // On file select (from the pop up)
    onFileChange = event => {

        // Update the state
        this.setState({ selectedFile: event.target.files[0] });

    };

    // On file upload (click the upload button)
    onFileUpload = () => {

        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append(
            "image",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        // Details of the uploaded file
        console.log(this.state.selectedFile);

        // Request made to the backend api
        // Send formData object
        axios.post("http://localhost:8888/api/upload", formData, { headers: { "auth-token": localStorage.token } }).then(resp => {
            this.setState({ fileUploaded: true });
        });
    };

    // File content to be displayed after
    // file upload is complete
    fileData = () => {

        if (this.state.selectedFile) {

            return (
                <div>
                    <h2>Details de fichier:</h2>
                    <p>Nom du fichier: {this.state.selectedFile.name}</p>
                    <p>Type du fichier: {this.state.selectedFile.type}</p>
                    <p>
                        Derniere modification :{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>

                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Merci de choisir un fichier avant de cliquer sur Upload</h4>
                </div>
            );
        }
    };


    render() {
        return (
            <div className="container" >
                <div className="jumbotron" style={{ backgroundColor: "#fafafa" }}>

                    <Container fixed style={{ paddingTop: 50 }}>
                        {this.state.fileUploaded ?
                            <div className="alert alert-success">
                                Fichier uploadé
                            </div> : (<div></div>)
                        }
                        <div>
                            <h1>
                               Le Service Upload
                            </h1>
                            <h3>
                                Ce service vous permet d'uploader une nouvelle photo de profil
                            </h3>
                            <div>
                                <input type="file" accept="image/*" onChange={this.onFileChange} />
                                <button onClick={this.onFileUpload}>
                                    Upload!
                                </button>
                            </div>
                            {this.fileData()}
                        </div>

                    </Container>
                </div>
            </div>
        );
    }
}

export default Upload;