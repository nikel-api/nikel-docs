import React from 'react';
import Layout from '@theme/Layout';

function Hello() {
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
                            <div className="card__image">
                                <img
                                    src="https://docs.nikel.ml/img/github.png"
                                    alt="GitHub Logo"
                                    title="GitHub Logo"
                                />
                            </div>
                            <div className="card__body">
                                <h4>Add your project here!</h4>
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

export default Hello;
