import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Wizard extends Component{
    constructor() {
        super()

        this.state = {
            propertyName: '',
            address: '',
            city: '',
            state: '',
            zip: '',
        }
        this.handleInput = this.handleInput.bind(this)
    }

    addHouse() {
        const { propertyName, address, city, state, zip } = this.state;
        axios.post('/api/addhouse', {propertyName, address, city, state, zip} )
        .then( response => {
            console.log(response.data);
            
            this.setState({
                propertyName: '',
                address: '',
                city: '',
                state: '',
                zip: ''
            })
        })
        .catch( err => {
            console.log( err );
        })
    }

    handleInput( event, property ) {
        this.setState({
            [property]: event.target.value
        })
    }



    render() {
        console.log(this.state);
        
        return(
            <div>
                <h1>Wizard</h1>
                <input 
                    placeholder='Enter a property type'
                    onChange={ (event) => this.handleInput( event, 'propertyName') }
                />
                <input 
                    placeholder='Enter property address'
                    onChange={ (event) => this.handleInput( event, 'address') }
                />
                <input 
                    placeholder='Enter city'
                    onChange={ (event) => this.handleInput( event, 'city') }
                />
                <input 
                    placeholder='Enter state'
                    onChange={ (event) => this.handleInput( event, 'state') }
                />
                <input 
                    placeholder='Enter zip code'
                    onChange={ (event) => this.handleInput( event, 'zip') }
                />
                <Link to='/'>
                    <button onClick={ e => this.addHouse( e.target.value )}>Add</button>
                </Link>
                <Link to='/' className='links'>
                <button>Cancel</button>
                </Link>
            </div>
        )
    }
}

export default Wizard;