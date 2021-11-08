import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import './Information.css';
import { Link } from 'react-router-dom';

const Information = () => {
    return (
        <div className="py-8">
            <div className="container w-11/12 mx-auto text-left grid lg:grid-cols-2 md-:grid-cols-1 gap-5 border p-8">
                {/* opening hours part */}
                <div className="">
                    <h4 className="title text-2xl font-semibold	text-secondary">Opening Hours</h4>
                    {/* information table here */}
                    <table className="table-auto font-semibold">
                        <tbody>
                            <tr>
                                <td className="lg:w-4/5">Monday - Thursday</td>
                                <td>8.00 - 19.00</td>
                            </tr>
                            <tr>
                                <td>Friday</td>
                                <td>8.00 - 18.30</td>
                            </tr>
                            <tr>
                                <td>Saturday</td>
                                <td>9.30 - 17.00</td>
                            </tr>
                            <tr>
                                <td>Sunday</td>
                                <td>9.30 - 15.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* emergency part here */}
                <div className="">
                    <h4 className=" title text-2xl font-semibold text-secondary">Emergency</h4>
                    <div className="bg-primary inline p-4 rounded text-light font-semibold mt-10">
                        <FontAwesomeIcon icon={faCalendar} /> <Link to="/appoinment">Get Appointment</Link>
                    </div>
                    <p className="pt-6 font-semibold italic ">We are always ready ! in your emergency .Here you can make your Appointment whenever you have in need and your emergency.</p>
                </div>
            </div>
        </div >
    );
};

export default Information;