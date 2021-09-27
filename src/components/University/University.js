import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from '../Card/Card';
import { addToDb, getStoredCart, removeFromDb } from '../localStorage';
import Search from '../Search/Search';
import Teacher from '../Teacher/Teacher';
// Started My Componments
const University = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('./teacherInfo.json')
            .then(res => res.json())
            .then(data => {
                setTeachers(data)
                setSearch(data)
            })
    }, [])
    // add local Storage add Card 
    const [salary, setsalary] = useState([])
    const hendleAddSalary = (e) => {
        // add new object property
        e.isActive=true
        setsalary([...salary, e])
        // add local storage
        addToDb(e.key)  
    }
// get key to data
    useEffect(() => {
        if (teachers.length) {
            const getTeacher = getStoredCart()
            const saveTeacher =[]
            for (const key in getTeacher) {
                const findSalary = teachers.find(teacher => teacher.key === key)
                findSalary.isActive= true
            console.log(key, findSalary);

            saveTeacher.push(findSalary)
            }
            setsalary(saveTeacher)
        }
    }, [teachers])
    const handleRemove = (item) => {
        item.isActive = false;
        removeFromDb(item.key)
        const getData = salary.filter(td => td.key !== item.key);
        setsalary(getData); 
    }
    // search function
    const [search , setSearch] = useState([teachers])
    const hendleSearch = (e) => {
        const searchResult = e.target.value
    
        const result = teachers.filter(item => item.name.toLowerCase().includes(searchResult.toLowerCase()))
        setSearch(result)
    }

    return (
    <>
        <Search hendleSearch={hendleSearch} />
        <Row className="my-5">
            <Col className="col-md-10">
                <Row className="g-4">
            {
               search.map(teacher=> <Teacher key={Math.random()} hendleAddSalary={hendleAddSalary} teacher={teacher} />) 
            }
                </Row>
            </Col>
            <Col className="col-md-2">
                <Card salary={salary} handleRemove={handleRemove} />
            </Col>
            </Row>
            </>
    );
};

export default University;