import React from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Input from '../components/Input';

const Home = () => {
    return(
        <React.Fragment>
            <Header title="Home" />
            <Button />
            <Input />
            <Section />
            <Footer />
        </React.Fragment>
    );
};

export default Home;
