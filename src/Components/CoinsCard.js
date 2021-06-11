import InputForm from "./InputForm"
import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'


export default function cards({ coin, likes, increment }) {

    return (
        <section>
            <div className="coin">
                <div className="coinBG">
                    <Card.Group id="coinsCard">
                        <Card>
                            <Image src={coin.image} wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>{coin.name}</Card.Header>
                                <Card.Description>
                                    24 Hour High: ${coin.high_24h}
                                    <br></br>
                                    24 Hour Low: ${coin.low_24h}
                                    <br></br>
                                </Card.Description>
                                <h3><InputForm /></h3> <Button onClick={() => increment()}>likes:{likes}</Button>
                            </Card.Content>
                        </Card>
                    </Card.Group>
                </div>
            </div>
        </section>
    )
}
