import React, { Component } from "react";
import Container from "@material-ui/core/Container";



class Home extends Component {
    constructor() {
        super();



    }




    render() {
        return (
            <div className="container" style={{marginTop:"5%"}}>
                <div className="jumbotron" style={{ backgroundColor: "#fafafa" }}>
                    <Container fixed style={{ paddingTop: 100 }}>


                        <p>
                            c'est application react represente un front-end pour une api realisée en NODEjs / Express
                        </p>

                    </Container>
                </div>
            </div>
        );
    }
}

export default Home;