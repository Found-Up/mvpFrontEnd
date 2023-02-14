import React from 'react';
import { SRUHeader } from '../../organisms/Headers/SRUHeader';
import { Footer } from '../../organisms/Footer/Footer';
import { CompanyKPICard } from '../../organisms/CompanyKPICard/CompanyKPICard';
import './homepage.css';
import { QuestionPoster } from '../../organisms/QuestionPoster/QuestionPoster';
import { QuestionFeedItem } from '../../molecules/QuestionFeedItem/QuestionFeedItem';
import { FeedItem } from '../../molecules/FeedItem/FeedItem';

type HomePageProps = {
    user: string,
    graphs: string[],
}

export const HomePage = ({user, graphs}: HomePageProps) => {
    return (
        <div>
            <SRUHeader links={['Home', 'Messages', 'Profile', 'Notifications']}></SRUHeader>
            <div className='HomePage-Body'>
                <div className='HomePage-Activity'>
                    <QuestionPoster expanded={false} />
                    {/* TODO: Make this dynamic to load with data */}
                    <div className='HomePage-ActivityFeed'>
                        Your Recent
                        <QuestionFeedItem 
                            status='Active' 
                            timeRemaining='2 hours' 
                            bookmarked={true}
                            question='Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum?'
                            responses={10}
                            unread={10}
                            starred={2}
                            repeats={2}
                            open={false} />
                        <QuestionFeedItem 
                            status='Active' 
                            timeRemaining='2 hours' 
                            bookmarked={false}
                            question='Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum?'
                            responses={10}
                            unread={10}
                            starred={2}
                            repeats={2}
                            open={false} />
                        <QuestionFeedItem 
                            status='Active' 
                            timeRemaining='2 hours' 
                            bookmarked={false}
                            question='Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum?'
                            responses={10}
                            unread={10}
                            starred={2}
                            repeats={2}
                            open={false} />
                        <QuestionFeedItem 
                            status='Complete' 
                            timeRemaining='2 hours' 
                            bookmarked={false}
                            question='Why is the sky blue'
                            responses={10}
                            unread={10}
                            starred={2}
                            repeats={2}
                            open={false} />
                        <a style={{color: '#737B7D', float: 'right'}} href="http://www.blankwebsite.com/">View All Questions</a>
                    </div>
                    <div className='HomePage-TrendingQuestions'>
                        Trending Questions
                        <FeedItem imgSrc={'https://via.placeholder.com/75'} feedActivity={'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum?'}/>
                        <FeedItem imgSrc={'https://via.placeholder.com/75'} feedActivity={'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum?'}/>
                    </div>
                </div>
                <div className='HomePage-Statistics'>
                    <div className='HomePage-KPIs'>
                        <CompanyKPICard graphLink={graphs[0]} companyName={user}></CompanyKPICard>
                        <CompanyKPICard graphLink={graphs[1]} companyName={user}></CompanyKPICard>
                        <CompanyKPICard graphLink={graphs[2]} companyName={user}></CompanyKPICard>
                    </div>
                    <div className='HomePage-Suggestions'>
                        <p>Suggestions</p>
                        <ul>
                            <li>Set up this page</li>
                            <li>Respond to people</li>   
                        </ul>
                    </div>
                    <div className='HomePage-Articles'>
                        <p>Articles</p>
                        <ul>
                            <li>Writing a good question</li>
                            <li>Responding to people</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer links={['Feature', 'Feature']}></Footer>
        </div>
    )
}