import React, { Component } from 'react';

import { ConsumerCategories } from '../context/ContextCategories';
import { ConsumerEvents } from '../context/ContextEvents';

class Form extends Component {
    state = {
        name: '',
        category: ''
    }

    // If the user add an event or category
    getEventData = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <ConsumerEvents>
                {(value) => {
                    return (
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                value.getEvents(this.state);
                            }}
                        >
                            <fieldset className="uk-fieldset uk-margin">
                                <legend className="uk-legend uk-text-center">
                                    Search your event by Name or Category
                    </legend>
                            </fieldset>
                            <div className="uk-column-1-3@m uk-margin">
                                <div className="uk-margin" uk-margin="true">
                                    <input
                                        name="name"
                                        className="uk-input"
                                        type="text"
                                        placeholder="Event or City Name"
                                        onChange={this.getEventData}
                                    />
                                </div>
                                <div className="uk-margin" uk-margin="true">
                                    <select
                                        className="uk-select"
                                        name="category"
                                        onChange={this.getEventData}
                                    >
                                        <option value="">--Select a Category--</option>
                                        <ConsumerCategories>
                                            {(value) => {
                                                return (
                                                    value.categories.map(category => (
                                                        <option key={category.id} value={category.id} data-uk-form-select>
                                                            {category.name_localized}
                                                        </option>
                                                    ))
                                                )
                                            }}
                                        </ConsumerCategories>
                                    </select>
                                </div>
                                <div className="uk-margin" uk-margin="true">
                                    <input
                                        type="submit"
                                        className="uk-button uk-button-danger"
                                        value="Search Events"
                                    />
                                </div>
                            </div>
                        </form>
                    )
                }}
            </ConsumerEvents>
        );
    }
}

export default Form;