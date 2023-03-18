import { Component } from "react";

import './CheckoutProgressBar.styles.scss'



class CheckoutProgressBar extends Component {
    constructor(props) {
        super(props)
        this.state = {steps: []}
    }
    componentDidMount() {
        const urlNames = this.props.step.map(item => {
            return item[1].url.slice(1)
        })

const newSteps1 = urlNames.map((items) => {
    return {step: items, activeStatus: 'notActive'}
})
        newSteps1[0].activeStatus = 'active'
        this.setState({steps: newSteps1})
    }

    componentDidUpdate(prevProps) {
        if(prevProps.routeName !== this.props.routeName) {
            const newStep = this.state.steps.map((item) => {
                return item.step === this.props.routeName ? {...item, activeStatus: 'active'} : item
            })
            this.setState({steps: newStep})
        }
    }

    render() {
        return (
            <div className="checkout-progress-bar-container">
                 {this.state.steps && this.state.steps.map((stepItem, index) => {
                    return (
                        <div key={index} className='checkout-progress-bar-items' >
                            <div className={`checkout-progress-bar-line ${stepItem.activeStatus}`}/>
                            {index < this.props.step.length -1 ? 
                            <div className={`checkout-progress-bar-status`}>
                                {index < this.props.step.length -1 ? <div className={`checkout-progress-bar-symbol ${stepItem.activeStatus}`}>{index + 1}</div> : null}
                                {index < this.props.step.length -1 && <strong className="checkout-progress-bar-name">{stepItem.step}</strong>}
                            </div>: null}
                        </div>
                    )
                 })}
            </div>
        )
    }
}

export default CheckoutProgressBar