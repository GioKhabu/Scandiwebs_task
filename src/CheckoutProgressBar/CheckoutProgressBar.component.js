import { Component } from "react";

import './CheckoutProgressBar.styles.scss'



class CheckoutProgressBar extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            steps: []
        }
    }

    componentDidMount() {
        const newSteps = this.props.step.map((items, index) => {
            // console.log(items)
            return [items[0], {activeStatus: 'notActive'}]
        })
        newSteps[0][1].activeStatus = 'active'
        this.setState({steps: newSteps})
    }

    componentDidUpdate(prevProps) {
        // console.log(this.props.routeName)
        if(prevProps.routeName !== this.props.routeName) {
            const activeRouteIndex = this.state.steps.findIndex((item, index) => {
                // console.log(item[1])
                const itemName = item[0].split('_').slice(0, 1).join(" ").toLowerCase();
                if(index < this.state.steps.length-1) {
                    return itemName === this.props.routeName
                } else if (index === this.state.steps.length-1){
                    return itemName === "details"
                }
            })
            console.log(activeRouteIndex)
            const newStep = this.state.steps
            newStep[activeRouteIndex][1].activeStatus = 'active'
            this.setState({steps: newStep})
        }

    }


    render() {

        // console.log(activeRouteIndex)
        // console.log(this.props)
        return (
            <div className="checkout-progress-bar-container">
                 {this.state.steps.map((stepItem, index) => {
                    const stepName = stepItem[0].split('_').slice(0, 1).join(" ").toLowerCase();
                    // console.log(stepItem[1])
                    console.log(stepItem[0])

                    console.log(stepName)

                    
                    return (
                        <div key={index} className='checkout-progress-bar-items' >
                            <div className={`checkout-progress-bar-line ${stepItem[1].activeStatus}`}/>
                            {index < this.props.step.length -1 ? 
                            <div className={`checkout-progress-bar-status`}>
                                {index < this.props.step.length -1 ? <div className={`checkout-progress-bar-symbol ${stepItem[1].activeStatus}`}>{index + 1}</div> : null}
                                {index < this.props.step.length -1 && <strong className="checkout-progress-bar-name">{stepName}</strong>}
                            </div>: null}
                            
                        </div>
                    )
                 })}

            </div>
        )
    }

}

export default CheckoutProgressBar