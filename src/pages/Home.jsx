import React, { useState, useEffect, } from 'react'
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import axios from 'axios';

const url = 'https://substock.gethomestay.com/stock/own/me'
const token = localStorage.getItem('token')
const config = { headers: { Authorization: `Token ${JSON.parse(token)}` } }

const Home = () => {
  const [state, setState] = useState([])
  useEffect(() => {
    fetchData()

  }, [])

  const fetchData = async () => {
    const { data } = await axios.get(url, config)
    setState(data.results)
  }

  const printPdf = () => {
    const doc = new jsPDF();
    doc.autoTable({ html: '#my-table' });
    doc.save('table.pdf');
  }



  return (
    <div className="wrapper " >
      <table className="table" id='my-table'>
        <thead className='thead-dark '>
          <tr>
            <th>Stock_id</th>
            <th>Stock_name</th>
            <th>Stock_detail</th>
            <th>Date_create</th>
            <th>Date_update</th>
          </tr>
        </thead>
        <tbody>
          { state.map((item, index) =>
            <tr key={ index } >{
              <>
                <td >{ item.own_stock.stock_id }</td>
                <td>{ item.own_stock.stock_name }</td>
                <td>{ item.own_stock.stock_detail }</td>
                <td>{ item.own_stock.date_create }</td>
                <td>{ item.own_stock.date_update }</td>
              </>
            }
            </tr>
          ) }
        </tbody>
      </table>
      <br />
      <button
        className="btn btn-primary col-3"
        onClick={ printPdf }
      >Print PDF
      </button>
    </div>
  )
}

export default Home
