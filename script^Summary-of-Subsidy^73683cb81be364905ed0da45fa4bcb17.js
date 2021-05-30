/*function generatePDF() {
    gsftSubmit(null, g_form.getElement(), 'generatePDF');
    /*será subtituido pela logica de gerar zip eree*/
    /*var test = g_form.getValue('u_kbr_requested_item');
    if (test) {
        var sysparm_table = 'sc_req_item';
        var sysparm_sys_id = g_form.getValue('u_kbr_requested_item');
        var sysparm_view = 'kbr_claro_operador';
        var instanceName = "https://" + location.hostname + "/";
        var url = instanceName + sysparm_table + '.do?PDF&sys_id=' + sysparm_sys_id + '&sysparm_view=' + sysparm_view;
        g_navigation.openPopup(url);
    } else {
        alert('Não há subsídio atrelado ao registro');
    }
}*/

//function getAttachments() {
        if (current.getValue('u_kbr_sys_id_subsidy') != '') {
            var grAttachment = new GlideRecord('sys_attachment');
            if (grAttachment.get(current.getValue('u_kbr_sys_id_subsidy'))) {
                grAttachment.deleteRecord();
            }
        }
    var include = new KBR_CONTINGENCIAS_CONSUMERISTAS_4_ITSM_REQUEST_UTILS();

    var teste = [];
    var currentRITM = current.u_kbr_requested_item; //armazena sys_id da ritm para pesquisarmos na tabela sctask
    var currentConsumerProcess = current.getUniqueValue();
    var attachment = new GlideSysAttachment();
    var counter = '';
    var teste5 = [];
    var counterC = include.getAttachmentQuantity('u_kbr_consumer_process', currentConsumerProcess);
    var counterTasks = include.getTasksQuantity(currentRITM);
    if (counterC != 0) { //já tem attach no registro do consumerista
        include.copyAttach2(current);
        if (counterC >= counterTasks) {
            gs.addInfoMessage("Resumo do subsídio gerado com sucesso");
            this.getMsg();
        } else {
            gs.addInfoMessage("Resumo do subsídio gerado todavia faltam anexos");
            this.getMsg();
        }
    } else { //não tem attach no registro do consumerista
        var teste12 = include.getRitm(current.getUniqueValue())[0];
        include.copyAttach(teste12, current);
        if (counterC >= counterTasks) {
            gs.addInfoMessage("Resumo do subsídio gerado com sucesso");
        } else {
            gs.addInfoMessage("Resumo do subsídio gerado todavia faltam anexos");
            this.getMsg();
        }


    }
    current.u_kbr_sys_id_subsidy = include.generateSubsidy(current);
    current.update();
    action.setRedirectURL(current);
//}

function getMsg() {
    var include = new KBR_CONTINGENCIAS_CONSUMERISTAS_4_ITSM_REQUEST_UTILS();
    var ritms = "<table style='width:100%;background-color: #e6f0fa;'><tr><th>Tarefa</th><th>Descrição</th><th>Status</th><th>Data</th></tr>";
    var noAttachments = include.getRitm(current.getUniqueValue())[1];
    for (i in noAttachments) {
        var grSctask = new GlideRecord('sc_task');
        if (grSctask.get(noAttachments[i])) {
            var url = 'sc_task.do?sys_id=' + noAttachments[i];
            var date = grSctask.getValue('sys_created_on').split(' ');
            var hour = date[1];
            date = date[0].split('-').reverse().join('/');
            date = date + ' ' + hour;
            ritms = ritms + "<tr><td><a href='" + url + "' target='_blank'>" + grSctask.getValue('number') + "</a></td><td>" + grSctask.getValue('short_description') + "</td><td>" + grSctask.getDisplayValue('state') + "</td><td>" + date + "</td><br>";
        }
    }
    ritms = ritms + "</tr></table></center>";
    gs.addInfoMessage("As tarefas abaixo não contém anexo: <br>" + ritms);
}
if (typeof window == "undefined") {
    getAttachments();
}