import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import AdminEditGlossary from "./AdminEditGlossary";
import AdminDeleteGlossary from "./AdminDeleteGlossary";
import AdminAddGlossary from "./AdminAddGlossary";

const AdminViewGlossary = props => {
	const [glossary, setGlossary] = useState([]);
	const [viewDrafts, setViewDrafts] = useState({
		onlyDrafts: false,
		toggleText: "Published"
	});

	useEffect(() => {
		axios
			.get(`/api/admin/get_glossary`)
			.then(res => {
				setGlossary(res.data);
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
			<div class="admin-toggle">
				<Form.Check
					type="switch"
					id="custom-switch"
					label={"Currently viewing: " + viewDrafts.toggleText}
					onChange={e => changeView(e)} />
			</div>

			<Table striped bordered>
				<thead>
					<tr>
						<th class="align-middle">Title</th>
						<th class="align-middle">Definition</th>
						<th class="align-middle">Usage</th>
						<th class="align-middle">
							<AdminAddGlossary />
						</th>
					</tr>
				</thead>
				<tbody>
					{glossary.filter(glossary =>
						glossary.title.toLowerCase().includes(props.query.toLowerCase())
					).map(glossary => {
						if (glossary.is_published === !viewDrafts.onlyDrafts) {
							return (
								<tr key={glossary._id} name={glossary.title}>
									<td class="align-middle">{glossary.title}</td>
									<td class="align-middle">{glossary.definition}</td>
									<td class="align-middle">{glossary.usage}</td>
									<td class="align-middle">
										<ButtonGroup>
											<AdminEditGlossary item={glossary} />
											<AdminDeleteGlossary
												glossary={glossary}
												setGlossary={setGlossary}
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

export default AdminViewGlossary;
