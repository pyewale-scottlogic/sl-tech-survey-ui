import axios from "axios";

const baseUrl = "https://tech-survey-api.azurewebsites.net/api/";
//const baseUrl = "https://localhost:7105/api/";

export default {

    Employee(url = baseUrl + 'employees/') {
        return {
            fetchAll: () => axios.get(url).catch(err => {return err.response;}),
            fetchById: id => axios.get(url + id).catch(err => {return err.response;}),
            create: newRecord => axios.post(url, newRecord).catch(err => {return err.response;}),
            update: (id, updatedRecord) => axios.put(url, updatedRecord).catch(err => {return err.response;}),
            delete: id => axios.delete(url + id).catch(err => {return err.response;}),
        }
    },


    Company(url = baseUrl + 'companies/') {
        return {
            fetchAll: () => axios.get(url).catch(err => {return err.response;}),
            fetchById: id => axios.get(url + id).catch(err => {return err.response;}),
            create: newRecord => axios.post(url, newRecord).catch(err => {return err.response;}),
            update: (id, updatedRecord) => axios.put(url, updatedRecord).catch(err => {return err.response;}),
            delete: id => axios.delete(url + id).catch(err => {return err.response;}),
        }
    },

    Platform(url = baseUrl + 'platforms/') {
        return {
            fetchAll: () => axios.get(url).catch(err => {return err.response;}),
            fetchById: id => axios.get(url + id).catch(err => {return err.response;}),
            create: newRecord => axios.post(url, newRecord).catch(err => {return err.response;}),
            update: (id, updatedRecord) => axios.put(url, updatedRecord).catch(err => {return err.response;}),
            delete: id => axios.delete(url + id).catch(err => {return err.response;}),
        }
    },

    Technology(url = baseUrl + 'technologies/') {
        return {
            fetchAll: () => axios.get(url).catch(err => {return err.response;}),
            fetchById: id => axios.get(url + id).catch(err => {return err.response;}),
            create: newRecord => axios.post(url, newRecord).catch(err => {return err.response;}),
            update: (id, updatedRecord) => axios.put(url, updatedRecord).catch(err => {return err.response;}),
            delete: id => axios.delete(url + id).catch(err => {return err.response;}),
        }
    },

    Project(url = baseUrl + 'companies/') {
        return {
            fetchAll: () => axios.get(baseUrl + 'projects/').catch(err => {return err.response;}),
            fetchById: id => axios.get(url + id).catch(err => {return err.response;}),
            fetchForCompany : (companyId) => axios.get(url + companyId + '/projects/' ).catch(err => {return err.response;}),
            create: (companyId, newRecord) => axios.post(url + companyId + '/projects/', newRecord).catch(err => {return err.response;}),
            update: (companyId, updatedRecord) => axios.put(url+ companyId + '/projects/', updatedRecord).catch(err => {return err.response;}),
            delete: (id) => axios.delete(baseUrl + 'projects/' + id).catch(err => {return err.response;}),
        }
    },

    Survey(url = baseUrl + 'ProjectSurvey/') {
        return {
            fetchByProjectId: projectId => axios.get(url + 'projects/' + projectId).catch(err => {return err.response;}),
            // fetchAll: () => axios.get(baseUrl + 'projects/'),            
            // fetchForCompany : (companyId) => axios.get(url + companyId + '/projects/' ),
            create: (newRecord) => axios.post(url, newRecord).catch(err => {return err.response;}),
            update: (updatedRecord) => axios.put(url, updatedRecord).catch(err => {return err.response;}),
            delete: (id) => axios.delete(url + id).catch(err => {return err.response;}),
        }
    },

    ProjectOwner(url = baseUrl + 'projects/') {
        return {
            fetchAll: () => axios.get(baseUrl + 'projectOwners/').catch(err => {return err.response;}),
            fetchByProjectId : id => axios.get(url + id + '/projectOwners/').catch(err => {return err.response;}),
            create: (projectId, newRecord) => axios.post(url + projectId + '/projectOwners/', newRecord).catch(err => {return err.response;}),
            update: (projectId, updatedRecord) => axios.put(url + projectId + '/projectOwners/', updatedRecord).catch(err => {return err.response;}),
            delete: (id) => axios.delete(baseUrl + 'projectOwners/' + id).catch(err => {return err.response;}),
        }
    },

}