import React from "react";
//include images into your bundle

//create your first component


export const Home = ({ count }) => {

	const digitos = String(count).padStart(6, "0").split("")

	return (
		<div className="row">
			<div className="col">
				<div className="card">
					<i className="fa-regular fa-clock fa-spin">
					</i>
				</div>

				{digitos.map((digito, index) => (
					<div key={index} className="card">
						{digito}
					</div>
				))
				}
			</div>
		</div>

	);
};

export default Home;