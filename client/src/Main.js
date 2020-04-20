import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Glossary from './Pages/Glossary';
import Admin from './Pages/Admin';
import Forum from './Pages/Forum';

import AdminGlossary from './Pages/AdminGlossary';

import AdminRemedies from './Pages/AdminRemedies';
import AdminAddRemedies from './Pages/AdminAddRemedies'
import AdminEditRemedies from './Pages/AdminEditRemedies';

import AdminUsers from './Pages/AdminUsers';

import AdminAddGlossary from './Pages/AdminAddGlossary';

import AdminAddUser from './components/AdminAddUser';
import AdminEditUser from './components/AdminEditUser';

import AdminCaptions from './Pages/AdminCaptions';

import AdminImages from './Pages/AdminImages';

import PageNotFound from './Pages/PageNotFound';
import Remedies from './Pages/Remedies';
import jwt from 'jsonwebtoken';

const isAdmin = () => {
	const token = localStorage.getItem("user-token")
	if (token) {
		try {
			let decoded = jwt.verify(token, 'herbs');
			return decoded.user_info.is_admin
		} catch (e) {
			console.log(e);
			return false
		}
	} else {
		return false
	}
}

const AdminRoute = () => {
	return (
	<Route
		path="/admin"
		render={({ match: { url } }) => (
			<>
				<Route path={`${url}/`} component={Admin} exact />
				<Route path={`${url}/glossary_list`} component={AdminGlossary} />
				<Route path={`${url}/add_glossary`} component={AdminAddGlossary} />
				<Route path={`${url}/remedies_list`} component={AdminRemedies} />
				<Route path={`${url}/add_remedies`} component={AdminAddRemedies} />
				<Route path={`${url}/edit_remedies`} component={AdminEditRemedies} />
				<Route path={`${url}/user_list`} component={AdminUsers} />
				<Route path={`${url}/add_user`} component={AdminAddUser} />
				<Route path={`${url}/edit_user`} component={AdminEditUser} />
				<Route path={`${url}/captions`} component={AdminCaptions} />
			</>
		)}
	/>
)
}

const Main = () => {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/about' component={About} />
			<Route exact path='/forum' component={Forum} />
			<Route exact path='/glossary' component={Glossary} />
			<Route exact path='/glossary/:title' component={Glossary} />
			<Route exact path='/remedies' component={Remedies} />
			<Route exact path='/remedies/:name' component={Remedies} />


			{/* <Route exact path='/admin' component={Admin}/> */}

			{isAdmin() ? AdminRoute() : ""}



			{/*
			<Route exact path='/admin/glossary_list/' component={AdminGlossary}/>
    		<Route exact path='/admin/add_glossary/' component={AdminAddGlossary}/>
    		<Route exact path='/admin/edit_glossary' component={AdminEditGlossary}/>

    		<Route exact path='/admin/remedies_list/' component={AdminRemedies}/>
    		<Route exact path='/admin/add_remedies/' component={AdminAddRemedies}/>
    		<Route exact path='/admin/edit_remedies' component={AdminEditRemedies}/>
        	*/
			}

			<Route component={PageNotFound} />
		</Switch>
	);
}

export default Main;
