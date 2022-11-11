import React from 'react' 
import {GridComponent, ColumnsDirective,ColumnDirective,Page,Selection,Edit,Sort,Inject,Toolbar, Filter} from '@syncfusion/ej2-react-grids'
import {customersData,customersGrid} from '../data/dummy'
import Header from '../components/Header'


const Customers = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Customers'/>
      <GridComponent 
        id='gridComp' 
        enableHover={false} 
        dataSource={customersData}
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings} 
        allowPaging 
        allowSorting 
        editSettings={editing}
        toolbar={[toolbarOptions]}
        width='auto'
        >
        <ColumnsDirective>
          {customersGrid.map((item,index) =>(
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Page,Toolbar,Selection,Edit,Sort,Filter]}/>
      </GridComponent>
    </div>
  )
}

export default Customers