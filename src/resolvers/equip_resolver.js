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
                    eqid : registerInput.eqid,
                    eqtype : registerInput.eqtype,
                    model : registerInput.model,
                    numSeries : registerInput.numSeries,
                    numProd : registerInput.numProd,
                    procMarc : registerInput.procMarc,
                    procModel : registerInput.procModel,
                    procVel : registerInput.procVel,
                    ram : registerInput.ram,
                    discoType : registerInput.discoType,
                    discoCapacity : registerInput.discoCapacity,
                    tGraphicalInd : registerInput.tGraphicalInd,
                    tGraphicMarc : registerInput.tGraphicMarc,
                    screenSize : registerInput.screenSize,
                    USB : registerInput.USB,
                    HDMI : registerInput.HDMI,
                    sAudio : registerInput.sAudio,
                    eAudio : registerInput.eAudio,
                    bluetooth : registerInput.bluetooth,
                    wifi : registerInput.wifi,
                    ethernet : registerInput.ethernet,
                    webcam : registerInput.webcam,
                    mouse : registerInput.mouse,
                    keyboard : registerInput.keyboard,
                    unityCD : registerInput.unityCD,
                    other : registerInput.other,
                    lastChange : registerInput.lastChange,
                }
                return await dataSources.equipAPI.createRegister(registerInput);

            }else{
                throw console.error("Usuario no autorizado");
            }

        },

        newUsuario: async (_, { usuarioInput }, { dataSources, userIdToken }) =>{

            if(userIdToken){

                const usuarioInput = {
                    eqid : usuarioInput.eqid,
                    user1 :  usuarioInput.user1,
                    passw1 :  usuarioInput.passw1,
                    userName1 : usuarioInput.userName1,
                    asigndata1 : usuarioInput.asigndata1,
                    usertype1 : usuarioInput.usertype1,
            
                    user2 : usuarioInput.user2,
                    passw2 : usuarioInput.passw2,
                    userName2 : usuarioInput.userName2,
                    asigndata2 : usuarioInput.asigndata2,
                    usertype2 : usuarioInput.usertype2,
            
                    user3 : usuarioInput.user3,
                    passw3 : usuarioInput.passw3,
                    userName3 : usuarioInput.userName3,
                    asigndata3 : usuarioInput.asigndata3,
                    usertype3 : usuarioInput.usertype3,
                }
                return await dataSources.equipAPI.createUsuario(usuarioInput);

            }else{
                throw console.error("Usuario no autorizado");
            }

        },

        newContabilidad: async (_, { contabilidadInput }, { dataSources, userIdToken }) =>{

            if(userIdToken){

                const contabilidadInput = {
                    eqid : contabilidadInput.eqid,
                    invoice : contabilidadInput.invoice,
                    dateinvoice : contabilidadInput.dateinvoice,
                    pricenet : contabilidadInput.pricenet,
                    iva : contabilidadInput.iva,
                    shopplace : contabilidadInput.shopplace,
                    warranty : contabilidadInput,warranty,
  
                }
                return await dataSources.equipAPI.createContabilidad(contabilidadInput);

            }else{
                throw console.error("Usuario no autorizado");
            }

        },

        newSoftware: async (_, { softwareInput }, { dataSources, userIdToken }) =>{

            if(userIdToken){

                const softwareInput = {
                    eqid : softwareInput.eqid,
                    Edition : softwareInput.Edition,
                    Typesystem : softwareInput.Typesystem,
                    Manufantivirus : softwareInput.Manufantivirus,
                    Licenantivirus : softwareInput,Licenantivirus,
                    LicOfic :  softwareInput.LicOfic,
                    LibOfic : softwareInput.LibOfic,
                    other1 : softwareInput.other1,
                    licother1 : softwareInput.licother1,
                    other2 : softwareInput.other2,
                    licother2 : softwareInput.licother2,
                    other3 : softwareInput.other3,
                    licother3 : softwareInput.licother3,
                    notes : softwareInput.notes,

                }
                return await dataSources.equipAPI.createSofware(softwareInput);

            }else{
                throw console.error("Usuario no autorizado");
            }

        },

    }

}