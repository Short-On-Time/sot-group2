import React, { useState, useEffect } from "react";
import axios from "axios";
// import config from "../config.js";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import AdminEditRemedies from "../Pages/AdminEditRemedies";
import { FaRegTrashAlt } from "react-icons/fa";
import { TiDocumentAdd } from "react-icons/ti";

const AdminViewRemedies = props => {
	const [remedies, setRemedies] = useState([]);
	const [selectedItem, setSelectedItem] = useState([]);

	useEffect(() => {
		axios
			.get(`/api/admin/get_remedy`)
			.then(res => {
				setRemedies(res.data);
			});
	}, []);

	const deleteGloss = e => {
		const name = e.target.value;
		axios.delete(`/api/admin/delete_remedy/${name}`) //this
			.then(res => {
				console.log(`Deleted ${res.data.name}!`)
			});
		axios.get(`/api/admin/get_remedy`)
			.then(res => {
				setRemedies(res.data);
			});
	};

	return (
		<div>
			<Table striped bordered>
				<thead>
					<tr>
						<th>Name</th>
						<th>Ailment</th>
						<th>Body Part</th>
						<th>Description</th>
						<th><a><TiDocumentAdd size={32} /></a></th>
					</tr>
				</thead>
				<tbody>
					{remedies.filter(remedies =>
						remedies.name.toLowerCase().includes(props.query.toLowerCase())
					).map(remedies => {
						return (
							<tr key={remedies._id} name={remedies.name}>
								<td class="align-middle">{remedies.name}</td>
								<td>{remedies.ailment}</td>
								<td>{remedies.body_part}</td>
								<td>{remedies.description}</td>
								<td class="align-middle">
									<ButtonGroup>
										<AdminEditRemedies
											item={remedies} />
										<Button
											variant="danger"
											onclick={deleteGloss}
											value={remedies.name}
										>
											<FaRegTrashAlt color="white" />
										</Button>
									</ButtonGroup>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};

export default AdminViewRemedies;
