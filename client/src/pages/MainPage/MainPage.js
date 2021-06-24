import React from 'react';
import './MainPage.scss';
import CardLink from "../../components/CardLink/CardLink";
import {design} from "../../svg/design";
import {secureData} from "../../svg/secureData";
import {retinaReady} from "../../svg/retinaReady";
import {NavLink} from "react-router-dom";
import Container from "../../components/Container/Container";

const MainPage = () => {

    return (
        <div className={'main'}>
            <Container>

                <div className="main__wrapper">
                    <div className={'main__offer'}>
                        <p className={'main__slogan'}><b>Brainstorming</b> <br/>for desired perfect usability</p>
                        <p className={'main__description'}>Our design projects are fresh and simple and will
                            benefit <br/> your business greatly. Learn more about our work!</p>
                        <NavLink to={'/user_statics'}>
                            <button className={'main__statsBtn'}>View Stats</button>
                        </NavLink>
                    </div>
                    <div className={'main__phone'}/>
                </div>
                <div className={'main__aboutSection'}>

                    <h3 className={'main__aboutTitle'}>Why <b>small business owners <br/> love</b> AppCo?</h3>
                    <p className={'main__aboutDescription'}>Our design projects are fresh and simple and will benefit your business <br/> greatly. Learn more
                        about our work!</p>
                    <div className={'main__cardLinks'}>
                        <CardLink icon={design()} title={'Clean Design'}
                                  description={'Increase sales by showing true dynamics of your website.'}/>
                        <CardLink icon={secureData()} title={'Secure Data'}
                                  description={'Build your online store’s trust using Social Proof & Urgency.'}/>
                        <CardLink icon={retinaReady()} title={'Retina Ready'}
                                  description={'Realize importance of social proof in customer’s purchase decision.'}/>
                    </div>

                </div>
            </Container>

        </div>
    );
};

export default MainPage;