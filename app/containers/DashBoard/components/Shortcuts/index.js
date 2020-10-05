import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from 'components/Icon';
import ShortcutsStyle from './ShortcutsStyle';
import shortcutList from './data';

const Shortcuts = () => (
  <ShortcutsStyle>
    <h3 className="boxTitle">Shortcuts</h3>
    <nav className="shortcutsBox">
      <div className="shortcutsBoxRow">
        {shortcutList &&
          shortcutList.map((item, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={i} className="shortcutsBoxCol">
              <NavLink className="btnEditCompany" to={item.path}>
                <div className="shortcutThumb">
                  <Icon src={item.thumb} />
                </div>
                <span>
                  <strong>{item.mainNav}</strong>
                  {item.description}
                </span>
              </NavLink>
            </div>
          ))}
      </div>
    </nav>
  </ShortcutsStyle>
);

export default Shortcuts;
