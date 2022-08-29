import React, { Component } from 'react';
import './Home.css';
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>


class Home extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <div className="card mb-3">                            
                    <div className="card-body">
                                <h2 className="card-title">Bienvenido a Megalabs Picking App V1.0</h2>
                            </div>
                        <img className="card-img-top" src="https://megalabs.global/wp-content/uploads/2020/10/InfPlant.jpg" alt="Card image cap"/>

                    </div>
                </div>
            </div>
        )
    }
}
export default Home