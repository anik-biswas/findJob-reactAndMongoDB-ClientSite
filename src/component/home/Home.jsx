import React from 'react';
import Banner from '../banner/Banner';
import Category from '../category/Category';
import EmployeeSection from '../employeeSection/EmployeeSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <EmployeeSection></EmployeeSection>
        </div>
    );
};

export default Home;