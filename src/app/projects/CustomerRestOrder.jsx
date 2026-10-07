import CustHomePage from '../../assets/CustRest/CustHomePage.PNG'
import CustomerBasket from '../../assets/CustRest/CustomerBasket.PNG'
import MenuOrderCustomer from '../../assets/CustRest/MenuOrderCustomer.PNG'
import ProfilePageCust from '../../assets/CustRest/ProfilePageCust.PNG'
import RerserveAvalabilityCust from '../../assets/CustRest/RerserveAvalabilityCust.PNG'
import ReserveCust from '../../assets/CustRest/ReserveCust.PNG'


export default function CustomerRestOrder(){
    return(
        <div className="offcanvas offcanvas-end options-tabs" tabIndex="-1" id="Customer-Restaurant-Order-Website">
        <div className="offcanvas-header gradient">
            <h5>Customer Restaurant Order Website</h5>
            <button type="button" className="btn-close" data-bs-toggle="offcanvas"
            data-bs-target="#Projects"
            aria-controls="Projects" />
        </div>
        <div className="offcanvas-body">
            <div className='programlangbox'>
                <div className="btn link-btn">
                    <i className="fa-brands fa-python"></i> Python
                </div>

                <div className="btn link-btn">
                    <i className="fa-solid fa-flask"></i> Flask
                </div>

                <div className="btn link-btn">
                    <i className="fa-brands fa-html5"></i> HTML
                </div>

                <div className="btn link-btn">
                    <i className="fa-brands fa-css3-alt"></i> CSS
                </div>
            </div>
            <p>
                This project was developed as an extension to the university restaurant's
                existing EPOS system. The aim was to provide customers with a simple
                website where they could browse the restaurant's menu, place their own
                orders, and make reservations without needing to contact staff directly.
            </p>

            <img src={CustHomePage} className='displayimgsmall'/>

            <p>
                The website included a customer account system, allowing users to log in
                and manage their details. Customers could also view the available menu
                items and select the food and drinks they wanted to order.
            </p>

            <img src={MenuOrderCustomer} className='displayimgsmall'/>

            <p>
                Once items had been selected, customers could review their order through
                the basket before submitting it. Orders were then passed through to the
                restaurant's EPOS system, allowing staff in the kitchen to receive and
                prepare customer orders without having to manually enter them.
            </p>

            <img src={CustomerBasket} className='displayimgsmall'/>

            <p>
                The system also provided customers with a profile page where they could
                manage their account information and view their details.
            </p>

            <img src={ProfilePageCust} className='displayimgsmall'/>

            <p>
                In addition to ordering food, the website included a reservation system.
                Customers could check which times were available and select a suitable
                time for their visit.
            </p>

            <img src={ReserveCust} className='displayimgsmall'/>

            <p>
                After selecting an available time, customers could submit their
                reservation through the website. This reduced the need for customers to
                call the restaurant and gave staff a centralised way of receiving
                reservations.
            </p>

            <img src={RerserveAvalabilityCust} className='displayimgsmall'/>

            <p>
                The project was developed using Python with Flask for
                the backend, alongside HTML and CSS for the frontend.
                The project also required integration with the existing restaurant EPOS
                system so that online orders could be passed through to the restaurant
                workflow.
            </p>

            <div className="link-btn-wrapper">
                <a
                href="https://github.com/ANRogers/Hoizon-Restaurant-Customer-Website"
                target="_blank"
                rel="noopener noreferrer"
                className="btn link-btn"
                >
                <i className="bi bi-github"></i> View on GitHub
                </a>
            </div>

        </div>
        </div>
    )
}