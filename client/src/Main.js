import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Glossary from './Pages/Glossary';
import Admin from './Pages/Admin';

import AdminGlossary from './Pages/AdminGlossary';
import AdminAddGlossary from './Pages/AdminAddGlossary';

import AdminRemedys from './Pages/AdminRemedys';
import AdminAddRemedys from './Pages/AdminAddRemedys'
import AdminEditRemedys from './Pages/AdminEditRemedys';

import AdminUsers from './Pages/AdminUsers';
import AdminAddUser from './Pages/AdminAddUser';
import AdminEditUser from './Pages/AdminEditUser';

import PageNotFound from './Pages/PageNotFound';
import Remedys from './Pages/Remedys';

const Main = () => {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/about' component={About} />
			<Route exact path='/glossary' component={Glossary} />
			<Route exact path='/glossary/:title' component={Glossary} />
			<Route exact path='/remedys' component={Remedys} />
			<Route exact path='/remedys/:name' component={Remedys} />

			{/* <Route exact path='/admin' component={Admin}/> */}

			<Route
				path="/admin"
				render={({ match: { url } }) => (
					<>
						<Route path={`${url}/`} component={Admin} exact />
						<Route path={`${url}/glossary_list`} component={AdminGlossary} />
						<Route path={`${url}/add_glossary`} component={AdminAddGlossary} />
						<Route path={`${url}/remedys_list`} component={AdminRemedys} />
						<Route path={`${url}/add_remedys`} component={AdminAddRemedys} />
						<Route path={`${url}/edit_remedys`} component={AdminEditRemedys} />
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

    		<Route exact path='/admin/remedys_list/' component={AdminRemedys}/>
    		<Route exact path='/admin/add_remedys/' component={AdminAddRemedys}/>
    		<Route exact path='/admin/edit_remedys' component={AdminEditRemedys}/>
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
