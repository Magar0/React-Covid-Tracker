import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const State = ({ data }) => {

const navigate =useNavigate()

const goToHome =()=>{
  navigate('/')
}
  return (
    <>
      <section className='bg-info container-fluid text-center pb-4 px-lg-4' >

        <div className="main-heading">

          <div className='d-flex mt-1'>
            <Button variant='contained' onClick={goToHome} >Go Back</Button>
            <h6 className='text-center mt-3 mx-auto'><span className='red-dot'></span>LIVE</h6>
          </div>

          <h2><span className='fw-bold   '>INDIA </span> <span className=""> COVID-19 Dashboard Statewise </span> </h2>
        </div>

        <div className="table-responsive mt-md-4 mx-lg-3">
          <table className="table table-hover">

            <thead className='thead-dark '>
              <tr className='text-uppercase fw-bold'>
                <th>No.</th>
                <th>state</th>
                <th>confirmed</th>
                <th>recovered</th>
                <th>death</th>
                <th>active</th>
                <th>updated</th>
              </tr>
            </thead>
            <tbody>

              {data.map((curElem, ind) => {
                return (
                  <tr >
                    <td className='fw-bold'>{ind + 1}</td>
                    <td className='fw-bold'>{curElem.state}</td>
                    <td>{curElem.confirmed}</td>
                    <td>{curElem.recovered}</td>
                    <td>{curElem.deaths}</td>
                    <td>{curElem.active}</td>
                    <td>{curElem.lastupdatedtime}</td>
                  </tr>

                )
              })}
            </tbody>

          </table>

        </div>


      </section>
    </>
  )
}

export default State