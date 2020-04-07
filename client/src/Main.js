import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Glossary from './Pages/Glossary';
import Admin from './Pages/Admin';

import AdminGlossary from './Pages/AdminGlossary';
import AdminAddGlossary from './Pages/AdminAddGlossary';

import AdminRemedies from './Pages/AdminRemedies';
import AdminAddRemedies from './Pages/AdminAddRemedies'
import AdminEditRemedies from './Pages/AdminEditRemedies';

import AdminUsers from './Pages/AdminUsers';
import AdminAddUser from './Pages/AdminAddUser';
import AdminEditUser from './Pages/AdminEditUser';

import PageNotFound from './Pages/PageNotFound';
import Remedies from './Pages/Remedies';

const Main = () => {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/about' component={About} />
			<Route exact path='/glossary' component={Glossary} />
			<Route exact path='/glossary/:title' component={Glossary} />
			<Route exact path='/remedies' component={Remedies} />
			<Route exact path='/remedies/:name' component={Remedies} />

			{/* <Route exact path='/admin' component={Admin}/> */}

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
					</>
				)}
			/>

			{/*
			<Route exact path='/admin/glossary_list/' component={AdminGlossary}/>
    		<Route exact path='/admin/add_glossary/' component={AdminAddGlossary}/>
    		<Route exact path='/admin/edit_glossary' component={AdminEditGlossary}/>

    		<Route exact path='/admin/remedies_list/' component={AdminRemedies}/>
    		<Route exact path='/admin/add_remedies/' component={AdminAddRemedies}/>
    		<Route exact path='/admin/edit_remedies' component={AdminEditRemedies}/>
        	*/
			}

			<Route exact path='/admin/user_list/' component={AdminUsers} />
			<Route exact path='/admin/add_user/' component={AdminAddUser} />
			<Route exact path='/admin/edit_user/' component={AdminEditUser} />
			<Route component={PageNotFound} />
		</Switch>
	);
}

export default Main;
