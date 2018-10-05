import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import House from '../house/House';

class Dashboard extends Component{
    constructor(){
        super()

        this.state = {
            list: []
        }
    }

    componentDidMount() {
        axios.get('/api/houses')
        .then( response => {
            console.log(response)
            this.setState({
                list: response.data
            })
        })
        .catch( err => console.log( err )
        )
    }
    render() {
        let houses = this.state.list.map(( house, i ) => {
            return  <House
                {...house}
                house={ house }
                key={ i }
                /> 
        })
        return(
            <div>
                <h1>Dashboard</h1>
                <Link to='/wizard' className='links'>
                <button>Add Property</button>
                </Link>
                { houses }
            </div>
        )
    }
}

export default Dashboard;