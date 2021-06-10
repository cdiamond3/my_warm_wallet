import InputForm from "./InputForm"
import React from 'react'
import { Card, Image } from 'semantic-ui-react'


export default function cards({ coin }) {

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
                                </Card.Description>
                        <h3><InputForm /></h3>
                            </Card.Content>
                        </Card>
                    </Card.Group>
                </div>
            </div>
        </section>
    )
}
