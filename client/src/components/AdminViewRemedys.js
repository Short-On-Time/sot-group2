import React, { useState, useEffect } from "react";
import axios from "axios";
// import config from "../config.js";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import AdminEditRemedys from "../Pages/AdminEditRemedys";
import { FaRegTrashAlt } from "react-icons/fa";
import { TiDocumentAdd } from "react-icons/ti";

const AdminViewRemedys = props => {
	const [remedys, setRemedys] = useState([]);
	const [selectedItem, setSelectedItem] = useState([]);

	useEffect(() => {
		axios
			.get(`/api/admin/get_remedy`)
			.then(res => {
				setRemedys(res.data);
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
				setRemedys(res.data);
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
					{remedys.filter(remedys =>
						remedys.name.toLowerCase().includes(props.query.toLowerCase())
					).map(remedys => {
						return (
							<tr key={remedys._id} name={remedys.name}>
								<td class="align-middle">{remedys.name}</td>
								<td>{remedys.ailment}</td>
								<td>{remedys.body_part}</td>
								<td>{remedys.description}</td>
								<td class="align-middle">
									<ButtonGroup>
										<AdminEditRemedys
											item={remedys} />
										<Button
											variant="danger"
											onclick={deleteGloss}
											value={remedys.name}
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

export default AdminViewRemedys;
