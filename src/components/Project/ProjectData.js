import myrecipe from '../../images/projects/myrecipe.jpg';
import odbc from '../../images/projects/odbc.jpg';
import geography from '../../images/projects/geography.png';
import flaskpic from '../../images/projects/flask.jpg';

export const project_1 = {
    name: 'My recipes',
    pic: myrecipe,
    tools: ['Bootstrap','jQuery','JavaScript','CSS','HTML'],
    desc: ['Collaborated with 4 team members analysing user requirements and designing the prototype of My Recipes website.',
            'Utilized Jira to manage team corporation as well as the process of project.',
            'Designed the layout of proposal and wrote proposal to meet the requirements.',
            'Developed log-in, sign up and search page for this website.',
            'Checked and fixed bugs to keep the results of functions consistent between different web pages.',
            'Added error prevention and feedback to improve user experience.',
            'Welcome to have a glimpse of this project:',
            <a href="https://github.com/cxcongcong/graduate_program" target="_blank" rel="noreferrer">Github Code</a>]
}

export const project_2 = {
    name: 'ODBC',
    pic: odbc,
    tools: ['React','JavaScript','CSS'],
    desc: ['Collaborated with other interns and had a weekly meeting with teammates to guarantee the development process.',
            'Developed websites using HTML5, JavaScript, CSS and React.',
            'Enhanced user experience and accomplish webpage objectives by creating site structure and navigation.',
            'Implemented enhancements that improved web functionality and responsiveness.']
}

export const project_3 = {
    name: 'Geographic data processing',
    pic: geography,
    tools: ['Python'],
    desc: ['Data ingestion, cleaning manipulation and Visualization.',
            'Rank the countries in dataframe based on the distance from the first case of COVID.',
            'Find the average foreign direct investment for each income class.',
            'Plot a scatter plot based on its latitude and longitude, and ink each country based on its continent .',
            'Welcome to have a glimpse of this project: ',
            <a href="https://github.com/cxcongcong/COMP9321-Geographic-data-processing-" target="_blank" rel="noreferrer">Github Code</a>]
}

export const project_4 = {
    name: 'Data Service (REST API)',
    pic: flaskpic,
    tools: ['Python','Pandas','flask'],
    desc: ['Develop a Flask-Restx data service that allows a client to read and store some TV Shows, and allow the consumers to access the data through a REST API.',
            'Deal with cases such as invalid titles and invalid attempts to use the endpoint.',
            'Welcome to have a glimpse of this project: ',
            <a href="https://github.com/cxcongcong/COMP9321-data-service" target="_blank" rel="noreferrer">Github Code</a>]
}