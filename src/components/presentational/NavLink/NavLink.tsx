import cx from "classnames";
import styles from './NavLink.module.scss';
import { FlexBox } from "../FlexBox/FlexBox";
import { Link } from 'react-router-dom';



export enum NAV_LINK_DIRECTION {
  LEFT='left',
  RIGHT='right',
}

export interface NavLinkProps {
  text: string,
  path: string,
  direction?: NAV_LINK_DIRECTION,
}

export const NavLink = ({
  text,
  path,
  direction,
}: NavLinkProps) => {

  switch(direction) {
    case NAV_LINK_DIRECTION.RIGHT:
      return (
        <FlexBox className={cx(styles.NavLink, styles[direction])} justify="end" alignItems="center">
          <Link className={styles.Inner} to={path}>

            <span className={styles.LinkText}>{text}</span>
          </Link>
        </FlexBox>
      )
    case NAV_LINK_DIRECTION.LEFT:
      return (
        <FlexBox className={cx(styles.NavLink, styles[direction])} justify="start" alignItems="center">
          <Link className={styles.Inner} to={path}>

            <span className={styles.LinkText}>{text}</span>
          </Link>
        </FlexBox>
      )
    default:
      return (
        <FlexBox className={cx(styles.NavLink, styles.Top)} justify="center" alignItems="center">
          <Link className={styles.Inner} to={path}>{text}</Link>
        </FlexBox>
      )
  }
}