import React from 'react';
import Layout from '@theme/Layout';

function Contact() {
    return (
        <Layout title="Contact">
            <div className="hero shadow--lw hero--dark hero--showcase">
                <div className="container">
                    <h1 className="hero__title">Contact</h1>
                    <p className="hero__subtitle">
                        <a style={{color: "white"}} href="mailto:api@nikel.ml">api@nikel.ml</a>
                    </p>
                    <div>
                        <a className="button button--secondary button--outline button--lg"
                           href="https://forms.gle/r1d5GaBw3Sc2sYnb7">
                            Contact Form
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Contact;
