import * as React from 'react';
import styles from './FetchSharepoint.module.scss';
import { IFetchSharepointProps } from './IFetchSharepointProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { Version } from '@microsoft/sp-core-library';
export interface ISPListCustomers{
  value : ISPListCustomerItem[];
}

export interface ISPListCustomerItem {
  Title :string;
  CustomerID:string;
  CustomerName:string;
  CustomerAddress:string;
}
export default class FetchSharepoint extends React.Component<IFetchSharepointProps, {}> 
{
  
state = {
      EmployeeName: '',
      items: [],
      EmployeeAddress : ''
    }
private listItemEntityTypeName: string = undefined;

    constructor(props) {
    super(props);
    

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  public render(): React.ReactElement<IFetchSharepointProps> {
    return (
      
       <form onSubmit={this.handleSubmit}>
        <label>
          EmployeeName:
          <input type="text" value={this.state.EmployeeName} onChange={this.handleChange} />
        </label>
        <label>
          EmployeeAddress:
          <input type="text" value={this.state.EmployeeAddress} onChange={this.handleChangeAddress} />
        </label>
        <input type="submit" value="Submit" />
         <div id="employee">
           </div>
      </form>
    );
  
  }

  handleChange(event) {
    this.setState({EmployeeName: event.target.value});
   
  }
  handleChangeAddress(event)
  {
    this.setState({EmployeeAddress: event.target.value});
  }

  handleSubmit(event) {
    //alert('Employee Name: ' + this.state.EmployeeName + 'Employee Address' + this.state.EmployeeAddress);
   let html : string='<table border=1>';
    html+=`<thead><th>Name</th><th>Address</th>`+
    `</thead><tbody>`;
    
      html+=`<tr>
      <td>${this.state.EmployeeName}</td>
      <td>${this.state.EmployeeAddress}</td></tr>`;
   
    html+=`</tbody></table>`;
    const listContainer:Element= document.querySelector("#employee");
    listContainer.innerHTML=html;
  
     event.preventDefault();
  }

    
}
