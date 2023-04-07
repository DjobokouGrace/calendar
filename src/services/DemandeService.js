import axios from './axios';
class DemandeService{
	get() {
		axios.get("/demande")
		.then((response) => response)
		.catch((error) => error);

	}

	getById(params) {

		axios.post(`/demande/${params.id}`)
		.then((response) => response)
		.catch((error) => error);
	}

	create(body){
		axios.post("/demande",{
			    datefin: body.datefin,
			    etat_demande: body.etat_demande,
			    userId: body.userId

		})
		.then((response) => response)
		.catch((error) => error);

	}


	update(params,body){

			axios.post("/demande",{
			    datefin: body.datefin,
			    etat_demande: body.etat_demande,
			    userId: body.userId

		})
		.then((response) => response)
		.catch((error) => error);
	}
	delete(params){

			axios.delete(`/demande/${params.id}` )
			.then((response) => response)
			.catch((error) => error);
	}




}