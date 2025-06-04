document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('scriptForm');
  const outputSection = document.getElementById('outputSection');
  const output = document.getElementById('output');
  const generateBtn = document.getElementById('generateBtn');
  const downloadBtn = document.getElementById('downloadBtn');

  function buildScript(data) {
    return `Aula: ${data.titulo}\nCurso: ${data.curso}\nMódulo: ${data.modulo}\n\nIntrodução:\n${data.intro}\n\nDesenvolvimento:\n${data.desenvol}\n\nEncerramento:\n${data.enc}`;
  }

  generateBtn.addEventListener('click', () => {
    const data = {
      curso: form.curso.value.trim(),
      modulo: form.modulo.value.trim(),
      titulo: form.titulo.value.trim(),
      intro: form.introducao.value.trim(),
      desenvol: form.desenvolvimento.value.trim(),
      enc: form.encerramento.value.trim()
    };
    const script = buildScript(data);
    output.textContent = script;
    outputSection.classList.remove('hidden');
  });

  downloadBtn.addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const lines = output.textContent.split('\n');
    let y = 10;
    lines.forEach(line => {
      doc.text(line, 10, y);
      y += 10;
    });
    doc.save('roteiro.pdf');
  });
});
