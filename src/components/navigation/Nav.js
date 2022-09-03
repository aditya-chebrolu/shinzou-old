import React, { useContext, useState } from 'react';
import classes from './Nav.module.scss';

import { PageContext } from '../../App';
import HomeIcon from '../../icons/HomeIcon';
import SkillIcon from '../../icons/SkillIcon';
import StarIcon from '../../icons/StarIcon';
import NavItem from './NavItem';
import HomeLabel from '../../icons/HomeLabel';
import SkillLabel from '../../icons/SkillLabel';
import ContactMeLabel from '../../icons/ContactMeLabel';
import MailIcon from '../../icons/MailIcon';

function Nav() {
  const [hovered, setHovered] = useState(null);
  const { page } = useContext(PageContext);

  const items = React.useMemo(
    () => [
      {
        id: 1,
        icon: (
          <HomeIcon
            size='26px'
            color={hovered === 1 || page === 1 ? '#c6de41' : '#c7de418e'}
          />
        ),
      },
      {
        id: 2,
        icon: (
          <SkillIcon
            size='26px'
            color={hovered === 2 || page === 2 ? '#c6de41' : '#c7de418e'}
          />
        ),
      },
      {
        id: 3,
        icon: (
          <StarIcon
            size='26px'
            color={hovered === 3 || page === 3 ? '#c6de41' : '#c7de418e'}
          />
        ),
      },
      {
        id: 4,
        icon: (
          <MailIcon
            size='26px'
            color={hovered === 4 || page === 4 ? '#c6de41' : '#c7de418e'}
          />
        ),
      },
    ],
    [hovered, page]
  );

  return (
    <div className={classes.body}>
      {items.map((item) => (
        <NavItem
          key={item.id}
          id={item.id}
          hovered={hovered}
          setHovered={setHovered}
          icon={item.icon}
        />
      ))}
      <img
        src='/assets/home.png'
        height={25}
        width={58}
        alt='p'
        className={classes.one}
      />
      <SkillLabel className={classes.two} />
      <ContactMeLabel className={`${classes.label} ${classes.four}`} />
    </div>
  );
}

export default Nav;
