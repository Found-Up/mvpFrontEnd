import React from 'react';
import { NCUHeader } from '../../organisms/Headers/NCUHeader';
import { CompanyInfoBox } from '../../organisms/CompanyInfoBox/CompanyInfoBox';
import { MyButton } from '../../atoms/Buttons/MyButton';
import { Footer } from '../../organisms/Footer/Footer';
import './videosubmissionpage.css';
import { Button } from '../../atoms/Buttons/Button';
import { ReactMediaRecorder, useReactMediaRecorder } from 'react-media-recorder';
import VideoRecorder from 'react-video-recorder';


type VideoSubmissionProps = {
    user: string;
};

const RecordView = () => {
    const { 
        status, startRecording, stopRecording, mediaBlobUrl 
    } = useReactMediaRecorder({
        video: true
    });

    return (
        <div>
            <p>{status}</p>
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
            <video src={mediaBlobUrl} width={513} height={953} controls autoPlay loop />
        </div>
    );
};



export const VideoSubmissionPage = ({user}: VideoSubmissionProps) => {

    
    return (
        <div>
            <NCUHeader links={['Home','Messages','Profile','Notifications']}></NCUHeader>
            <div className='VidSubmissionPage-Body'>
                <div className="VidSubmissionPage-content">
                    <div className="VidSubmissionPage-InfoBox-container">
                        <CompanyInfoBox 
                            companyName='Company Name' 
                            companyDesc='What are you passionate about? Focus on what’s important to you in your daily life.'
                            companyTags={['Tag', 'Tag']}
                            companyImgSrc='https://via.placeholder.com/75'></CompanyInfoBox>
                    </div>

                    <div className="VidSubmissionPage-VidBox-container">
                        <div className="VidSubmissionPage-Vid-container">
                        {/* <VideoRecorder
                            onRecordingComplete={(videoBlob) => {
                            // Do something with the video...
                            console.log("videoBlob", videoBlob);
                            }}
                        /> */}

                        </div>

                        

                    </div>
                        <MyButton label='Submit' primary={true} size='small'></MyButton>
                </div>
                
                
                
                {/* <div>
                    <CompanyInfoBox 
                        companyName='Company Name' 
                        companyDesc='What are you passionate about? Focus on what’s important to you in your daily life.'
                        companyTags={['Tag', 'Tag']}
                        companyImgSrc='https://via.placeholder.com/75'></CompanyInfoBox>
                </div>
                <div className='VidSubmissionPage-VidBox'>
                    <h1>Placeholder</h1>
                    <Button label='Submit'></Button>
                </div> */}
            </div>

            <div className="ProfilePage-footer">
                <Footer links={['Placeholder']}></Footer>
            </div>
        </div>
    )
}