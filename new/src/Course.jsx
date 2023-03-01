import React, { Component } from 'react'

class Course extends Component {
    render() {
        let payloadData = this.props.data
        return (
            <div className='mainblock'>
                <center>
                    <div>
                        <img src={payloadData[0].photo} alt="" />
                        <h3>{payloadData[0].company_name}</h3>
                        <p>{payloadData[0].rider_name}</p>
                        <p>{payloadData[0].duration}</p>
                        <p>{payloadData[0].titles}</p>
                    </div>
                </center>

                <center>
                    <div>
                        <img src={payloadData[1].photo} alt="" />
                        <h3>{payloadData[1].company_name}</h3>
                        <p>{payloadData[1].rider_name}</p>
                        <p>{payloadData[1].duration}</p>
                        <p>{payloadData[1].titles}</p>
                    </div>
                </center>

                <center>
                    <div>
                        <img src={payloadData[2].photo} alt=""/>
                        <h3>{payloadData[2].company_name}</h3>
                        <p>{payloadData[2].rider_name}</p>
                        <p>{payloadData[2].duration}</p>
                        <p>{payloadData[2].titles}</p>
                    </div>
                </center>

            </div>
        )
    }
}

export default Course