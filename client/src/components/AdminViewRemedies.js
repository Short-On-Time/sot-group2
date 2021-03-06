import React, { useState, useEffect } from "react";
import axios from "axios";
// import config from "../config.js";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";
// import Container from "react-bootstrap/Container";
import AdminEditRemedies from "./AdminEditRemedies";
import AdminDeleteRemedies from "./AdminDeleteRemedies";
import AdminAddRemedies from "./AdminAddRemedies";

const AdminViewRemedies = props => {
	const [remedies, setRemedies] = useState([]);
	const [viewDrafts, setViewDrafts] = useState({
		onlyDrafts: false,
		toggleText: "Published"
	});

	useEffect(() => {
		axios
			.get(`/api/admin/get_remedy`)
			.then(res => {
				setRemedies(res.data);
			});
	}, []);

	const changeView = (e) => {
		if (e.target.checked) {
			setViewDrafts({
				onlyDrafts: e.target.checked,
				toggleText: "Drafts"
			});
		} else {
			setViewDrafts({
				onlyDrafts: e.target.checked,
				toggleText: "Published"
			});
		}
	};

	return (
		<div>
			<div className="admin-toggle">
				<Form.Check
					type="switch"
					id="custom-switch"
					label={"Currently viewing: " + viewDrafts.toggleText}
					onChange={e => changeView(e)} />
			</div>

			<Table striped bordered>
				<thead>
					<tr>
						<th class="align-middle">Name</th>
						<th class="align-middle">Ailment</th>
						<th class="align-middle">Body Part</th>
						<th class="align-middle">Description</th>
						<th class="align-middle">
							<AdminAddRemedies />
						</th>
					</tr>
				</thead>
				<tbody>
					{remedies.filter(remedies =>
						remedies.name.toLowerCase().includes(props.query.toLowerCase())
					).map(remedy => {
						if (remedy.is_published === !viewDrafts.onlyDrafts) {
							return (
								<tr key={remedy._id} name={remedy.name}>
									<td class="align-middle">{remedy.name}</td>
									<td class="align-middle">{remedy.ailment_type}</td>
									<td class="align-middle">{remedy.body_part}</td>
									<td class="align-middle">{remedy.description}</td>
									<td class="align-middle">
										<ButtonGroup>
											<AdminEditRemedies item={remedy} />
											<AdminDeleteRemedies
												remedies={remedy}
												setRemedies={setRemedies}
											/>
										</ButtonGroup>
									</td>
								</tr>
							);
						}
					})}
				</tbody>
			</Table>
		</div>
	);
};

export default AdminViewRemedies;
