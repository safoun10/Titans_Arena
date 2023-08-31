// DataComponent.js
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "./actions";

const DataComponent = ({ data, loading, error, fetchData }) => {
	useEffect(() => {
		fetchData();
	}, []);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error: {error}</p>;
	}

	return (
		<div>
			<h1>Fetched Data</h1>
			<ul>
				{data.map((item) => (
					<li key={item._id}>{item.title}</li>
				))}
			</ul>
		</div>
	);
};

const mapStateToProps = (state) => ({
	data: state.data,
	loading: state.loading,
	error: state.error,
});

export default connect(mapStateToProps, { fetchData })(DataComponent);
