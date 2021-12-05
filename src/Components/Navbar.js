import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import Grid from "@material-ui/core/Grid";

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            open: localStorage.token ? true : false
        };
    }

    onSubmit = e => {
        e.preventDefault();
        localStorage.removeItem('token');
        window.location.reload();
        this.setState({ open: false });
    };


    render() {
        return (
            <div>
                <AppBar
                    position="fixed"
                    className="shadow-none bg-white border-bottom p-0 m-0"

                >
                    <Container fixed>
                        <Toolbar className="p-0 m-0">
                            <Typography variant="h4" component={Link} to="/">
                                NODREACT
                            </Typography>


                            {this.state.open ? (
                                <div className="ml-auto">
                                    <Button
                                        style={{
                                            backgroundColor: "white",
                                            color: "#4993D1"
                                        }}
                                        component={Link}
                                        to="/show"                                    >
                                        Show
                                    </Button>
                                    <Button
                                        style={{
                                            backgroundColor: "white",
                                            color: "#4993D1"
                                        }}
                                        component={Link}
                                        to="/upload"                                    >
                                        Upload
                                    </Button>
                                    <Button
                                        style={{
                                            backgroundColor: "white",
                                            color: "#4993D1"
                                        }}
                                        component={Link}
                                        to="/find"                                    >
                                        Find
                                    </Button>

                                    <Button
                                        style={{
                                            backgroundColor: "white",
                                            color: "#4993D1"
                                        }}
                                        onClick={this.onSubmit}
                                    >
                                        Logout
                                    </Button>
                                </div>
                            ) : (<div className="ml-auto">
                                <Button
                                    style={{
                                        backgroundColor: "white",
                                        color: "#4993D1"
                                    }}
                                    component={Link}
                                    to="/login"
                                >
                                    Login
                                </Button>
                                <Button
                                    style={{
                                        backgroundColor: "#4993D1",
                                        color: "white"
                                    }}
                                    component={Link}
                                    to="/register"
                                    className="ml-2"
                                >
                                    Sign Up
                                </Button>
                            </div>


                            )}


                        </Toolbar>
                    </Container>
                </AppBar>
            </div>
        );
    }
}

export default Navbar;
