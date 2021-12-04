const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class EquipAPI extends RESTDataSource{

    constructor(){
        super();
        this.baseURL = serverConfig.equipos_api_url;
    }

    async createRegister(register) {
        register = new Object(JSON.parse(JSON.stringify(register)));
        return await this.post('/register', register);
    }

    async getRegister(eqid){
        return await this.get(`/register/${eqid}`);
    }

    async createUsuario(usuario) {
        usuario = new Object(JSON.parse(JSON.stringify(usuario)));
        return await this.post('/usuarios', usuario);
    }

    async getUsuario(eqid){
        return await this.get(`/usuarios/${eqid}`);
    }

    async createContabilidad(contabilidad) {
        contabilidad = new Object(JSON.parse(JSON.stringify(contabilidad)));
        return await this.post('/contabilidad', contabilidad);
    }

    async getContabilidad(eqid){
        return await this.get(`/contabilidad/${eqid}`);
    }

    async createSoftware(software) {
        software = new Object(JSON.parse(JSON.stringify(software)));
        return await this.post('/software', software);
    }

    async getSoftware(eqid){
        return await this.get(`/software/${eqid}`);
    }

};

module.exports = EquipAPI;