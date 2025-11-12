import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { Project } from './components/project/project';

export const routes: Routes = [
    { path: "", component: Home },
    { path: "about", component: About },
    { path: "project", component: Project },
    { path: "contact", component: Contact }    
];
