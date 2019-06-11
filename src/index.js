import React from 'react'
import PropTypes from 'prop-types'
import getIt from 'get-it'
import jsonResponse from 'get-it/lib/middleware/jsonResponse'
import promise from 'get-it/lib/middleware/promise'
import Button from 'part:@sanity/components/buttons/default'

import styles from './Minesweeper.css'
import Board from './Board'

const request = getIt([promise(), jsonResponse()])

class Minesweeper extends React.Component {
  state = {
    height: 8,
    width: 8,
    mines: 10,
    error: null
  }

  render() {
    const {height, width, mines, error} = this.state
    if (error) {
      return <pre>{JSON.stringify(error, null, 2)}</pre>
    }

    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Minesweeper</h2>
        </header>
        <div className={styles.content}>
          <Board height={height} width={width} mines={mines} />
        </div>
      </div>
    )
  }
}

export default {
  name: 'minesweeper',
  component: Minesweeper
}
