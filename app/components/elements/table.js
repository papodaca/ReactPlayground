import { Component, PropTypes } from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
`;

class Table extends Component {
  propTypes: {
    config: PropTypes.object.isRequired,
    tdata: PropTypes.array.isRequired
  }
  render() {
    let header = this.props.config.headers.map((header) => <th key={header.label}>{header.label}</th>);
    header = <tr>{header}</tr>;
    let body = this.props.tdata ? this.props.tdata.map((datum) => {
      let row = this.props.config.headers.map((header) => <td key={datum.id + header.field}>{datum[header.field]}</td>);
      return <tr key={datum.id}>{row}</tr>
    }) : <tr><td>No Data</td></tr>;
    return (
      <StyledTable>
        <thead>{header}</thead>
        <tbody>{body}</tbody>
      </StyledTable>
    );
  }
}

export default Table;
