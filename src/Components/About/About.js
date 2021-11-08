import React from 'react';
import about from '../../images/about.jpg';

const About = () => {
    return (
        <div className="container w-11/12 mx-auto pt-28">
            <div className="grid lg:grid-cols-2">
                <div className="pt-6 text-right">
                    <h2 className=" text-4xl pb-3 text-secondary font-semibold">About us</h2>
                    <p className="py-4 text-lg text-justify">Hey There Welcome ! It's a pleasure to see you in our webpage. We are <span className="text-primary font-semibold">MEDINA MEDICAL</span> Hospital. We served the best medical treatment , and we try to give the level best from us ! we have been serveing our services since 12 years.We have Total 28 Doctors , 12 maid and 8 worker . our first target is just to serve our best and we always do that that's all about us . </p>
                </div>
                <img className="w-full p-6 rounded-lg" src={about} alt="" />
            </div>
        </div >
    );
};

export default About;