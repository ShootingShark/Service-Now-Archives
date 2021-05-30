var KBR_CONTINGENCIAS_CONSUMERISTAS_4_ITSM_REQUEST_UTILS = Class.create();
KBR_CONTINGENCIAS_CONSUMERISTAS_4_ITSM_REQUEST_UTILS.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    /**SNDOC 
    @name releaseGestaoEscritorioMenu
    @description This function return True/False for show menu on Portal 
    @example 
	  javascript: new KBR_CONTINGENCIAS_CONSUMERISTAS_4_ITSM_REQUEST_UTILS().releaseGestaoMenu(); 
	 }
	 Output: 
		 @returns {boolean} True/False. 
    */
    releaseGestaoEscritorioMenu: function() {
        if (gs.getUser().isMemberOf(gs.getProperty('KBR.CONTINGENCIAS_CONSUMERISTAS.GROUP_GESTAO_ESCRITORIO')) || gs.hasRole('admin')) {
            return true;
        } else {
            return false;
        }

    },

    /**SNDOC
    @name releaseGestaoMenu
    @description This function return True/False for show menu on Portal 
    @example 
	  javascript: new KBR_CONTINGENCIAS_CONSUMERISTAS_4_ITSM_REQUEST_UTILS().releaseGestaoMenu(); 
	 }
	 Output: 
		 @returns {boolean} True/False. 
    */
    releaseGestaoMenu: function() {
        if (gs.getUser().isMemberOf(gs.getProperty('KBR.CONTINGENCIAS_CONSUMERISTAS.GROUP_JURÍDICO')) || gs.hasRole('admin')) {
            return true;
        } else {
            return false;
        }

    },

    /**SNDOC
    @name releaseMelhorAcordoMenu
    @description This function return True/False for show menu on Portal 
    @example 
	  javascript: new KBR_CONTINGENCIAS_CONSUMERISTAS_4_ITSM_REQUEST_UTILS().releaseMelhorAcordoMenu(); 
	 }
	 Output: 
		 @returns {boolean} True/False. 
    */
    releaseMelhorAcordoMenu: function() {
        if (gs.getUser().isMemberOf(gs.getProperty('KBR.CONTINGENCIAS_CONSUMERISTAS.GROUP_JURÍDICO')) || gs.getUser().isMemberOf(gs.getProperty('KBR.CONTINGENCIAS_CONSUMERISTAS.GROUP_ADVOGADOS_ESCRITORIO')) || gs.hasRole('admin')) {
            return true;
        } else {
            return false;
        }

    },

    /**SNDOC
    @name releasePosAudienciaMenu
    @description This function return True/False for show menu on Portal 
    @example 
	  javascript: new KBR_CONTINGENCIAS_CONSUMERISTAS_4_ITSM_REQUEST_UTILS().releasePosAudienciaMenu(); 
	 }
	 Output: 
		 @returns {boolean} True/False. 
    */
    releasePosAudienciaMenu: function() {
        if (gs.getUser().isMemberOf(gs.getProperty('KBR.CONTINGENCIAS_CONSUMERISTAS.GROUP_JURÍDICO')) || gs.getUser().isMemberOf(gs.getProperty('KBR.CONTINGENCIAS_CONSUMERISTAS.GROUP_ADVOGADOS_ESCRITORIO')) || gs.hasRole('admin')) {
            return true;
        } else {
            return false;
        }

    },

    /**SNDOC
    @name releaseAudienciaMenu
    @description This function return True/False for show menu on Portal 
    @example 
	  javascript: new KBR_CONTINGENCIAS_CONSUMERISTAS_4_ITSM_REQUEST_UTILS().releaseAudienciaMenu(); 
	 }
	 Output: 
		 @returns {boolean} True/False. 
    */
    releaseAudienciaMenu: function() {
        if (gs.getUser().isMemberOf(gs.getProperty('KBR.CONTINGENCIAS_CONSUMERISTAS.GROUP_JURÍDICO')) || gs.getUser().isMemberOf(gs.getProperty('KBR.CONTINGENCIAS_CONSUMERISTAS.GROUP_ADVOGADOS_ESCRITORIO')) || gs.getUser().isMemberOf(gs.getProperty('KBR.CONTINGENCIAS_CONSUMERISTAS.GROUP_ADVOGADOS_AUDIENCISTAS')) || gs.getUser().isMemberOf(gs.getProperty('KBR.CONTINGENCIAS_CONSUMERISTAS.GROUP_ADVOGADOS_PREPOSTOS')) || gs.hasRole('admin')) {
            return true;
        } else {
            return false;
        }

    },

    /**SNDOC
    @name releasePreAudienciaMenu
    @description This function return True/False for show menu on Portal 
    @example 
	  javascript: new KBR_CONTINGENCIAS_CONSUMERISTAS_4_ITSM_REQUEST_UTILS().releasePreAudienciaMenu(); 
	 }
	 Output: 
		 @returns {boolean} True/False. 
    */
    releasePreAudienciaMenu: function() {
        if (gs.getUser().isMemberOf(gs.getProperty('KBR.CONTINGENCIAS_CONSUMERISTAS.GROUP_JURÍDICO')) || gs.getUser().isMemberOf(gs.getProperty('KBR.CONTINGENCIAS_CONSUMERISTAS.GROUP_ADVOGADOS_ESCRITORIO')) || gs.hasRole('admin')) {
            return true;
        } else {
            return false;
        }

    },

    /**SNDOC
    @name releaseDemandasMenu
    @description This function return True/False for show menu on Portal 
    @example 
	  javascript: new KBR_CONTINGENCIAS_CONSUMERISTAS_4_ITSM_REQUEST_UTILS().releaseDemandasMenu(); 
	 }
	 Output: 
		 @returns {boolean} True/False. 
    */
    releaseDemandasMenu: function() {
        if (gs.getUser().isMemberOf(gs.getProperty('KBR.CONTINGENCIAS_CONSUMERISTAS.GROUP_JURÍDICO')) || gs.getUser().isMemberOf(gs.getProperty('KBR.CONTINGENCIAS_CONSUMERISTAS.GROUP_OPERADOR')) || gs.getUser().isMemberOf(gs.getProperty('KBR.CONTINGENCIAS_CONSUMERISTAS.GROUP_ADVOGADOS_ESCRITORIO')) || gs.hasRole('admin')) {
            return true;
        } else {
            return false;
        }

    },

    /**SNDOC
    @name releaseHomeMenu
    @description This function return True/False for show menu on Portal 
    @example 
	  javascript: new KBR_CONTINGENCIAS_CONSUMERISTAS_4_ITSM_REQUEST_UTILS().releaseHomeMenu(); 
	 }
	 Output: 
		 @returns {boolean} True/False. 
    */
    releaseHomeMenu: function() {
        if (gs.getUser().isMemberOf(gs.getProperty('KBR.CONTINGENCIAS_CONSUMERISTAS.GROUP_JURÍDICO')) || gs.getUser().isMemberOf(gs.getProperty('KBR.CONTINGENCIAS_CONSUMERISTAS.GROUP_OPERADOR')) || gs.getUser().isMemberOf(gs.getProperty('KBR.CONTINGENCIAS_CONSUMERISTAS.GROUP_ADVOGADOS_ESCRITORIO')) || gs.getUser().isMemberOf(gs.getProperty('KBR.CONTINGENCIAS_CONSUMERISTAS.GROUP_ADVOGADOS_AUDIENCISTAS')) || gs.getUser().isMemberOf(gs.getProperty('KBR.CONTINGENCIAS_CONSUMERISTAS.GROUP_ADVOGADOS_PREPOSTOS')) || gs.hasRole('admin')) {
            return true;
        } else {
            return false;
        }

    },

    /**SNDOC
    @name returnAudienceQuery
    @description This function return query for view records on Audience table 
	@param {string} [user] - User
    @example 
	  javascript: new KBR_CONTINGENCIAS_CONSUMERISTAS_4_ITSM_REQUEST_UTILS().returnAudienceQuery(gs.getUser()); 
	 }
	 Output: 
		 @returns {string} Query for view Audience table records. 
    */
    returnAudienceQuery: function(user) {
        var query = '';
        if (user.isMemberOf(gs.getProperty('KBR.CONTINGENCIAS_CONSUMERISTAS.GROUP_ADVOGADOS_ESCRITORIO'))) {
            query = 'u_kbr_consumer_process.u_kbr_law_office=' + user.getCompanyID(); //Usuários do Escritório de Advocacia
        } else if (user.isMemberOf(gs.getProperty('KBR.CONTINGENCIAS_CONSUMERISTAS.GROUP_ADVOGADOS_PREPOSTOS')) || user.isMemberOf(gs.getProperty('KBR.CONTINGENCIAS_CONSUMERISTAS.GROUP_ADVOGADOS_AUDIENCISTAS'))) {
            query = 'u_kbr_consumer_process.u_kbr_law_office=' + user.getCompanyID() + '^u_kbr_audiologist_attorneyDYNAMIC90d1921e5f510100a9ad2572f2b477fe^ORu_kbr_representativeDYNAMIC90d1921e5f510100a9ad2572f2b477fe'; //Advogados Audiencistas ou Prepostos
        } else {
            query = 'u_numberISNOTEMPTY';
        }
        //gs.log("Query of visualization of records of the Audience for the User : " + user.getName() + ". QUERY: '" + query + "'.");
        return query;
    },

    /**SNDOC
    @name returnConsumerQuery
    @description This function return query for view records on Consumer Process table 
	@param {string} [user] - User
    @example 
	  javascript: new KBR_CONTINGENCIAS_CONSUMERISTAS_4_ITSM_REQUEST_UTILS().returnConsumerQuery(gs.getUser()); 
	 }
	 Output: 
		 @returns {string} Query for view Consumer Process table records. 
    */
    returnConsumerQuery: function(user) {
        var query = '';
        if (user.isMemberOf(gs.getProperty('KBR.CONTINGENCIAS_CONSUMERISTAS.GROUP_ADVOGADOS_ESCRITORIO'))) {
            query = 'u_kbr_law_office=' + user.getCompanyID(); //Usuários do Escritório de Advocacia
        } else if (user.isMemberOf(gs.getProperty('KBR.CONTINGENCIAS_CONSUMERISTAS.GROUP_OPERADOR'))) {
            query = 'u_kbr_stateINcreation,subsidy_ready^u_kbr_status=subsidy'; //Operadores
        }
        /*else if (user.isMemberOf(gs.getProperty('KBR.CONTINGENCIAS_CONSUMERISTAS.GROUP_ADVOGADOS_AUDIENCISTAS')) || user().isMemberOf(gs.getProperty('KBR.CONTINGENCIAS_CONSUMERISTAS.GROUP_ADVOGADOS_PREPOSTOS'))) {
                   query = 'u_kbr_law_office=' + user.getCompanyID(); //Usuários do Escritório de Advocacia
               }*/
        else {
            query = 'u_numberISNOTEMPTY';
        }
        //gs.log("Query of visualization of records of the Consumer Process for the User : " + user.getName() + ". QUERY: '" + query + "'.");
        return query;
    },

    /**SNDOC
    @name returnUserQuery
    @description This function return query for view records on User table 
	@param {string} [user] - User
    @example 
	  javascript: new KBR_CONTINGENCIAS_CONSUMERISTAS_4_ITSM_REQUEST_UTILS().returnUserQuery(gs.getUser()); 
	 }
	 Output: 
		 @returns {string} Query for view User table records. 
    */
    returnUserQuery: function(user) {
        var query = '';
        //Perfil jurídico visualiza todos os usuários da Claro e dos Escritórios
        if (user.isMemberOf(gs.getProperty('KBR.CONTINGENCIAS_CONSUMERISTAS.GROUP_JURÍDICO'))) {
            query = 'company=' + user.getCompanyID() + '^ORcompany.parent=' + user.getCompanyID();
        } else
            //Perfil de Gestor do Escritório
            if (user.isMemberOf(gs.getProperty('KBR.CONTINGENCIAS_CONSUMERISTAS.GROUP_GESTAO_ESCRITORIO')) || user.isMemberOf(gs.getProperty('KBR.CONTINGENCIAS_CONSUMERISTAS.GROUP_ADVOGADOS_ESCRITORIO'))) {
                query = 'company=' + user.getCompanyID();
            } else
        //if(user.hasRole("admin"))
        {
            query = '';
        }
        //gs.log("Query of visualization of records of the User table for the Manager User : " + user.getName() + ". QUERY: '" + query + "'.");
        return query;
    },

    /**SNDOC
    @name updateAudienceDate
    @description This function creates a record in the Audiences table 
	@param {string} [c_process] - The sys_id of the Consumer Process
	@param {string} [audience_date] - The value of the Audience Date on Audience record
    @example 
	  javascript: new KBR_CONTINGENCIAS_CONSUMERISTAS_4_ITSM_REQUEST_UTILS().updateAudienceDate(current.u_kbr_consumer_process, current.u_kbr_audience_date); 
	 }
	 Output: create new
		@returns {void} only updates the date of the hearing in the Consumer Process record  
    */
    updateAudienceDate: function(c_process, audience_date) {
        var grConsumerProcess = new GlideRecord('u_kbr_consumer_process');
        grConsumerProcess.addQuery('sys_id', c_process); //verifica se existe o registro na tabela processo consumerista
        grConsumerProcess.query();
        if (grConsumerProcess.next()) {
            grConsumerProcess.setValue('u_kbr_audience_date', audience_date);
            grConsumerProcess.update();
        }
        gs.log('Audience Date updtate automatically on the Consumer Process: ' + grConsumerProcess.number);

    },

    /**SNDOC
    @name createHiring
    @description This function creates a record in the Audiences table 
	@param {string} [c_process] - The sys_id of the Consumer Process
    @example 
	  javascript: new KBR_CONTINGENCIAS_CONSUMERISTAS_4_ITSM_REQUEST_UTILS().createHiring(current.sys_id); 
	 }
		@returns {void} only creates a new record in the Audience table 
    */
    createHiring: function(c_process) {
        var grConsumerProcess = new GlideRecord('u_kbr_consumer_process');
        grConsumerProcess.addQuery('sys_id', c_process); //verifica se existe o registro na tabela processo consumerista
        grConsumerProcess.query();
        if (grConsumerProcess.next()) {
            var grAudience = new GlideRecord('u_kbr_audience');
            grAudience.initialize();
            grAudience.setValue('u_kbr_consumer_process', grConsumerProcess.getUniqueValue());
            grAudience.insert();
        }
        gs.log('Audience created automatically for the Consumer Process: ' + grConsumerProcess.number);

    },

    /**SNDOC
    @name getConsumerProcessValues
    @description function that returns which members that are part of the law office selected on the reference field "Consumer Process" on the u_kbr_audience table
    @param {string} [selectedValue] - Id of the current consumer process to be queried
	@param {string} [attorneyGroup] - Leverages a property that stores the sys id of the attorney's group 
    @example
	The following example needs to be used in a reference qualifier into a reference field using the advanced qualifier option to display the place where this code it will be stored
	javascript: new KBR_CONTINGENCIAS_CONSUMERISTAS_4_ITSM_REQUEST_UTILS().getConsumerProcessValues(current.u_kbr_consumer_process, gs.getProperty('KBR.CONTINGENCIAS_CONSUMERISTAS.GROUP_ADVOGADOS_AUDIENCISTAS')); 
	 
    @returns {object} it will return into the reference field all the users that match with this query
    */

    //Função retorna quais os membros que fazem parte do escritório de advocacia selecionado no registro de referência "Processo Consumerista" do formulário da tabela u_kbr_audience 

    getConsumerProcessValues: function(selectedValue, attorneyGroup) {
        var grConsumerProcess = new GlideRecord('u_kbr_consumer_process');
        grConsumerProcess.addQuery('sys_id', selectedValue); //verifica se existe o registro na tabela processo consumerista
        grConsumerProcess.query();
        var lawOffice = '';
        if (grConsumerProcess.next()) {
            lawOffice = grConsumerProcess.u_kbr_law_office.name; //seleciona o nome do escritório associado ao registro Processo Consumerista
        }

        var grUser = new GlideRecord('sys_user');
        grUser.addQuery('company.name', lawOffice); //pesquisa os usuários que fazem parte do escritório coletado no registro de Processo Consumerista 
        grUser.query();
        var answer = "sys_id=";
        var count = 0;
        while (grUser.next()) {
            var grUserMember = new GlideRecord('sys_user_grmember'); // verifica se o usuário faz parte do grupo Advogados Audiencistas
            grUserMember.addQuery('user', grUser.sys_id);
            grUserMember.addQuery('group', attorneyGroup);
            grUserMember.query();
            if (grUserMember.next()) {
                if (count <= 0) {
                    answer += grUserMember.user;
                } else {
                    answer += grUserMember.user + "^ORsys_id=";
                }
                count++;
            }
        }
        return answer;
    },

    /**SNDOC
    @name getAttachmentQuantity
    @description This functions returns the amount of attachments that are inserted in a specific table
    @param {string} [table_name] - Name of the table that is going to be assessed
	@param {string} [key] - The sys_id of the current record that will be examinated  
    @example This example it counts the amount of attachments that are in the consumer process table, to identify if there are any attachments or not on the current record
	  var counterC = include.getAttachmentQuantity('u_kbr_consumer_process', currentConsumerProcess);
    if (counterC != 0) {
        gs.addInfoMessage("It has attachments"); 
    } else {
	gs.addInfoMessage("It doesn't have attachments");
	 }
		@returns {value} it returns the amount of attachments that was found on the query 
    */
    getAttachmentQuantity: function(table, key) {
        table = table || this.getParameter('sysparm_tableName') + '';
        key = key || this.getParameter('sysparm_key') + '';
        var attachment = new GlideSysAttachment();
        var counter = '';
        var agrC = attachment.getAttachments(table, key); //consulta para verificar a quantidade de anexos nas tarefas associadas a RITM
        while (agrC.next()) {
            counter++; //conta quantos anexos estão contidos nas tarefas da ritm
        }
        return counter;
    },
    /**SNDOC
        @name getTasksQuantity
        @description This functions returns the amount of tasks that are associated with a specific RITM
        @param {string} [key] - Stores the sys ID of the ritm to be queried 
        @example In this example we are going to store the amount of the tasks into a specific variable
    	  var counterTasks = include.getTasksQuantity(currentRITM);
    		@returns {value} it returns the amount of tasks that were found on the query 
        */
    getTasksQuantity: function(key) {
        var scTask = new GlideAggregate('sc_task');
        var counter = '';
        scTask.addQuery('request_item', key);
        scTask.addAggregate('COUNT');
        scTask.query();

        while (scTask.next()) {
            counter = scTask.getAggregate('COUNT');
        }
        return counter;
    },
    /**SNDOC
        @name createAttach
        @description This leverages the use of auth comunication to create new attachments from scratch using the base 64 of attachments
        @param {string} [table] - Stores the table name of the record and sys_id of the record
    	@param {string} [name] - Leverages the file_name and content_type
    	@param {string} [base64] - Gets the base64 of the attachment to be created.
        @example In this example we are using another function copyAttach2 with this function being used inside this one:
    	   this.createAttach(consumer_key, grSA.file_name + ":" + grSA.content_type, this.getBase642(grSA.getUniqueValue()));
    		@returns {void} it only creates a new attachment from scrath into the specified table 
        */
    createAttach: function(table, name, base64) {
        var r = new sn_ws.RESTMessageV2('Create Attachment', 'Default POST');
        r.setAuthenticationProfile('basic', '6d8d10f21ba764105ed0da45fa4bcbf8');
        r.setRequestBody('{"agent":"AttachmentCreator","topic":"AttachmentCreator","name":"' + name + '","source":"' + table + '","payload":"' + base64 + '"}');
        var response = r.execute();
        var responseBody = response.getBody();
        var httpStatus = response.getStatusCode();
        gs.log(httpStatus, 'Rainer-createAttach');
        gs.log(r.getRequestBody(), 'Rainer-createAttach');
    },

    /**SNDOC
    @name getBase642
    @description This function gets the base64 of the attachment. It has to be used using a scope aside from the global, because on the global scope it won't be able to access the base64 of the elements 
    @param {string} [attach] - Stores the sys ID of the attachment to be assesed in order to get the base64 code
    @example As in the previous example, we are going to use with the same function passing the current element base64
	   this.createAttach(consumer_key, grSA.file_name + ":" + grSA.content_type, this.getBase642(grSA.getUniqueValue()));
		@returns {string} it returns the base64 elements to be leveraged.  
    */
    getBase642: function(attach) {
        var gr = new GlideRecord("sys_attachment");
        var contents = '';
        if (gr.get(attach)) {
            var sa = new x_kpmgb_backtowork.GlideSysAttachment();
            contents = sa.getContentBase64(gr);
        }
        return contents;

    },
    /**SNDOC
    @name getRitm
    @description This function returns two arrays with sys_ids showing when the which tasks has attachments or nort
    @param {string} [consumer] - Stores the sys_id of the consumer process record to be used into the query to check the requested item sys_id and continue the logic
    @example This example shows the sys_id of the sctasks that have an attachment associated with, using the position 0 of the return arrays 
	   var teste12 = new KBR_CONTINGENCIAS_CONSUMERISTAS_4_ITSM_REQUEST_UTILS().getRitm(current.getUniqueValue())[0];
		@returns {string} it returns the sys_id of the arrays where we pushed the information to.  
    */

    getRitm: function(consumer) {
        var nao_tem_user = [];
        var tem = [];
        var count = '';
        var grUKCP = new GlideRecord('u_kbr_consumer_process');
        if (grUKCP.get(consumer)) {
            var grScTask = new GlideRecord('sc_task');
            grScTask.addEncodedQuery("request_item=" + grUKCP.u_kbr_requested_item);
            grScTask.query();
            while (grScTask.next()) {
                var grSA = new GlideRecord('sys_attachment');
                grSA.addEncodedQuery("table_sys_id=" + grScTask.getUniqueValue());
                grSA.query();
                if (grSA.next()) {
                    tem.push(grScTask.getUniqueValue());
                } else {
                    nao_tem_user.push(grScTask.getUniqueValue());
                    count++;
                }
            }
        }
        gs.log('[tem, nao_tem_user]: ' + JSON.stringify([tem, nao_tem_user]), 'Rainer');
        return [tem, nao_tem_user]; //ritm que tem attachment || msg para os users
    },

    /**SNDOC
    @name copyAttach
    @description This function gets specific ritms values as weel the consumer process id to be queried into the sys_attachment table, this will allow us to create new attachments
    @param {string} [ritms] - Stores the sys_id of the ritms to be assesed in the sys_attachment table
	@param {string} [consumer] - Gets the sys_id of the current consumer process 
    @example This example uses the last variable created on the last example that had stored the sys_ids of the SCTASKS that were found with an attachment associated with 
	   new KBR_CONTINGENCIAS_CONSUMERISTAS_4_ITSM_REQUEST_UTILS().copyAttach(teste12, current);
		@returns {void} Creates the attachments into the specific table  
    */

    copyAttach: function(ritms, consumer) {
        var grSA = new GlideRecord('sys_attachment');
        grSA.addEncodedQuery("table_sys_idIN" + ritms);
        grSA.query();
        var consumer_key = consumer.getTableName() + ":" + consumer.getUniqueValue();
        while (grSA.next()) {
            this.createAttach(consumer_key, grSA.file_name + ":" + grSA.content_type, this.getBase642(grSA.getUniqueValue()));
        }
    },

    /**SNDOC
    @name copyAttach2
    @description This function adds into the consumer process record the new attachments added into one of the tasks 
    @param {string} [consumer] - Stores the sys_id of the current record being assesed
    @example This example uses the last variable created on the last example that had stored the sys_ids of the SCTASKS that were found with an attachment associated with 
	   new KBR_CONTINGENCIAS_CONSUMERISTAS_4_ITSM_REQUEST_UTILS().copyAttach2(current);
		@returns {void} Creates the attachments into the specific table  
    */
    copyAttach2: function(consumer) {
        var hash = this.getNewAddedAttachment(consumer);
        gs.log('hash:' + hash, 'Rainer');
        if (hash) {
            var grSA = new GlideRecord('sys_attachment');
            grSA.addEncodedQuery("table_name=sc_task^hashIN" + hash);
            grSA.query();

            var consumer_key = consumer.getTableName() + ":" + consumer.getUniqueValue();
            gs.log(consumer_key, 'Rainer');
            while (grSA.next()) {
                this.createAttach(consumer_key, grSA.file_name + ":" + grSA.content_type, this.getBase642(grSA.getUniqueValue()));
            }
        }
    },
    /**SNDOC
    @name getNewAddedAttachment
    @description This function gets the hash value that is unique, which means that is the brand new added to one of the SCTASKS and stores this value to be used on the copyAttach2 function
    @param {string} [consumer] - Stores the sys_id of the current record being assesed
    @example This example uses the last variable created on the last example that had stored the sys_ids of the SCTASKS that were found with an attachment associated with 
	   new KBR_CONTINGENCIAS_CONSUMERISTAS_4_ITSM_REQUEST_UTILS().copyAttach2(current);
		@returns {string} Returns the sys ids of the record that were found using the specifc queried hash value
    */

    getNewAddedAttachment: function(consumer) {
        var teste = [];
        var key = consumer.getUniqueValue() + ',' + this.getRitm(consumer.getUniqueValue())[0];
        var ga = new GlideAggregate('sys_attachment');
        ga.addEncodedQuery("table_sys_idIN" + key);
        ga.groupBy("hash");
        ga.addAggregate('COUNT');
        ga.query();
        while (ga.next()) {
            if (ga.getAggregate('COUNT') == 1) {
                var teste2 = String(ga.hash);
                teste.push(String(teste2));
            }
        }
        return teste;
    },

    generateSubsidy: function(consumer) {
        // grab a random RITM	
        var filename = consumer.u_kbr_process_number + '.pdf';

        //gs.debug('Writing PDF to ' + ritm.u_number);

        var table = consumer.getTableName();
        var table_sys_id = consumer.getUniqueValue();

        // create a new PDF generator
        var formAPI = new global.GeneralFormAPI(filename, table, table_sys_id);

        // grab a random image
        var headerImage = null;
        var att = new GlideRecord('sys_attachment');
        if (att.get('9ff1313fdbbfa0502b169f3bf3961990')) {
            headerImage = getAttachmentBase64(att);
        }

        // setDocument(header image, footer image, footer text, header alignment, footer alignment, paper size)
        // alignment = "0" = left, "1" = centre, "2" = right. An invalid alignment will cause the image to not appear
        formAPI.setDocument(headerImage, null, consumer.getDisplayValue('u_kbr_flow'), '2', '1', 'a4');
        var text = '<h1 align="center">Resumo do Subsídio</h1><br><table border="0"><tr><td colspan="2" align="left" bgcolor="rgb(0,112,192)"><p color="white">Dados do Cliente</p></td></tr></table><br><p color="rgb(0,112,192)">Nome do Cliente</p>' + consumer.u_kbr_customer_name + '<br><p color="rgb(0,112,192)">CPF/CNPJ</p>' + consumer.u_kbr_cpf + '<br><p color="rgb(0,112,192)">Nº da Linha</p>' + consumer.u_kbr_line_number + '<br><p color="rgb(0,112,192)">Nº do Contrato</p>' + consumer.u_kbr_contract_number + '<br><p color="rgb(0,112,192)">Nº do Processo</p>' + consumer.u_kbr_process_number + '</p><br><table border="0"><tr><td colspan="2" align="left" bgcolor="rgb(0,112,192)"><p color="white">Histórico do cliente</p></td></tr></table><br>';

        var number = 1;
        var image = 'image';
        var grScTask = new GlideRecord('sc_task');
        grScTask.addEncodedQuery("request_item=" + consumer.getValue('u_kbr_requested_item'));
        grScTask.orderBy('number');
        grScTask.query();
        while (grScTask.next()) {
            text = text + '<p color="rgb(0,112,192)">' + grScTask.getValue('short_description') + '</p>';
            if (grScTask.getValue('description') != null) {
                text = text + grScTask.getValue('description') + '<br><br>';
            } else {
                text = text + '<br>';
            }

            if (grScTask.hasAttachments()) {
                text = text + '<p color="rgb(0,112,192)">Evidência:</p><br>';
                var grSA = new GlideRecord('sys_attachment');
                grSA.addEncodedQuery("table_sys_id=" + grScTask.getUniqueValue() + "^content_typeLIKE" + image);
                grSA.query();
                while (grSA.next()) {
                    //text = text + '<img src="' + getAttachmentBase64(grSA) + '" max-width="500"/><br><br>';
                    text = text + '<img src="' + getAttachmentBase64(grSA) + '" width="500"/><br><br>';
                }
            }


            number++;
        }

        // source HTML
        // must be well-formed XML and not use <hr> (really)
        var pages = [{
            heading: text
        }];

        //gs.debug('Create the PDF!');
        // createPDF(html, pages)
        // if you don't want to use pages just supply the html argument
        //gs.log('SYS_ID RAINER: ' + JSON.stringify(formAPI.createPDF('', pages)));
        return formAPI.createPDF('', pages);
        //gs.log('SYS_ID: ' + JSON.stringify(formAPI.getUniqueValue()));

        function getAttachmentBase64(attachmentGR) {
            var base64ImageStr = GlideStringUtil.base64Encode(new GlideSysAttachment().getBytes(attachmentGR));
            return "data:image/png;base64," + base64ImageStr + "";
        }

    },

    isCPForCPNJ: function(cpf_cnpj) {
        cpf_cnpj = cpf_cnpj || this.getParameter('sysparm_cpf_cnpj') + '';
        var json = new JSON();
        var retorno = false;
        //gs.info(this.validateCPF(cpf_cnpj));
        //gs.info(this.validateCNPJ(cpf_cnpj));

        if (this.validateCPF(cpf_cnpj) || this.validateCNPJ(cpf_cnpj)) {
            retorno = true;
        }
        var results = {
            "retorno": retorno,
            "msg": gs.getMessage('cpf_or_cnpj_invalid'),
        };
        //return json.encode(results);
        return retorno; //errado return true

    },

    validateCPF: function(cpf) {
        cpf = cpf || this.getParameter('sysparm_cpf') + '';
        cpf = cpf.replace(/[,.,/,-]/g, ''); //retira as pontiações que existirem
        var Soma;
        var Resto;
        Soma = 0;
        if (cpf == "00000000000") return false;

        for (i = 1; i <= 9; i++) Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(cpf.substring(9, 10))) return false;

        Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(cpf.substring(10, 11))) return false;
        return true;
    },

    validateCNPJ: function(cnpj) {
        cnpj = cnpj || this.getParameter('sysparm_cnpj') + '';
        cnpj = cnpj.replace(/[,.,/,-]/g, '');

        if (cnpj == '') return false;

        if (cnpj.length != 14)
            return false;

        // Elimina CNPJs inválidos conhecidos
        if (cnpj == "00000000000000" ||
            cnpj == "11111111111111" ||
            cnpj == "22222222222222" ||
            cnpj == "33333333333333" ||
            cnpj == "44444444444444" ||
            cnpj == "55555555555555" ||
            cnpj == "66666666666666" ||
            cnpj == "77777777777777" ||
            cnpj == "88888888888888" ||
            cnpj == "99999999999999")
            return false;

        // Valida DVs
        var tamanho = cnpj.length - 2;
        var numeros = cnpj.substring(0, tamanho);
        var digitos = cnpj.substring(tamanho);
        var soma = 0;
        var pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;

        tamanho = tamanho + 1;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;

        return true;
    },

    condictionUIActionRescheduleHearing: function(current) {
        var counter = '';
        var grUKA = new GlideRecord('u_kbr_audience');
        grUKA.addEncodedQuery("u_kbr_consumer_process=" + current.getUniqueValue() + "^u_kbr_audience_statusINin_progress,new");
        grUKA.query();
        while (grUKA.next()) {
            counter++;
        }
        return (current.getValue('u_kbr_state') == 'post_hearing') && (current.getValue('u_kbr_status') == 'after_hearing') && counter == 0 && ((gs.getUser().isMemberOf('KBR_CONTINGENCIAS_CONSUMERISTAS_ESCRITORIO_ADVOCACIA') && gs.getUser().getCompanyID() == current.u_kbr_law_office) || gs.hasRole('admin'));
    },

    condictionUIActioScheduleHearing: function(current) {
        var counter = '';
        var grUKA = new GlideRecord('u_kbr_audience');
        grUKA.addEncodedQuery("u_kbr_consumer_process=" + current.getUniqueValue() + "^u_kbr_audience_statusINin_progress,new");
        grUKA.query();
        while (grUKA.next()) {
            counter++;
        }
        return (current.getValue('u_kbr_state') == 'subsidy_analysis') && counter == 0 && ((gs.getUser().isMemberOf('KBR_CONTINGENCIAS_CONSUMERISTAS_ESCRITORIO_ADVOCACIA') && gs.getUser().getCompanyID() == current.u_kbr_law_office) || gs.hasRole('admin')) || (current.getValue('u_kbr_state') == 'post_hearing') || (current.getValue('u_kbr_status') == 'after_hearing');
    },

    /**SNDOC
    @name getFlow
    @description description

    @param {string} [sub_reason] - consumer sub_reason

    @example
    example here

    @returns {type} description
    */
    getFlow: function(sub_reason) {
        var flows = [{
            "u_kbr_sub_reason": "benefit_denied_CEMI,cancellation_default,improper_activation,invoice_increase_readjustment,protect_ins_n_comp,s_n_qualified_Serasa,sva_packing,other_claims,n_agree_contract_clauses,claro_up_phone_lock,insurance_cancel_error,auto_cancel_default,simple_theft,credit_analysis_fail,m_married_sale,block_ser_use_limit,delay_new_appliance,collection_pro_rata_control,suspension_not_performed,n_accepted_pay_franchise,n_agree_pay_franchise,insurance_denied_simple_theft,claro_up_phone_unlock,n_insurance_coverage,problems_married_sale,comp_dif_cancel,default_damage_appliance,n_agree_receive_recharged,changing_undue,n_recognize_charges",
            "flow": "additional_services"
        }, {
            "u_kbr_sub_reason": "acc_inv_third_part,acc_third_part_infra,acc_inv_own_emp,t_acc_phys_mat_damage",
            "flow": "auto_accident"
        }, {
            "u_kbr_sub_reason": "absence_clarification_requesting_cancel,cancel_undue,error_cancel_pack_ser,false_withhold,cancellation_not_done,unfunfilled_benefit",
            "flow": "cancellation"
        }, {
            "u_kbr_sub_reason": "cus_pay_deb,collection_technical_problems,collection_period_legal_repentance,b_behalf_third_part,charges_downgrade,c_specific_ser,charges_contract_cancel,improper_negated_customer,charges_change_address,d_monthly_sub",
            "flow": "collection_negativation"
        }, {
            "u_kbr_sub_reason": "prob_app_equi_collect",
            "flow": "device_delivery"
        }, {
            "u_kbr_sub_reason": "no_recognition_purchase,digital_fraud,product_service,cc_current_account_data,u_exchange_SIM,with_ben_suspected,independent_inclusion,no_recognition_migration,wpp_fraud,r_und_cont,cancel_injury_sus_ser,launch_cc_tp_account",
            "flow": "fraud"
        }, {
            "u_kbr_sub_reason": "tv_una,una_ser,low_quality_int_data,low_v_connect_qual,l_quality_TV,int_una,a_mob_net_cov,v_unavailability,low_services",
            "flow": "network_coverage"
        }, {
            "u_kbr_sub_reason": "unavailability_delay,con_fees_collection,elimination,problems_invoice,correction,telos,interruption_suspension_collection,n_agree_recharge,n_agreement_cancel,technical_visit_bank_slip,low_pay_n_per,access,bad_treat_att_cus,shared_use,token_n_work_after_change,data_elimination,contractors,telephone_inter,ip_information,div_info_btwn_sup,n_ref_disc,delay_presencial_service,credit_inserted,d_installation_visit_sch,pro_rental,advertising_publicity_rights,absence_info_credit_protect,block,com_sim_exchange_bank,problems_recharging,treatment_confirmation,invoice_increase_end_promotion,fail_ex_debt,failure_regarding,tech_imp_cond,erb_rental,portability,e_activating_change,delay_service,undue_disclosure_data,payment_error_debt,legal_services,problems_available_balance,lack_promotional_app,int_sus_def_cus_ser,interruption_suspension_agreement,sac_rec,anonimization,sac_cancel_claim,change_channel_grid,financial_adj,problems_bonus_balance,locking_appliance,electronic_disposal,comp_prov_multi_ser,claro_smartcred,a_clare_tech,sac_protocol,info_geo,legality_charges_add,dam_residence,medical_assistance_plan,t_residence",
            "flow": "others"
        }, {
            "u_kbr_sub_reason": "portability_withdrawal,failure_operator,portability_customer_request,delay_portability,portability_dependent_lines,portability_not_done,claro_failure,improper_migration_d_title,client_calls_portability,portability_not_performed",
            "flow": "portability"
        }, {
            "u_kbr_sub_reason": "product_service_fee,delay_line,product_value_membership,hiring_unable,product_invoice,divergence_seller_claro,product_promotional_time,dissatisfation_physical_space,bad_treatment_customer,product_taste,product_registration,refusal_sale_address,product_amount,business_partners,product_ticket_value,product_pro_rata,married_sale",
            "flow": "sales_problems"
        }, {
            "u_kbr_sub_reason": "imp_billing_equip,vis_car_cus,imp_billing_tech_visit",
            "flow": "technical_problems"
        }, {
            "u_kbr_sub_reason": "increase_pos_paid_plan,increase_invoice,e_plan_und_cust,sva_inclusion,extinguished_plans,increase_invoice_control,claro_tv_plan_migration",
            "flow": "undue_migration"
        }];
        for (i in flows) {
            if (flows[i]['u_kbr_sub_reason'].indexOf(sub_reason) != -1) {
                return flows[i].flow;
            }
        }
    },

    getConsumer: function(task) {
        var grScTask = new GlideRecord('sc_task');
        if (grScTask.get(task)) {
            var grUKCP = new GlideRecord('u_kbr_consumer_process');
            grUKCP.addEncodedQuery("u_kbr_requested_item=" + grScTask.getValue('request_item'));
            grUKCP.query();
            while (grUKCP.next()) {
                return grUKCP;
            }
        }
    },

    /**SNDOC
    @name blockTempUser
    @description It is used in the KBR_CONSUMERISTA_BLOQUEIO_TEMPORARIOS schedule job, it will block the user access to the system. 
	@param {string} [sys_id] - The sys_id of user to be blocked
    @example 
	  javascript: blockTempUser('user_sys_id'); 
	 }
		@returns {void} only blocks the user from the system 
    */

    blockTempUser: function(tempUser) {
        var grUser = new GlideRecord('sys_user');
        grUser.addEncodedQuery("sys_id=" + tempUser);
        grUser.query();

        if (grUser.next()) {
            grUser.locked_out = true;
            grUser.update();
        }
    },

    verifyStatusCurrentTempUser: function(audienceID) {
        var aud = new GlideRecord('u_kbr_audience');
        aud.addQuery('sys_id', audienceID);
        aud.query();

        if (aud.next()) {

            var userAudioLogist = aud.u_kbr_audiologist_attorney;
            var userRepresentative = aud.u_kbr_representative;

            var grUser = new GlideRecord('sys_user');
            grUser.addEncodedQuery("sys_id=" + userAudioLogist + "^ORsys_id=" + userRepresentative);
            grUser.query();

            while (grUser.next()) {
                if (grUser.locked_out == true) {
                    grUser.locked_out = false;
                    grUser.update();
                }
            }
        }
    },

    //gs.info(new KBR_CONTINGENCIAS_CONSUMERISTAS_4_ITSM_REQUEST_UTILS().getAlcadas('u_kbr_audience','RS'));
    //gs.info(new KBR_CONTINGENCIAS_CONSUMERISTAS_4_ITSM_REQUEST_UTILS().getAlcadas('u_kbr_audience','4194f77c1b1034505ed0da45fa4bcba3')[2]);

    /*
var grUKA = new GlideRecord('u_kbr_audience');
if (grUKA.get('f03fdbb9dbdc74502b169f3bf3961927')) {
    //gs.info('u_kbr_audiologist_attorney: ' + grUKA.u_kbr_consumer_process.u_kbr_uf.toUpperCase());
gs.info(new KBR_CONTINGENCIAS_CONSUMERISTAS_4_ITSM_REQUEST_UTILS().getAlcadas('u_kbr_audience',grUKA.u_kbr_consumer_process));
}


var grUKA = new GlideRecord('u_kbr_consumer_process');
if (grUKA.get('4194f77c1b1034505ed0da45fa4bcba3')) {
gs.info(new KBR_CONTINGENCIAS_CONSUMERISTAS_4_ITSM_REQUEST_UTILS().getAlcadas('u_kbr_consumer_process',grUKA.getUniqueValue()));
}*/
    getAlcadas: function(table, record) {
        var uf = '';
        var grUKCP = '';
        var dono = '';
        switch (table) {
            case 'u_kbr_consumer_process':
                dono = 'esc';
                grUKCP = new GlideRecord(table);
                if (grUKCP.get(record)) {
                    uf = grUKCP.getValue('u_kbr_uf').toUpperCase();
                }
                break;
            case 'u_kbr_audience':
                var table_record = 'u_kbr_consumer_process';
                dono = 'bcc';
                grUKCP = new GlideRecord(table_record);
                if (grUKCP.get(record)) {
                    uf = grUKCP.getValue('u_kbr_uf').toUpperCase();
                }
                break;
        }
        //var table = 'u_kbr_audience';//u_kbr_consumer_process==esc , u_kbr_audience=bcc
        var criNcri = 'n_cri';
        //var uf = 'AL';
        var alcadas = [];
        var calc = [{
                uf: "AC",
                esc: {
                    cri: "3000.00",
                    n_cri: "2500.00"
                },
                bcc: {
                    cri: "2400.00",
                    n_cri: "2000.00"
                }
            },
            {
                uf: "AL",
                esc: {
                    cri: "3863.43",
                    n_cri: "2389.44"
                },
                bcc: {
                    cri: "2475.16",
                    n_cri: "1812.29"
                }
            },
            {
                uf: "AM",
                esc: {
                    cri: "4500.00",
                    n_cri: "4000.00"
                },
                bcc: {
                    cri: "3600.00",
                    n_cri: "3200.00"
                }
            },
            {
                uf: "AP",
                esc: {
                    cri: "3500.00",
                    n_cri: "1200.00"
                },
                bcc: {
                    cri: "2800.00",
                    n_cri: "960.00"
                }
            },
            {
                uf: "BA",
                esc: {
                    cri: "3128.48",
                    n_cri: "2335.49"
                },
                bcc: {
                    cri: "2277.72",
                    n_cri: "2032.48"
                }
            },
            {
                uf: "CE",
                esc: {
                    cri: "3653.95",
                    n_cri: "2945.95"
                },
                bcc: {
                    cri: "2901.15",
                    n_cri: "2755.11"
                }
            },
            {
                uf: "DF",
                esc: {
                    cri: "2500.00",
                    n_cri: "2000.00"
                },
                bcc: {
                    cri: "2000.00",
                    n_cri: "1600.00"
                }
            },
            {
                uf: "ES",
                esc: {
                    cri: "3619.47",
                    n_cri: "3000.00"
                },
                bcc: {
                    cri: "2247.21",
                    n_cri: "2044.32"
                }
            },
            {
                uf: "GO",
                esc: {
                    cri: "5000.00",
                    n_cri: "3500.00"
                },
                bcc: {
                    cri: "4000.00",
                    n_cri: "2800.00"
                }
            },
            {
                uf: "MA",
                esc: {
                    cri: "3000.00",
                    n_cri: "2500.00"
                },
                bcc: {
                    cri: "2804.70",
                    n_cri: "2025.33"
                }
            },
            {
                uf: "MG",
                esc: {
                    cri: "4000.00",
                    n_cri: "3639.79"
                },
                bcc: {
                    cri: "2914.84",
                    n_cri: "2389.77"
                }
            },
            {
                uf: "MS",
                esc: {
                    cri: "4000.00",
                    n_cri: "3000.00"
                },
                bcc: {
                    cri: "3200.00",
                    n_cri: "2400.00"
                }
            },
            {
                uf: "MT",
                esc: {
                    cri: "4500.00",
                    n_cri: "3500.00"
                },
                bcc: {
                    cri: "3600.00",
                    n_cri: "2800.00"
                }
            },
            {
                uf: "PA",
                esc: {
                    cri: "3500.00",
                    n_cri: "3000.00"
                },
                bcc: {
                    cri: "2800.00",
                    n_cri: "2400.00"
                }
            },
            {
                uf: "PB",
                esc: {
                    cri: "3196.48",
                    n_cri: "3000.00"
                },
                bcc: {
                    cri: "2623.03",
                    n_cri: "2153.09"
                }
            },
            {
                uf: "PE",
                esc: {
                    cri: "3000.00",
                    n_cri: "2307.50"
                },
                bcc: {
                    cri: "2337.67",
                    n_cri: "1697.19"
                }
            },
            {
                uf: "PI",
                esc: {
                    cri: "2581.63",
                    n_cri: "2430.69"
                },
                bcc: {
                    cri: "2234.44",
                    n_cri: "1803.11"
                }
            },
            {
                uf: "PR",
                esc: {
                    cri: "4000.00",
                    n_cri: "3000.00"
                },
                bcc: {
                    cri: "3646.03",
                    n_cri: "2635.34"
                }
            },
            {
                uf: "RJ",
                esc: {
                    cri: "2558.55",
                    n_cri: "2500.00"
                },
                bcc: {
                    cri: "1813.82",
                    n_cri: "1584.50"
                }
            },
            {
                uf: "RN",
                esc: {
                    cri: "3000.00",
                    n_cri: "2408.43"
                },
                bcc: {
                    cri: "2409.01",
                    n_cri: "2348.40"
                }
            },
            {
                uf: "RO",
                esc: {
                    cri: "5500.00",
                    n_cri: "4000.00"
                },
                bcc: {
                    cri: "4400.00",
                    n_cri: "3200.00"
                }
            },
            {
                uf: "RR",
                esc: {
                    cri: "2500.00",
                    n_cri: "2000.00"
                },
                bcc: {
                    cri: "2000.00",
                    n_cri: "1600.00"
                }
            },
            {
                uf: "RS",
                esc: {
                    cri: "3682.04",
                    n_cri: "2827.63"
                },
                bcc: {
                    cri: "3111.31",
                    n_cri: "2561.72"
                }
            },
            {
                uf: "SC",
                esc: {
                    cri: "8070.00",
                    n_cri: "6000.00"
                },
                bcc: {
                    cri: "7135.15",
                    n_cri: "5311.58"
                }
            },
            {
                uf: "SE",
                esc: {
                    cri: "3200.00",
                    n_cri: "3000.00"
                },
                bcc: {
                    cri: "2474.15",
                    n_cri: "2036.08"
                }
            },
            {
                uf: "SP",
                esc: {
                    cri: "3613.27",
                    n_cri: "3129.37"
                },
                bcc: {
                    cri: "2503.58",
                    n_cri: "2138.73"
                }
            },
            {
                uf: "TO",
                esc: {
                    cri: "5500.00",
                    n_cri: "4000.00"
                },
                bcc: {
                    cri: "4400.00",
                    n_cri: "3200.00"
                }
            }
        ];
        for (i in calc) {
            if (calc[i]['uf'].indexOf(uf) != -1) {
                alcadas.push('BRL;' + (parseFloat(calc[i][dono][criNcri]) * 0.30).toFixed(2).replace('.', ','), 'BRL;' + (parseFloat(calc[i][dono][criNcri]) * 0.50).toFixed(2).replace('.', ','), 'BRL;' + (parseFloat(calc[i][dono][criNcri]) * 0.70).toFixed(2).replace('.', ','), 'BRL;' + (parseFloat(calc[i][dono][criNcri]) * 0.80).toFixed(2).replace('.', ','), 'BRL;' + (parseFloat(calc[i][dono][criNcri]) * 0.90).toFixed(2).replace('.', ','), 'BRL;' + (parseFloat(calc[i][dono][criNcri]) * 1.0).toFixed(2).replace('.', ','));
                return alcadas;
            }
        }
    },
    type: 'KBR_CONTINGENCIAS_CONSUMERISTAS_4_ITSM_REQUEST_UTILS'
});