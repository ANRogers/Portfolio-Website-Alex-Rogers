import communities_events_friends from '../../assets/UniHub/Communities_Events_Friends.PNG'
import communitiesEvents from '../../assets/UniHub/CommunityEvents.PNG'
import communitiesPage from '../../assets/UniHub/CommunityPage.PNG'
import homePost from '../../assets/UniHub/HomePost.PNG'
import loginPage from '../../assets/UniHub/LoginPage.PNG'
import registgerPage from '../../assets/UniHub/RegisterPage.PNG'
import uniHubHome from '../../assets/UniHub/UniHubHome.PNG'
import uniProfilePage from '../../assets/UniHub/UniProfilePage.PNG'
import uniUsersPosts from '../../assets/UniHub/UniUsersPosts.PNG'

export default function UniSocialWeb(){
    return(
        <div className="offcanvas offcanvas-end options-tabs" tabIndex="-1" id="University-Social-Media-Website">
                <div className="offcanvas-header gradient">
                    <h5>University Social Media Website</h5>
                    <button type="button" className="btn-close" data-bs-toggle="offcanvas"
                    data-bs-target="#Projects"
                    aria-controls="Projects" />
                </div>
                <div className="offcanvas-body">
                    <img src={communities_events_friends} className='displayimgsmall' />
                    <img src={communitiesEvents} className='displayimgsmall' />
                    <img src={communitiesPage} className='displayimgsmall' />
                    <img src={homePost} className='displayimgsmall' />
                    <img src={loginPage} className='displayimgsmall' />
                    <img src={registgerPage} className='displayimgsmall' />
                    <img src={uniHubHome} className='displayimgsmall' />
                    <img src={uniProfilePage} className='displayimgsmall' />
                    <img src={uniUsersPosts} className='displayimgsmall' />
                </div>
                </div>
    )
}