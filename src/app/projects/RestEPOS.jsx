import MakeReservation from '../../assets/RestEPOS/MakeReservation.PNG'
import ReservationAvalabilityBookingPage from '../../assets/RestEPOS/ReservationAvalabilityBookingPage.PNG'
import RestHome from '../../assets/RestEPOS/RestHome.PNG'
import RestInventoryPage from '../../assets/RestEPOS/RestInventoryPage.PNG'
import RestMenuOrder from '../../assets/RestEPOS/RestMenuOrder.PNG'
import RestSalesReport from '../../assets/RestEPOS/RestSalesReport.PNG'
import RestViewOrders from '../../assets/RestEPOS/RestViewOrders.PNG'

export default function RestEPOS(){
    return(
        <div className="offcanvas offcanvas-end options-tabs" tabIndex="-1" id="Restaurant-EPOS-System">
            <div className="offcanvas-header gradient">
                <h5>Restaurant EPOS System</h5>
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
                        <i className="fa-solid fa-window-maximize"></i> Tkinter
                    </div>
                </div>

                <p>
                    This project was the development of a complete EPOS (Electronic Point of Sale)
                    application for a university restaurant. The system was designed to provide
                    restaurant staff with the tools they needed to carry out their individual
                    roles, while keeping the restaurant's orders, reservations, inventory and
                    sales information within one system.
                </p>

                <img src={RestHome} className='displayimgsmall'/>

                <p>
                    A key part of the system was its role-based permission system. Different
                    employees were given access to different areas depending on their role within
                    the restaurant. For example, front-of-house staff could access the ordering
                    system, while kitchen staff could view incoming orders. Managers could access
                    reports and analytics, while senior staff could manage areas such as the menu
                    and inventory.
                </p>

                <img src={RestMenuOrder} className='displayimgsmall'/>

                <p>
                    The ordering section allowed staff to create and manage customer orders,
                    providing the front-of-house team with a dedicated interface for taking
                    orders and sending them through to the kitchen.
                </p>

                <img src={RestViewOrders} className='displayimgsmall'/>

                <p>
                    Kitchen staff could then view incoming orders and keep track of the food
                    that needed to be prepared. Separating this functionality from the ordering
                    interface helped ensure that each member of staff was presented with the
                    information relevant to their role.
                </p>

                <img src={RestInventoryPage} className='displayimgsmall'/>

                <p>
                    The system also included an inventory management section, allowing authorised
                    staff to keep track of the restaurant's stock. This provided a central place
                    for managing inventory alongside the rest of the restaurant's operations.
                </p>

                <img src={MakeReservation} className='displayimgsmall'/>

                <p>
                    Reservations were also handled through the EPOS system. Staff could create
                    reservations on behalf of customers and manage bookings directly through the
                    application.
                </p>

                <img src={ReservationAvalabilityBookingPage} className='displayimgsmall'/>

                <p>
                    The reservation system included an availability view, allowing staff to
                    check which times were available before making a booking and helping to
                    prevent conflicting reservations.
                </p>

                <img src={RestSalesReport} className='displayimgsmall'/>

                <p>
                    Managers were provided with access to sales reports and analytics. This
                    allowed restaurant management to review sales information and gain a better
                    understanding of the restaurant's performance.
                </p>

                <p>
                    The application was developed using Python and Tkinter.
                    The project focused heavily on designing a practical user interface around
                    the different workflows of a restaurant, while using permissions to ensure
                    that employees only had access to the functionality required for their role.
                </p>

            </div>
        </div>
)
}