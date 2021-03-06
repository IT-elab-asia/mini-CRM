import React, {useState, useEffect, Component} from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from "react-router";
import app from "./base";
import './ListProjects.scss';
import Sidebar from './Sidebar';
import './DefaultStyles.css';
import Welcome from './WelcomeDiv';

const ListProjects = () => {

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = app.firestore().collection('projects');

    function getProjects() {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setProjects(items);
            setLoading(false);
        })
    }

  
    useEffect(() => {
        getProjects();
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }
    
    var i;
var divs = document.getElementsByTagName('h2');
for(i=0;i<divs.length;i++) {
  if(divs[i].className == 'card-title') {
    divs[i].innerHTML = divs[i].innerHTML.substring(0,40);
  }
}
    
    return (
        <>
            <Sidebar />
            <Welcome />
            <main>
                <div className="section-list-projects">
                    <div className="list__group-text">
                        <h2 className="list__title">Мероприятия</h2>
                        <Link class="link-reset-style" to="add_project"><button class="button-green list__button">Добавить проект</button></Link>
                    </div>
                    
                    <div class="cards-list">
                        {projects.map((project) => (
                        <Link class="link-block card-event" key={project.project_id} to={`/project_page?id=${project.project_id}`}>
                            <div class="card-header">
                                <div class="card-row__block">
                                    <img src={require('./images/Card image/default-image.svg').default} alt="" class="card-img" />
                                </div>
                                <div class="card-row__block">
                                    <h2 class="card-title">{project.title_project.length > 40 ? project.title_project.substring(0, 40) + "..." : project.title_project }</h2>
                                </div>
                            </div>
                            <div class="card-main">
                                <div class="card-main-group">
                                    <div class="card-row__block">
                                        <img src={require('./images/Card image/map.svg').default} alt="" />
                                        <span class="card-subtext">{project.geolocation}</span>
                                    </div>
                                    <div class="card-row__block">
                                        <img src={require('./images/Card image/time.svg').default} alt="" />
                                        <span class="card-subtext">{project.date} / {project.time}</span>
                                    </div>
                                </div>
                                <p class="card-description">{ project.description_project.length > 200 ? project.description_project.substring(0, 200) + "..." : project.description_project }</p>  
                            </div>
                        </Link>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )

}

export default ListProjects;