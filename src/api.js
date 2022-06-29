import axios from "axios";

const baseUrl = "https://tech-survey-api.azurewebsites.net/api/";

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
    },

    Survey(url = baseUrl + 'ProjectSurvey/') {
        return {
            fetchByProjectId: projectId => axios.get(url + 'projects/' + projectId),

            // fetchAll: () => axios.get(baseUrl + 'projects/'),            
            // fetchForCompany : (companyId) => axios.get(url + companyId + '/projects/' ),
            create: (newRecord) => axios.post(url, newRecord),
            update: (updatedRecord) => axios.put(url, updatedRecord),
            delete: (id) => axios.delete(url + id)
        }
    },

    ProjectOwner(url = baseUrl + 'projects/') {
        return {
            fetchAll: () => axios.get(baseUrl + 'projectOwners/'),
            fetchByProjectId : id => axios.get(url + id + '/projectOwners/'),
            create: (projectId, newRecord) => axios.post(url + projectId + '/projectOwners/', newRecord),
            update: (projectId, updatedRecord) => axios.put(url + projectId + '/projectOwners/', updatedRecord),
            delete: (id) => axios.delete(baseUrl + 'projectOwners/' + id)
        }
    },

}