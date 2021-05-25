import React, {useState, useEffect} from 'react';
import app from './base.js';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import './ProjectPage.scss';
import './DefaultStyles.css';

const ProjectPage = () => {

    const project_id = window.location.search.replace('?id=', '').toString();
    

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [geolocation, setGeolocation] = useState('');
    const [foodRadio, setFoodRadio] = useState('');
    const [transportRadio, setTransportRadio] = useState('');
    const [equipmentRadio, setEquipmentRadio] = useState('');
    const [projectCreator, setProjectCreator] = useState('');
    const button = document.querySelector('.main-button-edit');
    
    const getUserData = async () => {
        try {
            app.firestore().collection("projects")
            .doc(project_id)
            .get()
            .then(doc => {
                setTitle(doc.get("title_project"));
                setDescription(doc.get("description_project"));
                setDate(doc.get("date"));
                setTime(doc.get("time"));
                setGeolocation(doc.get("geolocation"));
                setFoodRadio(doc.get("food"));
                setTransportRadio(doc.get("transport"));
                setEquipmentRadio(doc.get("equipment"));
                setProjectCreator(doc.get("userId"));
            });
            

        } catch (error) {
            alert(error)
        } 
    }

    useEffect(() => {
        getUserData();
    }, []);

    const userId = app.auth().currentUser.uid;

    if (userId == projectCreator) {
        console.log(true);
    } else {
        console.log(false);
    }


    const deleteProject = () => {
        try {
            app.firestore().collection('projects').doc(project_id).delete();
            alert('Successed')
        } catch (e) {
            alert(e)
        }
    }

    return (
        <>
        
        <Sidebar />

        <main>
        <div class="section-event-info">
            <h1 class="event-info__title">{title}</h1>
            <div class="event-info__row">
                <div class="row-block"><img src={require("./images/ProjectPage/geolocation.svg").default} alt="Геолокация" /><span>{geolocation}</span></div>
                <div class="row-block"><img src={require("./images/ProjectPage/calendar.svg").default} alt="Дата" /><span>Дата события: {date}</span></div>
                <div class="row-block"><img src={require("./images/ProjectPage/time.svg").default} alt="События" /><span>Время начала: {time}</span></div>
            </div>
          


            <div class="tabs-body">

                <div class="tabs__block event-info__description" id="description">
                    <h2 class="description__title">Описание</h2>
                    <p class="description__text">{description}</p>
                </div>
                  
                <div class="tabs__block event-info__others" id="other">
                    <h2 class="others__title">Другое:</h2>
                    <div class="others-block">
                        <div class="others-row"><span>Прожект менеджер: {foodRadio}</span></div>
                        <div class="others-row"><span>Front-End: {transportRadio}</span></div>
                        <div class="others-row"><span>Back-End: {equipmentRadio}</span></div>
                    </div>
                </div>
                  
                <div class="tabs__block event-info__contacts" id="contacts">
                    <h2 class="contacts__title">Контакты</h2>
                    <div class="contacts-block">
                        <div class="contacts-row">
                            <button class="contacts__button">elab.druh@gmail.com</button>
                        </div>
                    </div>
                </div>

                <div class="tabs__block event-info__control" id="control">
                    <h2 class="control__title">Управление</h2>
                    <div class="control-block">
                        <div class="control-row">
                            <Link to={`/edit_project?id=${project_id}`} class="control__button">Изменить проект</Link>
                        </div>
                        <div class="control-row">
                            <button onClick={deleteProject} class="control__button">Удалить проект</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </main>

        </>
    )
    

}

export default ProjectPage;