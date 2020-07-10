import React from 'react';
import Layout from '@theme/Layout';

function Showcase() {
    return (
        <Layout title="Showcase">
            <div className="hero shadow--lw hero--dark hero--showcase">
                <div className="container">
                    <h1 className="hero__title">Showcase</h1>
                    <p className="hero__subtitle">Projects using Nikel</p>
                </div>
            </div>
            <div className="container">
                <div className="row showcase">
                    <div className="col col--4">
                        <div className="card">
                            <div className="card__header">
                                <img
                                    src="https://i.imgur.com/H43KD6c.png"
                                    alt="UofT Course Info Logo"
                                    title="UofT Course Info Logo"
                                />
                            </div>
                            <div className="card__body">
                                <h2>UofT Course Info</h2>
                                <small>
                                    Adds informative tooltips to University of Toronto courses mentioned across the web.
                                </small>
                            </div>
                            <div className="card__footer">
                                <a className="button button--secondary button--block"
                                   href="https://github.com/MuradAkh/UofTCourseInfo">
                                    Chrome/Firefox Extension
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col col--4">
                        <div className="card">
                            <div className="card__image">
                                <img
                                    src="https://docs.nikel.ml/img/github.png"
                                    alt="GitHub Logo"
                                    title="GitHub Logo"
                                />
                            </div>
                            <div className="card__body">
                                <h2>Add your project here!</h2>
                                <small>
                                    Submit a pull request to get your project added to this page.
                                </small>
                            </div>
                            <div className="card__footer">
                                <a className="button button--secondary button--block"
                                   href="https://github.com/nikel-api/nikel-docs/edit/master/src/pages/showcase.js">
                                    Edit on GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Showcase;
