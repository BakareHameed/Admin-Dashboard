import React from 'react'
import {GridComponent, ColumnsDirective,ColumnDirective,Page,Search,Inject} from '@syncfusion/ej2-react-grids'
import {employeesData,employeesGrid} from '../data/dummy'
import Header from '../components/Header'

const Employees = () => {
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Employees'/>
      <GridComponent id='gridComp' dataSource={employeesData} allowPaging allowSorting  pageSettings={{ pageCount: 5 }} width='auto'  editSettings={editing} toolbar={toolbarOptions}>
        <ColumnsDirective>
          {employeesGrid.map((item,index) =>(
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Page,Search]}/>
      </GridComponent>
    </div>
  )
}

export default Employees