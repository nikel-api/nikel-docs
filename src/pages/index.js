import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
    {
        title: <>Performant</>,
        imageUrl: 'img/Go-Logo_Blue.svg',
        description: (
            <>
                Written in 100% Go for performance and low latency.
            </>
        ),
    },
    {
        title: <>Unlimited</>,
        imageUrl: 'img/infinity.png',
        description: (
            <>
                Nikel API doesn't require authentication and is unlimited.
            </>
        ),
    },
    {
        title: <>Open Source</>,
        imageUrl: 'img/github.png',
        description: (
            <>
                Nikel's code can be found on GitHub and is open to anyone who wants to contribute.
            </>
        ),
    },
];

function Feature({imageUrl, title, description}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={classnames('col col--4', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title}/>
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
            description="Nikel API for the University of Toronto">
            <header className={classnames('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title" style={{color: "white"}}>{siteConfig.title}</h1>
                    <p className="hero__subtitle" style={{color: "white"}}>{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={classnames(
                                'button button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to={useBaseUrl('docs/')}>
                            Get Started (In Alpha)
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                {features && features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}

export default Home;
