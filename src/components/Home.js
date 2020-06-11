import React, { Component } from "react";
import '../App.css'
import Papa from 'papaparse';
import Button from "@material-ui/core/Button";

class Home extends Component {
  state = {
    header: [],
    values: [],
    search: "",
    // file: file,
    array: [],

  }

  handleRow = () => {

    var arr = []
    for (var i = 0; i < this.state.values.length; i++) {
      var a = []
      for (var j = 0; j < 5; j++) {
        a.push(this.state.values[i][j])
      }
      arr.push(Object.assign({}, a))

    }
    for (var i = 0; i < arr.length; i++) {
      let arr1 = arr;
      if (this.state.search.length > 0) {
        arr1 = arr.filter(user => {
          if (user[0] != null && user[0].toLowerCase().startsWith(this.state.search.toLowerCase()) || user[1] != null && user[1].toLowerCase().startsWith(this.state.search.toLowerCase()) ||
            user[2] != null && user[2].toLowerCase().startsWith(this.state.search.toLowerCase()) || user[3] != null && user[3].toLowerCase().startsWith(this.state.search.toLowerCase())
            || user[4] != null && user[4].toLowerCase().startsWith(this.state.search.toLowerCase())) {
            return true;
          } else {
            return false;
          }
        })
      }
      return arr1.map(data => {
        return (
          <tr>
            <td>{data[0]}</td>
            <td>{data[1]}</td>
            <td>{data[2]}</td>
            <td>{data[3]}</td>
            <td>{data[4]}</td>

          </tr>
        )
      })
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    var fileUpload = e.target.filename;
    var header = [], values = [];
    if (fileUpload) {
      Papa.parse(fileUpload.files[0], {
        complete: function (results) {
          header = results.data[0];
          results.data.shift();
          results.data.pop();
          values = results.data;
          this.setState({ header, values });
          console.log(this.state.header)
          console.log("value", this.state.values)
        }.bind(this)
      })

      this.setState({ found: true, inputdisable: true })
    }
  }

  render() {
    return (
      <div>
        <input type="text" className="myInput" placeholder="Search.." onChange={(e) => this.setState({ search: e.target.value })} title="Type in a name" value={this.state.search}></input>
        <form class="ui form container" style={{ width: '800px' }} onSubmit={this.handleSubmit.bind(this)}>
          <div className="field">
            <input type="file" name="filename" placeholder="upload..." accept=".csv" disabled={this.state.inputdisable} />

          </div>
          <div><br></br></div>
          <div style={{ textAlign: 'center', width: '320px' }}>

            <Button
              type="submit"
              style={{ width: '100px', textAlign: 'center' }}
              fullWidth
              disabled={this.state.found}
              variant="contained"
              color="primary"
            >
              Preview
         </Button>
          </div>
        </form>
        <table className="myTable">
          <tr className="header">
            <th style={{ width: '20%' }}>State/UT</th>
            <th style={{ width: '20%' }}>Confirmed</th>
            <th style={{ width: '20%' }}>Recovered</th>
            <th style={{ width: '20%' }}>Decreased</th>
            <th style={{ width: '20%' }}>Active</th>

          </tr>
          {this.handleRow()}

        </table>
      </div>
    );
  }
}

export default (Home);
