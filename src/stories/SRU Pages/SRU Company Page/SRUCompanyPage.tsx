import React from 'react';
import { Footer } from '../../organisms/Footer/Footer';
import { CompanyCard } from '../../organisms/CompanyCard/CompanyCard';
import { MemberCard } from '../../molecules/MemberCard/MemberCard';
import './sruCompanyPage.css'

import PermIdentityIcon from '@mui/icons-material/PermIdentity';

type sruCompanyPageProps = {

}

export const SRUCompanyPage = ({} : sruCompanyPageProps) => {
    return (
        <div className="CompanyPage-page">
            <div className="CompanyPage-page-body">
                <div className="CompanyPage-CompanyCard-container">
                    <CompanyCard 
                        companyName='FoundUp'
                        location='Houston, TX'
                        description='Mission Statement.  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        companyImgSrc='./logo192png'
                    ></CompanyCard>
                </div>
                <div className="Member-heading-container">
                        <PermIdentityIcon/>
                        <h4>Company Members</h4>
                </div>
                <div className="CompanyPage-member-container">
                    
                    <MemberCard 
                        memberImgSrc = 'string'
                        name = 'Matthew Chin'
                        role = 'Software Engineer'
                        date = 'Jan 2022 - Current'
                    ></MemberCard>
                    <MemberCard 
                        memberImgSrc = 'string'
                        name = 'Matthew Chin'
                        role = 'Software Engineer'
                        date = 'Jan 2022 - Current'
                    ></MemberCard>
                    <MemberCard 
                        memberImgSrc = 'string'
                        name = 'Matthew Chin'
                        role = 'Software Engineer'
                        date = 'Jan 2022 - Current'
                    ></MemberCard>
                </div>
                
            </div>

            <div className="CompanyPage-page-footer">
                <Footer links={['Placeholder']}></Footer>
            </div>
        </div>
    )
}
