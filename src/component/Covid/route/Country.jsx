import React,{useState} from 'react'

const Country = ({data}) => {

    const randomColor = () => {
        const hue = 'rgb(' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ')';
        return hue;
      }
      const myStyle1 = { backgroundColor: randomColor() }
      const myStyle2 = { backgroundColor: randomColor() }
      const myStyle3 = { backgroundColor: randomColor() }
      const myStyle4 = { backgroundColor: randomColor() }
      const myStyle5 = { backgroundColor: randomColor() }
      const myStyle6 = { backgroundColor: randomColor() }
    

  return (
    <section className='container pt-3'>

    <h6 className='text-center'><span className='red-dot'></span>LIVE</h6>
    <h1 className='text-center mb-5'>INDIA COVID-19 Dashboard</h1>
    
    <div className="row text-center justify-content-around">

        <div className=" cards col-md-5 col-lg-3 p-4 m-4 text-center" style={myStyle1}>
          <p className="card-name mb-0"><span className='mx-2'>OUR</span><span className='fs-4'>COUNTRY</span></p>
          <p className="card-text fs-1 shadow-lg">INDIA</p>
        </div>

        <div className=" cards col-md-5 col-lg-3 p-4 m-4 text-center" style={myStyle2}>
          <p className="card-name mb-0"><span className='mx-2'>TOTAL</span><span className='fs-4'>CONFIRMED</span></p>
          <p className="card-text fs-1 shadow-lg">{data.confirmed}</p>
        </div>
        
        <div className=" cards col-md-5 col-lg-3 p-4 m-4 text-center" style={myStyle3}>
          <p className="card-name mb-0"><span className='mx-2'>TOTAL</span><span className='fs-4'>ACTIVE</span></p>
          <p className="card-text fs-1 shadow-lg">{data.active}</p>
        </div>


        <div className=" cards col-md-5 col-lg-3 p-4 m-4 text-center" style={myStyle4}>
          <p className="card-name mb-0"><span className='mx-2'>TOTAL</span><span className='fs-4'>RECOVERED</span></p>
          <p className="card-text fs-1 shadow-lg">{data.recovered}</p>
        </div>

        <div className=" cards col-md-5 col-lg-3 p-4 m-4 text-center" style={myStyle5}>
          <p className="card-name mb-0"><span className='mx-2'>TOTAL</span><span className='fs-4'>DEATHS</span></p>
          <p className="card-text fs-1 shadow-lg">{data.deaths}</p>
        </div>

        <div className=" cards col-md-5 col-lg-3 p-4 m-4 text-center" style={myStyle6}>
          <p className="card-name mb-0"><span className='mx-2'>LAST</span><span className='fs-4'>UPDATED</span></p>
          <p className="card-text fs-3 shadow-lg">{data.lastupdatedtime}</p>
        </div>
      </div>

    </section>
  )
}

export default Country