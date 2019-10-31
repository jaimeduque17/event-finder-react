import React, { Component } from 'react';
import axios from 'axios';

// Create context
const ContextCategories = React.createContext();
export const ConsumerCategories = ContextCategories.Consumer;

class ProviderCategories extends Component {

    token = '';

    state = { 
        categories: []
     }

    componentDidMount () {
        this.getCategories();
    }

    getCategories = async () => {
        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

        let categories = await axios.get(url);

        this.setState({categories: categories.data.categories})

    }

    render() { 
        return ( 
            <ContextCategories.Provider
                value={{categories: this.state.categories}}
            >
                {this.props.children}
            </ContextCategories.Provider>
         );
    }
}
 
export default ProviderCategories;