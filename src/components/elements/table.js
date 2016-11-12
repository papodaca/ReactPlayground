import React from 'react';
import _ from 'lodash';

import I from './icon';

const Component = React.Component,
      PropTypes = React.PropTypes;

class Table extends React.Component {
  static propTypes = {
    config: React.PropTypes.object.isRequired,
    tdata: React.PropTypes.array.isRequired,
    "config.actions": React.PropTypes.array,
    "config.headers": React.PropTypes.array
  }
  render() {
    let header = this.props.config.headers.map((header) => {
      return <th key={header.label}>{header.label}</th>;
    });
    let actions = [];
    if(this.props.config.actions && this.props.config.actions.length > 0) {
      actions = <th>Actions</th>;
    }
    header = <tr>{header}{actions}</tr>;
    let body = this.props.tdata ? this.props.tdata.map((datum) => {
      let row = this.props.config.headers.map((header) => {
        return <td key={datum.id + header.field}>{datum[header.field]}</td>;
      });
      let actions = this.props.config.actions.map((action) => {
        let buttonClassNames = `btn btn-sm btn-${action.color}`;
        return (
          <button
            key={action.label + datum.id}
            className={buttonClassNames}
            onClick={_.partial(action.handle, datum)}>
              <I icon={action.icon}/> {action.label}
          </button>);
      });
      return <tr scope="row" key={datum.id}>{row}<td>{actions}</td></tr>;
    }) : <tr><td>No Data</td></tr>;
    return (
      <table className="table">
        <thead>{header}</thead>
        <tbody>{body}</tbody>
      </table>
    );
  }
}

export default Table;