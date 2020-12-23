import React from 'preact/compat';

import { IconViewGrid, IconViewList } from './Icons';

export function Views(props) {
  return (
    <ul className="uni-BodyHeader-view">
      <button
        title="Passer à la vue grille"
        className={[
          'uni-BodyHeader-viewButton',
          props.view === 'grid' && 'uni-BodyHeader-viewButton--active',
        ]
          .filter(Boolean)
          .join(' ')}
        disabled={props.view === 'grid'}
        onClick={() => props.setView('grid')}
      >
        <IconViewGrid />
      </button>

      <button
        title="Passer à la vue de liste"
        className={[
          'uni-BodyHeader-viewButton',
          props.view === 'list' && 'uni-BodyHeader-viewButton--active',
        ]
          .filter(Boolean)
          .join(' ')}
        disabled={props.view === 'list'}
        onClick={() => props.setView('list')}
      >
        <IconViewList />
      </button>
    </ul>
  );
}
