import React from 'react';
import Event from './Event';

import { ConsumerEvents } from '../context/ContextEvents';

const EventsList = () => {
    return ( 
        <div className="uk-child-width-1-3@m" uk-grid="true">
            <ConsumerEvents>
                {(value) => {
                    return value.events.map(event => (
                        <Event
                            key={event.id}
                            event={event}
                        />
                    ))
                }}
            </ConsumerEvents>
        </div>
     );
}
 
export default EventsList;