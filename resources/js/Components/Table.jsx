import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import React from 'react';
import { useForm } from '@inertiajs/react';
import {Link} from '@inertiajs/react';
import Dropdown from './Dropdown';
import SanitizeText from './SantizedText';
import { showToast } from '@/Utilities';


const deleteActionRoute = (page, id) => {
  switch(page){
    case 'category':
      return route('category.destroy',{id:id});
    case 'item':
      console.log(route('item.destroy',{id:id}))
      return route('item.destroy',{id:id})
  }
}

const editActionRoute = (page, id) =>{
  switch(page){
    case 'category':
      return route('category.edit', {id : id});
    case 'item':
      return route('item.edit', {id : id});
  }
}

const updateStatusRoute = (page,id) => {
  switch(page){
    case "category" :
      return route('category.edit.status',{id : id})
    case "item" :
      return route('item.edit.status',{id : id})
  }
}


function Table({header, data, page}) {

  const { put, delete: destroy } = useForm()

  const handleDelete = (id) => {
    destroy(deleteActionRoute(page, id), {
      onSuccess : () => {
        showToast("Successfull Deleted")
      }
    })
  }

  return (
    <table className="w-full mx-auto table-auto">
        <thead className='py-4'>
            <tr className="bg-blue-600 text-white text-left p-8">
              <th>Action</th>
              {header.map((column) => {
                return (
                  column.canSortable ? (
                    <th key={column.acessor}>
                        <Dropdown className='w-fit bg-trasparent'>
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 hover:text-gray-700 focus:outline-none transition ease-in-out duration-150 text-white"
                                    >
                                        {column.header}
                                        <svg
                                            className="ms-2 -me-0.5 h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </Dropdown.Trigger>
  
                            <Dropdown.Content align='left'>
                                <Dropdown.Link 
                                href={route(page)}
                                data={{order_column : column.acessor, order_by : 'asc'}}
                                >
                                  <div className='flex gap-2 items-center'>
                                    <p>
                                      A-Z
                                    </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
                                    </svg>
                                  </div>
  
                                  </Dropdown.Link>
  
                                <Dropdown.Link 
                                href={route(page)}
                                data={{order_column : column.acessor, order_by : 'desc'}}
                                >
                                  <div className='flex gap-2 items-center'>
                                    <p>
                                      Z-A
                                    </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
                                    </svg>
  
                                  </div>
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </th>
                  ) : (
                    <th key={column.acessor}>{column.header}</th>
                  )
                )
              })}
            </tr>
        </thead>
        <tbody>
            {data.map((row) => (
            <tr
                key={row.acessor + String(row.id)}
                className="border-slate-200 border-b-[0.02rem] h-10"
            >
                <td id='action'>                  
                  <div className='flex gap-2 '>
                    <form onSubmit={(e) => {
                      e.preventDefault();
                      handleDelete(row.id)
                    }}>
                      <button
                      className='bg-red-600 text-white w-6 h-6 rounded-md flex items-center justify-center'
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                      </button>
                    </form>

                    <Link
                    as='button'
                    href={editActionRoute(page, row.id)}
                    className='bg-blue-600 text-white w-6 h-6 rounded-md flex items-center justify-center'
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                      </svg>

                    </Link>
                  </div>
                </td>

                {Object.entries(row).map(([key,column]) => (
                  <>
                    {key === 'status' ? (
                        <td key={`${row.id}.${row.name}`}>
                          <FormGroup>
                            <FormControlLabel 
                            control={
                              <Switch 
                              defaultChecked={row.status !== 0}
                              onChange={() => put(updateStatusRoute(page, row.id))}
                              />
                            } 
                            />
                          </FormGroup>
                        </td>
                    ) : (
                      <td key={`${row.id}.${row.name}`}>
                        <SanitizeText
                        text = {String(column).slice(0,100)} 
                        />
                      </td>
                    )}
                  </>
                ))}
            </tr>
            ))}
        </tbody>
    </table>

  );
}

export default Table;
