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



class Show extends Component {
    constructor() {
        super();

        this.state = {
            open: false,
            errors: {},
            image: null,
            loading: true
        };

        this.setState = this.setState.bind(this);
    }


    componentDidMount() {
        console.log(localStorage.getItem("token"))
        if (!localStorage.token)
            this.props.history.push("/login");
        else {
            axios.get("http://localhost:8888/api/show", { headers: { "auth-token": localStorage.token }, responseType: 'blob' }).then(
                (response) => {
                    this.setState({ image: response.data })
                    this.setState({ loading: false })
                }
            )
        }
    }

    render() {
        return (
            <div style={{ backgroundColor: "#fafafa" }}>
                <Container fixed style={{ paddingTop: 100 }}>
                <Typography variant="h4" >
                        le service Show
                    </Typography>
                    <hr></hr>

                    {this.state.loading ? (<p>Loading...</p>) :
                        <div >
                            
                            <img  className="img-thumbnail rounded " style={{maxHeight:"350px"}} src={URL.createObjectURL(this.state.image)} />

                        </div>

                    }


                </Container>
            </div>
        );
    }
}

export default Show;