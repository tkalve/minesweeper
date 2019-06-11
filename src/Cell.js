import React from 'react';
import cx from 'classnames';
import styles from './Cell.css';

// Adapted from https://github.com/saninmersion/react-minesweeper

export default class Cell extends React.Component {

    getValue(){
        if (!this.props.value.isRevealed){
            return this.props.value.isFlagged ? "🚩" : null;
        }
        if (this.props.value.isMine) {
            return "💣";
        }
        if(this.props.value.neighbour === 0 ){
            return null;
        }
        return this.props.value.neighbour;
    }

    render(){
        let className = cx(styles.cell, {
            [styles.revealed]: !!this.props.value.isRevealed,
            [styles.mine]: this.props.value.isMine,
            [styles.flag]: this.props.value.isFlagged,
            [styles.clear]: this.props.clear,
            [styles.black]: this.props.value.neighbour == 3,
            [styles.red]: this.props.value.neighbour == 3,
            [styles.green]: this.props.value.neighbour == 2,
            [styles.blue]: this.props.value.neighbour == 1
        });

        return (
            <div ref="cell"
            onClick={this.props.onClick}
            className={className}
            onContextMenu={this.props.cMenu}>
                {this.getValue()}
            </div>
        );
    }
}