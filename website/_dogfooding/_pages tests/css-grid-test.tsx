/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './css-grid.module.css';

const data = [
  {
    kw: 1,
    day: 'Mo',
    description: 'First day of the week',
  },
  {
    kw: 1,
    day: 'Tu',
    description: 'Second day of the week',
  },
  {
    kw: 1,
    day: 'We',
    description: 'Third day of the week',
  },
  {
    kw: 1,
    day: 'Th',
    description: 'Fourth day of the week',
  },
  {
    kw: 1,
    day: 'Fr',
    description: 'Fifth day of the week',
  },
  {
    kw: 1,
    day: 'Sa',
    description: 'First day of the weekend',
  },
  {
    kw: 1,
    day: 'Su',
    description: 'Last day of the weekend',
  },
];

function TableGrid() {
  return (
    <Layout>
      <main className="container margin-vert--xl">
        <div className={clsx(styles.grid)}>
          {data.map((event, idx) => (
            <React.Fragment key={idx}>
              <div className={clsx(styles.cell, styles.kw)}>{event.kw}</div>
              <div className={clsx(styles.cell, styles.day)}>{event.day}</div>
              <div className={clsx(styles.cell, styles.description)}>
                {event.description}
              </div>
            </React.Fragment>
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default TableGrid;
