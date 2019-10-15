import React, { Component } from 'react';
import FooterStyle, { Icons, Facebook, Instagram, Youtube, Links, ServiceCode, CC } from './styles/FooterStyles';

export default class Footer extends Component {
    render() {
        return (
            <FooterStyle>
                <Icons>
                    <Facebook/>
                    <Instagram/>
                    <Youtube/>
                </Icons>
                <Links>
                    <div>Audio and Subtitles</div>
                    <div>Audio Description</div>
                    <div>Help Center</div>
                    <div>Gift Cards</div>
                    <div>Media Center</div>
                    <div>Investor Relations</div>
                    <div>Jobs</div>
                    <div>Terms of Use</div>
                    <div>Privacy</div>
                    <div>Legal Notices</div>
                    <div>Cookie Preferances</div>
                    <div>Corporate Information</div>
                    <div>Contact Us</div>
                </Links>
                <ServiceCode>Service Code</ServiceCode>
                <CC>© 1997-2019 Netflix, Inc. {"{i-0c4517dea3b7e884f}"} Nyeste Miki Edition :)</CC>
            </FooterStyle>
        )
    }
}
