const equipResolver = {

    Query: {

        getRegisterById: (_, { eqId }, { dataSources , userIdToken }) => {

            if(userIdToken){
                return dataSources.equipAPI.getRegister(eqId)
            }else{
                return null;
            }

        },

        getUserById: (_, { eqId }, { dataSources , userIdToken }) =>{
            if(userIdToken){
                return dataSources.equipAPI.getUsuario(eqId);
            }else{
                return null;
            }
        },

        getContabilidadById: (_, { eqId }, { dataSources , userIdToken }) =>{

            if(userIdToken){
                return dataSources.equipAPI.getContabilidad(eqId);
            }else{
                return null;
            }
        },

        getSoftwareById: (_, { eqId }, { dataSources , userIdToken }) =>{

            if(userIdToken){
                return dataSources.equipAPI.getSoftware(eqId);
            }else{
                return null;
            }
        }

    },

    Mutation: {

        newRegister: async (_, { registerInput }, { dataSources, userIdToken }) =>{

            if(userIdToken){

                const registerInput = {
                    eqid = registerInput.eqid,
                    eqtype = registerInput.eqtype,
                    model = registerInput.model,
                    numSeries = registerInput.numSeries,
                    numProd = registerInput.numProd,
                    procMarc = registerInput.procMarc,
                    procModel = registerInput.procModel,
                    procVel = registerInput.procVel,
                    ram = registerInput.ram,
                    discoType = registerInput.discoType,
                    discoCapacity = registerInput.discoCapacity,
                    tGraphicalInd = registerInput.tGraphicalInd,
                    tGraphicMarc = registerInput.tGraphicMarc,
                    screenSize = registerInput.screenSize,
                    USB = registerInput.USB,
                    HDMI = registerInput.HDMI,
                    sAudio = registerInput.sAudio,
                    eAudio = registerInput.eAudio,
                    bluetooth = registerInput.bluetooth,
                    wifi = registerInput.wifi,
                    ethernet = registerInput.ethernet,
                    webcam = registerInput.webcam,
                    mouse = registerInput.mouse,
                    keyboard = registerInput.keyboard,
                    unityCD = registerInput.unityCD,
                    other = registerInput.other,
                    lastChange = registerInput.lastChange,
                }
                return await dataSources.equipAPI.createRegister(registerInput);

            }else{
                throw console.error("Usuario no autorizado");
            }

        }

        newUsuario:

        newContabilidad:

        newSoftware:

    }

}