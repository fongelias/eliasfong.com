import React, { useState } from 'react';
import cx from 'classnames';
import { FlexBox } from 'components/presentational/FlexBox/FlexBox';
import styles from './Carousel.module.scss';


export interface IPageProps {
	title: string;
	titleImageUrl: string;
	medium: string;
	year: number;
	className?: string;
}

const Page = ({
	title,
	titleImageUrl,
	medium,
	year
}: IPageProps) => (
	<div className={styles.pageContainer}>
		<FlexBox justify="center">
			<FlexBox
				direction="column"
				justify="center"
				className={styles.pageDescriptionContainer}>
				<div className={styles.captionContainer}>
					<h2 className={styles.pageTitle}>
						<i>{title}</i>, {year}
					</h2>
					<h3 className={styles.pageMedium}>{medium}</h3>
				</div>
			</FlexBox>
		</FlexBox>
		<FlexBox
			className={styles.imageContainer}
			justify="center"
			alignItems="center">
			<img
				className={styles.pageImage}
				src={titleImageUrl}
				alt={`${title}, ${medium}`}/>
		</FlexBox>
	</div>
);

interface ICarouselProps {
	pageData: IPageProps[];
}

export const Carousel = ({
	pageData
}: ICarouselProps) => {
	const [pageIndex, setPageIndex] = useState(0);
	const [isTransitioning, setIsTransitioning] = useState(false);

	return (
		<section className={styles.carousel}>
			{pageData.map((pageData: IPageProps) => (
				<Page {...pageData}/>
			))}
		</section>
	);
};
