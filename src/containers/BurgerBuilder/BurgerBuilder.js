import React, {Component} from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../containers/BurgerBuilder/BurgerBuilder'

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <Burger />
                <div>Build Controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder