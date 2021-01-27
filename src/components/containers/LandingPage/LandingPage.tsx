import React from 'react';
import styles from './LandingPage.module.scss';
import { FlexBox } from 'components/presentational/FlexBox/FlexBox';
import { NavBar } from 'components/presentational/NavBar/NavBar';
import { Carousel, IPageProps } from 'components/presentational/Carousel/Carousel';
import { photographs, PhotographData } from 'manifests/photography.manifest';


export const LANDING_PAGE_PATH = '/'

/*
text divider between name? consider adding about at the start, above fold? https://ayakaito.com/
consider single row nav and dynamic content  https://www.siteinspire.com/websites/9652-akatre
use black background and smaller font sizing? https://guglieri.com/
add loading colors: https://www.designbyparker.com/
inspo: also, the credits: http://jlap.com/en/
single panel display: https://kieranbaybutt.com/, http://dennisadelmann.de/
crop scroll: https://nicolas-bussiere.com/
Amazing video concept: http://www.kwaidaneditions.com/
*/


const photographDataToPageData = (photograph: PhotographData): IPageProps => ({
	title: photograph.name,
	titleImageUrl: photograph.url,
	medium: photograph.medium,
	year: photograph.date.getFullYear()
})

const LandingPageHeader = () => (
	<header className={styles.landingPageHeader}>
		<FlexBox>
			<h1 className={styles.headerTitle}>elias fong</h1>
			<span className={styles.headerDivider}/>
			<NavBar/>
		</FlexBox>
	</header>
);

const LandingPageBody = () => (
	<section className={styles.landingPageBody}>
		<Carousel pageData={photographs.map(photographDataToPageData)}/>
	</section>
)

export const LandingPage = () => (
	<FlexBox
		className={styles.landingPage}
		justify="center">
		<article className={styles.contentContainer}>
			<LandingPageHeader/>
			<LandingPageBody/>
		</article>
	</FlexBox>
)
