import {Checkout as SourceCheckout} from 'SourceRoute/Checkout/Checkout.component';
import ContentWrapper from 'Component/ContentWrapper';
import CheckoutProgressBar from 'Src/CheckoutProgressBar/CheckoutProgressBar.component';

export class Checkout extends SourceCheckout {
       

    render() {
        return      (
        <main block="Checkout">
            <CheckoutProgressBar 
            routeName={this.props.match.params.step}
            step={Object.entries(this.stepMap)}
            />
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>)
    }

}

export default Checkout