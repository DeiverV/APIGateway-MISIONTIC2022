const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class EquipAPI extends RESTDataSource{

    constructor(){
        super();
        this.baseURL = serverConfig.equipos_api_url;
    }

    async createRegister(registerInput) {
        register = new Object(JSON.parse(JSON.stringify(registerInput)));
        return await this.post('/register', registerInput);
    }

    async getRegister(eqid){
        return await this.get(`/register/${eqid}`);
    }

    async createUsuario(usuarioInput) {
        usuarioInput = new Object(JSON.parse(JSON.stringify(usuarioInput)));
        return await this.post('/usuarios', usuarioInput);
    }

    async getUsuario(eqid){
        return await this.get(`/usuarios/${eqid}`);
    }

    async createContabilidad(contabilidadInput) {
        contabilidadInput = new Object(JSON.parse(JSON.stringify(contabilidadInput)));
        return await this.post('/contabilidad', contabilidadInput);
    }

    async getContabilidad(eqid){
        return await this.get(`/contabilidad/${eqid}`);
    }

    async createSoftware(softwareInput) {
        softwareInput = new Object(JSON.parse(JSON.stringify(softwareInput)));
        return await this.post('/software', softwareInput);
    }

    async getSoftware(eqid){
        return await this.get(`/software/${eqid}`);
    }

};

module.exports = EquipAPI;