import axios from "axios";

const baseUrl = "https://localhost:7105/api/";

export default {

    Employee(url = baseUrl + 'employees/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    },


    Company(url = baseUrl + 'companies/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    },

    Platform(url = baseUrl + 'platforms/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    },

    Technology(url = baseUrl + 'technologies/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    },

    Project(url = baseUrl + 'companies/') {
        return {
            fetchAll: () => axios.get(baseUrl + 'projects/'),
            fetchById: id => axios.get(url + id),
            fetchForCompany : (companyId) => axios.get(url + companyId + '/projects/' ),
            create: (companyId, newRecord) => axios.post(url + companyId + '/projects/', newRecord),
            update: (companyId, updatedRecord) => axios.put(url+ companyId + '/projects/', updatedRecord),
            delete: (id) => axios.delete(baseUrl + 'projects/' + id)
        }
    }

}