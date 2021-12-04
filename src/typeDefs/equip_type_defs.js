const { gql } =require('apollo-server') ;

const equipTypeDefs = gql `

    input Usuarios{
        eqid: String!

        user1: String!
        passw1: String!
        userName1 : String!
        asigndata1 : String!
        usertype1 : String!

        user2: String!
        passw2: String!
        userName2 : String!
        asigndata2 : String!
        usertype2 : String!

        user3: String!
        passw3: String!
        userName3 : String!
        asigndata3 : String!
        usertype3 : String!
    }

    input Software{
        eqid : String!

        Edition : String!
        Typesystem : Boolean!
        Manufantivirus : String!
        Licenantivirus : Boolean!
        LicOfic : String!
        LibOfic : String!
        other1 : String!
        licother1 : String!
        other2 : String!
        licother2 : String!
        other3 : String!
        licother3 : String!
        notes : String!
    }

    input Register{
        eqid : String!

        eqtype : String!
        model :String!
        numSeries :String!
        numProd :String!
        procMarc :String!
        procModel :String!
        procVel :String!
        ram :String!
        discoType :String!
        discoCapacity :String!
        tGraphicalInd :Boolean!
        tGraphicMarc :String!
        screenSize :Int!
        USB :Boolean!
        HDMI :Boolean!
        sAudio :Boolean!
        eAudio :Boolean!
        bluetooth :Boolean!
        wifi :Boolean!
        ethernet :Boolean!
        webcam :Boolean!
        mouse :Boolean!
        keyboard :Boolean!
        unityCD : Boolean!
        other :String!
        lastChange :String!
    }

    input Contabilidad{
        eqid : String!
        invoice : String!
        dateinvoice : String!
        pricenet : String!
        iva : String!
        shopplace : String!
        warranty : String!
    }

    type UsuariosGet{
        eqid: String!

        user1: String!
        passw1: String!
        userName1 : String!
        asigndata1 : String!
        usertype1 : String!

        user2: String!
        passw2: String!
        userName2 : String!
        asigndata2 : String!
        usertype2 : String!

        user3: String!
        passw3: String!
        userName3 : String!
        asigndata3 : String!
        usertype3 : String!
    }

    type SoftwareGet{
        eqid : String!

        Edition : String!
        Typesystem : Boolean!
        Manufantivirus : String!
        Licenantivirus : Boolean!
        LicOfic : String!
        LibOfic : String!
        other1 : String!
        licother1 : String!
        other2 : String!
        licother2 : String!
        other3 : String!
        licother3 : String!
        notes : String!
    }

    type RegisterGet{
        eqid : String!

        eqtype : String!
        model :String!
        numSeries :String!
        numProd :String!
        procMarc :String!
        procModel :String!
        procVel :String!
        ram :String!
        discoType :String!
        discoCapacity :String!
        tGraphicalInd :Boolean!
        tGraphicMarc :String!
        screenSize :Int!
        USB :Boolean!
        HDMI :Boolean!
        sAudio :Boolean!
        eAudio :Boolean!
        bluetooth :Boolean!
        wifi :Boolean!
        ethernet :Boolean!
        webcam :Boolean!
        mouse :Boolean!
        keyboard :Boolean!
        unityCD : Boolean!
        other :String!
        lastChange :String!
    }

    type ContabilidadGet{
        eqid : String!
        invoice : String!
        dateinvoice : String!
        pricenet : String!
        iva : String!
        shopplace : String!
        warranty : String!
    }

    type Query{
        getRegisterById(eqid: String!): RegisterGet!
        getUserById(eqid: String!): UsuariosGet!
        getContabilidadById(eqid: String!): ContabilidadGet!
        getSoftwareById(eqid: String!): SoftwareGet!
    }

    type Mutation{
        newRegister(registerInput: Register!)
        newUsuario(usuarioInput: Usuario!)
        newContabilidad(contabilidadInput: Contabilidad!)
        newSoftware(softwareInput: Software!)
    }


` ;

module.exports = equipTypeDefs ;