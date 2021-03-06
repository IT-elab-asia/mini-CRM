import React, { useState, useCallback } from 'react';
import app from "./base.js";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
import './DefaultStyles.css';
import Sidebar from './Sidebar';
import './EditProject.scss';


const EditProject = ({history}) => {


    const db = app.firestore();

    const project_id = window.location.search.replace('?id=', '').toString();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [geolocation, setGeolocation] = useState('');
    const [foodRadio, setFoodRadio] = useState('');
    const [transportRadio, setTransportRadio] = useState('');
    const [equipmentRadio, setEquipmentRadio] = useState('');
    
   
  

    const handleEditProject = useCallback(async event => {
        event.preventDefault();
        const { title, description } = event.target.elements;

        try {
            return db.collection('projects').doc(project_id).
            update({ 
                title_project: title.value,
                description_project: description.value
            });
            

        } catch (error) {
            alert(error)
        } finally {
            
            history.push("/");
        }

      


    }, [history]); 

 

    return (
        <>
          
           <Sidebar />

            <main>
                <div className="section-edit-project">
                    <h2 className="section-title">Изменение проекта</h2>
                    <div className="section-block">
                        <form onSubmit={handleEditProject} className="main-form">
                            <div className="group">
                                <span class="group-label">Название</span>
                                <input type="text" class="group-form" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                            </div>
                            <div className="group">
                                <span class="group-label">Дата начала</span>
                                <input type="text" class="group-form" name="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                            </div>
                            <div className="group">
                                <span class="group-label">Время начала</span>
                                <input type="text" class="group-form" name="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                            </div>
                            <div className="group">
                                <span class="group-label">Заказчик</span>
                                <input type="text" class="group-form" name="geolocation" value={geolocation} onChange={(e) => setGeolocation(e.target.value)} required />
                            </div>
                            <div className="group">
                                <span class="group__subtitle">Прожект менеджер</span>
                                <div className="group-radio">
                                    <div className="radio">
                                        <input className="radio__input" type="radio" name="foodRadio" value={"Дмитрий"} onChange={(e) => setFoodRadio(e.target.value)} id="radio1" />
                                        <span className="radio__text">Дмитрий</span>
                                    </div>
                                    <div className="radio">
                                        <input className="radio__input" type="radio" name="foodRadio" value={"Алексей"} onChange={(e) => setFoodRadio(e.target.value)} id="radio2" />
                                        <span className="radio__text">Алексей</span>
                                    </div>
                                    <div className="radio">
                                        <input className="radio__input" type="radio" name="foodRadio" value={"Владимир"} onChange={(e) => setFoodRadio(e.target.value)} id="radio3" />
                                        <span className="radio__text">Владимир</span>
                                    </div>
                                    <div className="radio">
                                        <input className="radio__input" type="radio" name="foodRadio" value={"Максим"} onChange={(e) => setFoodRadio(e.target.value)} id="radio4" />
                                        <span className="radio__text">Максим</span>
                                    </div>
                                </div>
                            </div>
                            <div className="group">
                                <span class="group__subtitle">Front-End</span>
                                <div className="group-radio">
                                    <div className="radio">
                                        <input className="radio__input" type="radio" name="transportRadio" value={"Дмитрий"} onChange={(e) => setTransportRadio(e.target.value)} id="radio1" />
                                        <span className="radio__text">Дмитрий</span>
                                    </div>
                                    <div className="radio">
                                        <input className="radio__input" type="radio" name="transportRadio" value={"Алексей"} onChange={(e) => setFoodRadio(e.target.value)} id="radio2" />
                                        <span className="radio__text">Алексей</span>
                                    </div>
                                    <div className="radio">
                                        <input className="radio__input" type="radio" name="transportRadio" value={"Владимир"} onChange={(e) => setFoodRadio(e.target.value)} id="radio3" />
                                        <span className="radio__text">Владимир</span>
                                    </div>
                                    <div className="radio">
                                        <input className="radio__input" type="radio" name="transportRadio" value={"Максим"} onChange={(e) => setFoodRadio(e.target.value)} id="radio4" />
                                        <span className="radio__text">Максим</span>
                                    </div>
                                </div>
                            </div>
                            <div className="group">
                                <span class="group__subtitle">Back-End</span>
                                <div className="group-radio">
                                    <div className="radio">
                                        <input className="radio__input" type="radio" name="equipmentRadio" value={"Дмитрий"} onChange={(e) => setEquipmentRadio(e.target.value)} id="radio1" />
                                        <span className="radio__text">Дмитрий</span>
                                    </div>
                                    <div className="radio">
                                        <input className="radio__input" type="radio" name="equipmentRadio" value={"Алексей"} onChange={(e) => setFoodRadio(e.target.value)} id="radio2" />
                                        <span className="radio__text">Алексей</span>
                                    </div>
                                    <div className="radio">
                                        <input className="radio__input" type="radio" name="equipmentRadio" value={"Владимир"} onChange={(e) => setFoodRadio(e.target.value)} id="radio3" />
                                        <span className="radio__text">Владимир</span>
                                    </div>
                                    <div className="radio">
                                        <input className="radio__input" type="radio" name="equipmentRadio" value={"Максим"} onChange={(e) => setFoodRadio(e.target.value)} id="radio4" />
                                        <span className="radio__text">Максим</span>
                                    </div>
                                </div>
                            </div>
                            <div className="group">
                                <span className="group-label">Описание мероприятия</span>
                                <textarea type="text" className="group-form label-description" name="description" maxLength="1000" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                            </div>
                            <button type="submit" className="edit-project__button-create">Изменить</button>
                        </form>
                    </div>
                    <Link to="/" className="edit-project__button-cancel"><span>Отмена</span></Link>
                </div>
            </main>

        </>
    )
}

export default withRouter(EditProject);


