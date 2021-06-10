import React, { Component } from 'react'
import { Form, Button, Icon } from "semantic-ui-react"

export default class inputForm extends Component {
    state = {
        userInputValue: ""
    }

    handleUserSubmit = (e) => {
        this.setState({ userInputValue: e.target.value })
        console.log(this.state.userInputValue)
    }


    render() {
        return (
            <div>
                <Form>
                    <input
                        placeholder="Amount Purchased"
                        type="text"
                        value={this.state.userInputValue}
                        onChange={this.handleUserSubmit}>
                    </input>
                    <Button animated>
                        <Button.Content visible>Add To Portfolio </Button.Content>
                        <Button.Content hidden>
                            <Icon name='dollar sign' />
                        </Button.Content>
                    </Button>
                </Form>
            </div>
        )
    }
}
