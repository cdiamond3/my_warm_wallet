import React from 'react'
import { Form, Button } from "semantic-ui-react"

export default function SearchCharacterForm({filterCoins}) {

    return (
        <Form>
            <label>Search coin by name:   </label>
            <input type="text" onChange={filterCoins}></input>
            <Button> Search </Button>
            <hr></hr>
        </Form>
    )
}
