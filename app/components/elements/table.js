import { Component, PropTypes } from 'react';

class Table extends Component {
  propTypes: {
    config: PropTypes.object.isRequired,
    tdata: PropTypes.array.isRequired
  }
  render() {
    let header = this.props.config.headers.map((header) => <th key={header.label}>{header.label}</th>);
    header = <tr>{header}</tr>;
    let body = this.props.tdata ? this.props.tdata.map((datum) => {
      let row = this.props.config.headers.map((header) => <td scope="row" key={datum.id + header.field}>{datum[header.field]}</td>);
      return <tr key={datum.id}>{row}</tr>
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
