let filaDePacientes = [];
let pacienteAtual = null;

function adicionarPaciente() {
    const nomePaciente = document.getElementById('nomePaciente').value.trim();
    if (nomePaciente) {
        filaDePacientes.push(nomePaciente);
        atualizarExibicao();
    } else {
        alert('Por favor, insira o nome do paciente.');
    }
}

function adicionarPacientePrioritario() {
    const nomePaciente = document.getElementById('nomePaciente').value.trim();
    if (nomePaciente) {
        filaDePacientes.unshift(nomePaciente);
        atualizarExibicao();
    } else {
        alert('Por favor, insira o nome do paciente.');
    }
}

function proximoPaciente() {
    if (filaDePacientes.length === 0) {
        alert('A fila está vazia. Não há pacientes para atender.');
        return;
    }
    pacienteAtual = filaDePacientes.shift();
    atualizarExibicao();
}

function atualizarExibicao() {
    const listaPacientes = document.getElementById('fila');
    listaPacientes.textContent = filaDePacientes.length > 0 ? filaDePacientes.join(', ') : 'Nenhum paciente na fila.';

    const pacienteEmAtendimento = document.getElementById('emAtendimento');
    pacienteEmAtendimento.textContent = pacienteAtual ? `Atendendo: ${pacienteAtual}` : 'Nenhum paciente em atendimento no momento.';
}
