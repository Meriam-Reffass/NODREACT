import React, { Component } from "react";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import axios from "axios";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            loading : false,
            errors : {},
            open:false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.setState = this.setState.bind(this);
    }

    componentDidMount(){
        if(localStorage.token){
            this.props.history.push("/");
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };


    onSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:8888/register", {
            firstName: this.state.firstname,
            lastName: this.state.lastname,
            email: this.state.email,
            password: this.state.password
        }).then((response) => {
            localStorage.setItem('token',response.data.token);
            window.location.reload();
        });

    };

    render() {

        return (
            <div >
                <Snackbar
                 anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                    }}
                autoHideDuration={6000}

                  open={this.state.open}
                >
                    <SnackbarContent 
                  message="The server is shut, please contact the developer to turn it on."
                  action ={<Button color="secondary" size="small">CONTACT </Button>}  />
                </Snackbar>
                <Container small="true" >
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={5}
                        style={{ minHeight: "100vh" }}
                    >
                        <Grid item xs={4}>
                            <Card>
                                <CardContent>
                                    <form onSubmit={this.onSubmit}>
                                        <Typography
                                            variant="h5"
                                            style={{
                                                color: "#4993D1"
                                            }}
                                        >
                                            Sign Up 
                                        </Typography>

                                        <FormControl
                                            error={!!this.state.errors.firstname}
                                            className="w-100 my-4"
                                        >
                                            <InputLabel htmlFor="email">
                                                Firstname
                                            </InputLabel>
                                            <Input
                                                id="firstname"
                                                name="firstname"
                                                label="Firstname"
                                                value={this.state.firstname}
                                                onChange={this.onChange}
                                                required
                                                aria-describedby="firstname-error-text"
                                            />
                                            <FormHelperText id="firstname-error-text">
                                                {this.state.errors.firstname}
                                            </FormHelperText>
                                        </FormControl>
                                        <FormControl
                                            error={!!this.state.errors.lastname}
                                            className="w-100 mb-4"
                                        >
                                            <InputLabel htmlFor="lastname">
                                                Lastname
                                            </InputLabel>
                                            <Input
                                                id="lastname"
                                                name="lastname"
                                                label="Lastname"
                                                value={this.state.lastname}
                                                onChange={this.onChange}
                                                required
                                                aria-describedby="lastname-error-text"
                                            />
                                            <FormHelperText id="lastname-error-text">
                                                {this.state.errors.lastname}
                                            </FormHelperText>
                                        </FormControl>

                                        <FormControl
                                            error={!!this.state.errors.email}
                                            className="w-100 mb-4"
                                        >
                                            <InputLabel htmlFor="email">
                                                Email
                                            </InputLabel>
                                            <Input
                                                id="email"
                                                name="email"
                                                label="email"
                                                value={this.state.email}
                                                onChange={this.onChange}
                                                required
                                                aria-describedby="email-error-text"
                                            />
                                            <FormHelperText id="email-error-text">
                                                {this.state.errors.email}
                                            </FormHelperText>
                                        </FormControl>
                                        <FormControl
                                            error={!!this.state.errors.password}
                                            className="w-100 mb-4"
                                        >
                                            <InputLabel htmlFor="password">
                                                Password
                                            </InputLabel>
                                            <Input
                                                id="password"
                                                name="password"
                                                label="Password"
                                                type="password"
                                                value={this.state.password}
                                                onChange={this.onChange}
                                                required
                                                aria-describedby="password-error-text"
                                            />
                                            <FormHelperText id="password-error-text">
                                                {this.state.errors.password}
                                            </FormHelperText>
                                        </FormControl>


                                        <Button
                                            type="submit"
                                            variant="contained"
                                            margin="normal"
                                            disabled={this.state.loading}
                                        >
                                            {this.state.loading ? "LOADING..." : "Sign Up" }
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </Grid>
                        
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default Register;
