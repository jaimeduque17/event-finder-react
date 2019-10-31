import React, { Component } from 'react';
import axios from 'axios';

const ContextEvents = React.createContext();
export const ConsumerEvents = ContextEvents.Consumer;

class ProviderEvents extends Component {

    token = '5552HWP7QP3QTNQEAEWA';
    sort = 'date';

    state = {
        events: []
    }

    getEvents = async (search) => {
        let url = `https://www.eventbriteapi.com/v3/events/search/?q=${search.name}&categories=${search.category}&sort_by=${this.sort}&token=${this.token}&locale=us_EN`;

        // Consult an API with the url
        let events = await axios.get(url);

        this.setState({
            events: events.data.events
        })
    }

    render() {
        return (
            <ContextEvents.Provider
                value={{
                    events: this.state.events,
                    getEvents: this.getEvents
                }}
            >
                {this.props.children}
            </ContextEvents.Provider>
        );
    }
}

export default ProviderEvents;