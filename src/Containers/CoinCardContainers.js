
import CoinsCard from "../Components/CoinsCard"
import SearchCoinsForm from "../Components/SearchCoinsForm"
import { Grid,Image } from "semantic-ui-react"
import _ from 'lodash'


export default function coinCardContainer(props) {

    const renderCoinCard = () => {

        return props.coinData.map(coin => {
            return <CoinsCard coin={coin} likes={props.likes} increment={props.handleIncrement} decrement={props.handleDecrement}/>
        })
    }


    return (
        <div> 
            <Grid.Row>
                <div className="big-container">
                    <SearchCoinsForm className="searchCoins"  filterCoins={props.filterCoins} />
                    {renderCoinCard()}
                </div>
            </Grid.Row>
        </div>
    )
}

