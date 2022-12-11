import {useEffect} from 'react';
import './IndexPage.css';
import Header from './Header';

const IndexPage = () => {
    return (
        <div>
            {/* Mobile view */}
            <div className='mobile-content'>
                <div className='mobile-logo-section'></div>
            </div>
            {/* pc view */}
            <div className='pc-content'>
                <Header/>
                <div className='pc-index-section'>
                    <div className='pc-index-title'>Join JustScanIt improve your income as a seller and save time</div>
                    <p type="text" className="pc-index-description">We provide tools to automate the purchase, customers will only have to scan their own purchase and pay automatically from their mobile by themselves</p>
                </div>
                <div className='pc-index-inputs'>
                    <input type="text" name="company-name" placeholder='Company Name'/>
                    <input type="text" name="email-address" placeholder='Email Address'/>
                </div>

            </div>

        </div>
    );
}
export default IndexPage;