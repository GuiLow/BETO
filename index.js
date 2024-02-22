window.jsPDF = window.jspdf.jsPDF;

// Função para armazenar dados em cache com timestamp
function armazenarEmCache(chave, valor) {
  const agora = new Date().getTime(); // Obtém o timestamp atual
  const dados = { valor, timestamp: agora };
  localStorage.setItem(chave, JSON.stringify(dados));
}
const saas = document.getElementById("saas")

if (saas.checked) {
  document.getElementById("tAInput").style("display: hidden")
}
// Função para recuperar dados em cache
function recuperarDoCache(chave) {
  const dados = localStorage.getItem(chave);
  if (dados) {
    const { valor, timestamp } = JSON.parse(dados);
    const agora = new Date().getTime();

    // Verifica se passou mais de 24 horas desde o armazenamento
    if (agora - timestamp < 24 * 60 * 60 * 1000) {
      return valor; // Retorna os dados em cache
    } else {
      localStorage.removeItem(chave); // Remove os dados do cache
    }
  }
  return null; // Retorna nulo se não houver dados válidos em cache
}

// Função para armazenar os dados do formulário em cache
function armazenarDadosDoFormularioEmCache() {
  const co = document.getElementById("coInput").value;
  const cm = document.getElementById("cmInput").value;
  const pc = document.getElementById("pcInput").value;
  const b = document.getElementById("bInput").value;
  const e = document.getElementById("eInput").value;
  const t = document.getElementById("tInput").value;
  const o = document.getElementById("oInput").value;
  const tA = document.getElementById("tAInput").value;
  const tS = document.getElementById("tSInput").value;
  const tH = document.getElementById("tHInput").value;
  const p = document.getElementById("pInput").value;
  const l = document.getElementById("lInput").value;
  const opo = document.getElementById("opoInput").value;
  const pu = document.getElementById("puInput");
  const n = document.getElementById("nInput").value;
  const im = document.getElementById("imInput").value;

  const dadosFormulario = {
    co,
    cm,
    pc,
    b,
    e,
    t,
    o,
    tA,
    tS,
    tH,
    p,
    l,
    opo,
    pu,
    n,
    im,
  };
  armazenarEmCache("dadosFormulario", dadosFormulario);
}

// Função para carregar dados do cache e preencher o formulário
function carregarDadosDoCache() {
  const dadosFormulario = recuperarDoCache("dadosFormulario");

  if (dadosFormulario) {
    armazenarDadosDoFormularioEmCache();
    document.getElementById("coInput").value = dadosFormulario.co;
    document.getElementById("cmInput").value = dadosFormulario.cm;
    document.getElementById("pcInput").value = dadosFormulario.pc;
    document.getElementById("bInput").value = dadosFormulario.b;
    document.getElementById("eInput").value = dadosFormulario.e;
    document.getElementById("tInput").value = dadosFormulario.t;
    document.getElementById("oInput").value = dadosFormulario.o;
    document.getElementById("tAInput").value = dadosFormulario.tA;
    document.getElementById("tSInput").value = dadosFormulario.tS;
    document.getElementById("tHInput").value = dadosFormulario.tH;
    document.getElementById("pInput").value = dadosFormulario.p;
    document.getElementById("lInput").value = dadosFormulario.l;
    document.getElementById("opoInput").value = dadosFormulario.opo;
    document.getElementById("puInput").value = dadosFormulario.pu;
    document.getElementById("nInput").value = dadosFormulario.n;
    document.getElementById("imInput").value = dadosFormulario.im;
  }
}

// Chamar a função para carregar os dados do cache ao carregar a página
document.addEventListener("DOMContentLoaded", carregarDadosDoCache);

function validar() {
  const b = document.getElementById("bInput").value;
  const e1 = document.getElementById("e1Input").value;
  const e2 = document.getElementById("e2Input").value;
  const t = document.getElementById("tInput").value;
  const o = document.getElementById("oInput").value;
  const tA = document.getElementById("tAInput").value;
  const tS = document.getElementById("tSInput").value;
  const tH = document.getElementById("tHInput").value;

  if (
    b == "" ||
    e1 == "" ||
    e2 == "" ||
    t == "" ||
    o == "" ||
    tA == "" ||
    tS == "" ||
    tH == ""
  ) {
    alert("Por favor preencha todos os campos obrigatorios");
    return false;
  }

  return true;
}

function splice() {
  if (validar()) {
    const co = document.getElementById("coInput").value;
    const cm = document.getElementById("cmInput").value;
    const pc = document.getElementById("pcInput").value;
    const b = document.getElementById("bInput").value;
    const e1 = document.getElementById("e1Input").value;
    const e2 = document.getElementById("e2Input").value;
    const t = document.getElementById("tInput").value;
    const o = document.getElementById("oInput").value;
    const tA = document.getElementById("tAInput").value;
    const tS = document.getElementById("tSInput").value;
    const tH = document.getElementById("tHInput").value;
    const p = document.getElementById("pInput").value;
    const l = document.getElementById("lInput").value;
    const opo = document.getElementById("opoInput").value;
    const pu = document.getElementById("radioYes");
    const n = document.getElementById("nInput").value;
    const im = document.getElementById("imInput").value;
    const teste = document.getElementById("betoTeste");

    if (document.getElementById("betoTeste").innerHTML != "") {
      document.getElementById("betoTeste").innerHTML = "";
    }

    const corray = co.split("\n");
    const cmrray = cm.split("\n");
    const pcrray = pc.split("\n");
    const brray = b.split("\n");
    const e1rray = e1.split("\n");
    const e2rray = e2.split("\n");
    const trray = t.split("\n");
    const orray = o.split("\n");
    const tArray = tA.split("\n");
    const tSrray = tS.split("\n");
    const tHrray = tH.split("\n");
    const parray = p.split("\n");
    const larray = l.split("\n");
    const opoarray = opo.split("\n");
    const narray = n.split("\n");
    const imarray = im.split("\n");

    let coLi = "<ul>";
    let cmLi = "<ul>";
    let pcLi = "<ul>";
    let bLi = "<ul>";
    let e1Li = "<ul>";
    let e2Li = "<ul>";
    let tLi = "<ul>";
    let oLi = "<ul>";
    let tALi = "<ul>";
    let tSLi = "<ul>";
    let tHLi = "<ul>";
    let pLi = "<ul>";
    let lLi = "<ul>";
    let opoLi = "<ul>";
    let puLi = "<ul>";
    let nLi = "<ul>";
    let imLi = "<ul>";


    for (let index = 0; index < corray.length; index++) {
      if (corray[index] !== "") {
        coLi += `<li class="relsutLi">${corray[index]}</li><br>`;
      }
    }
    for (let index = 0; index < cmrray.length; index++) {
      if (cmrray[index] !== "") {
        cmLi += `<li class="relsutLi">${cmrray[index]}</li><br>`;
      }
    }
    for (let index = 0; index < pcrray.length; index++) {
      if (pcrray[index] !== "") {
        pcLi += `<li class="relsutLi">${pcrray[index]}</li><br>`;
      }
    }
    for (let index = 0; index < brray.length; index++) {
      if (brray[index] !== "") {
        bLi += `<li class="relsutLi">${brray[index]}</li><br>`;
      }
    }
    for (let index = 0; index < e1rray.length; index++) {
      if (e1rray[index] !== "") {
        e1Li += `<li class="relsutLi">${e1rray[index]}</li><br>`;
      }
    }
    for (let index = 0; index < e2rray.length; index++) {
      if (e2rray[index] !== "") {
        e2Li += `<li class="relsutLi">${e2rray[index]}</li><br>`;
      }
    }
    for (let index = 0; index < trray.length; index++) {
      if (trray[index] !== "") {
        tLi += `<li class="relsutLi">${trray[index]}</li><br>`;
      }
    }
    for (let index = 0; index < orray.length; index++) {
      if (orray[index] !== "") {
        oLi += `<li class="relsutLi">${orray[index]}</li><br>`;
      }
    }
    for (let index = 0; index < tArray.length; index++) {
      if (tArray[index] !== "") {
        tALi += `<li class="relsutLi">${tArray[index]}</li><br>`;
      }
    }
    for (let index = 0; index < tSrray.length; index++) {
      if (tSrray[index] !== "") {
        tSLi += `<li class="relsutLi">${tSrray[index]}</li><br>`;
      }
    }
    for (let index = 0; index < tHrray.length; index++) {
      if (tHrray[index] !== "") {
        tHLi += `<li class="relsutLi">${tHrray[index]}</li><br>`;
      }
    }

    for (let index = 0; index < parray.length; index++) {
      if (parray[index] !== "") {
        pLi += `<li class="relsutLi">${parray[index]}</li><br>`;
      }
    }

    for (let index = 0; index < larray.length; index++) {
      if (larray[index] !== "") {
        lLi += `<li class="relsutLi">${larray[index]}</li><br>`;
      }
    }

    for (let index = 0; index < opoarray.length; index++) {
      if (opoarray[index] !== "") {
        opoLi += `<li class="relsutLi">${opoarray[index]}</li><br>`;
      }
    }

    if (pu.checked) {
      puLi += `<li class="relsutLi">${pu.value}</li><br>`;
    }

    for (let index = 0; index < narray.length; index++) {
      if (narray[index] !== "") {
        nLi += `<li class="relsutLi">${narray[index]}</li><br>`;
      }
    }

    for (let index = 0; index < imarray.length; index++) {
      if (imarray[index] !== "") {
        imLi += `<li class="relsutLi">${imarray[index]}</li><br>`;
      }
    }

    coLi += "</ul>";
    cmLi += "</ul>";
    pcLi += "</ul>";
    bLi += "</ul>";
    e1Li += "</ul>";
    e2Li += "</ul>";
    tLi += "</ul>";
    tALi += "</ul>";
    tSLi += "</ul>";
    tHLi += "</ul>";
    oLi += "</ul>";
    lLi += "</ul>";
    opoLi += "</ul>";
    puLi += "</ul>";
    nLi += "</ul>";
    imLi += "</ul>";



    if (co != "") {
      document.getElementById("betoTeste").innerHTML = `
    <strong>Customer Overview:</strong>
    <p>${coLi}</p>`;
    }
    if (cm != "") {
      document.getElementById("betoTeste").innerHTML += `
    <strong>Customer Mission:</strong>
    <p>${cmLi}</p>`;
    }
    if (pc != "") {
      document.getElementById("betoTeste").innerHTML += `
    <strong>Project Contacts:</strong>
    <p>${pcLi}</p>`;
    }

    document.getElementById("betoTeste").innerHTML += `
    <strong>Business:</strong>
    <p>${bLi}</p>
    <strong>Environment:</strong>
    <br>
    <br>
    <br>
    <span>Helpers:</span>
    <p> ${e1Li}</p>
    <span>Blockers:</span>
    <p>${e2Li}</p>
    <strong>Technical:</strong>
    <p>${tLi}</p>
    <strong>Architecture:</strong>
    <p>${tALi}</p>
    <strong>Storage:</strong>
    <p>${tSLi}</p>
    <strong>HA:</strong>
    <p>${tHLi}</p>
    <strong>Outcome:</strong>
    <p>${oLi}</p>
  `;

    if (l != "") {
      document.getElementById("betoTeste").innerHTML += `
  <strong>Lessons Learned:</strong>
  <p>${lLi}</p>`;
    }

    if (p != "") {
      document.getElementById("betoTeste").innerHTML += `
  <strong>Project phases:</strong>
  <p>${pLi}</p>`;
    }

    if (opo != "") {
      document.getElementById("betoTeste").innerHTML += `
  <strong>Opportunity Identification:</strong>
  <p>${opoLi}</p>`;
    }

    if (im != "") {
      document.getElementById("betoTeste").innerHTML += `
  <strong>Implementation:</strong>
  <p>${imLi}</p>`;
    }

    if (pu.checked) {
      document.getElementById("betoTeste").innerHTML += `
  <strong>Public Reference/peer Insights:</strong>
  <p>${puLi}</p>`;
    }

    if (n != "") {
      document.getElementById("betoTeste").innerHTML += `
  <strong>Next Steps:</strong>
  <p>${nLi}</p>`;
    }
  }
}

function autoResize(textarea) {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
}

$(document).ready(function () {
  const textAreas = document.getElementsByClassName("textAreas");
  autosize($(textAreas));

  $(textAreas).on("input", function () {
    autosize.update($(".textAreas"));
  });

  $(".textAreas").on("paste", function () {
    setTimeout(function () {
      autosize.update($(".textAreas"));
    }, 0);
  });
});

function show() {
  splice();
}

function refazer() {
  document.getElementById("bInput").value = "";
  document.getElementById("tInput").value = "";
  document.getElementById("oInput").value = "";
  document.getElementById("tAInput").value = "";
  document.getElementById("tSInput").value = "";
  document.getElementById("tHInput").value = "";
  document.getElementById("coInput").value = "";
  document.getElementById("cmInput").value = "";
  document.getElementById("pcInput").value = "";
  document.getElementById("betoTeste").innerText = "";
  document.getElementById("lInput").value = "";
  document.getElementById("opoInput").value = "";
  document.getElementById("pInput").value = "";
  document.getElementById("nInput").value = "";
  document.getElementById("e1Input").value = "";
  document.getElementById("e2Input").value = "";
  document.getElementById("imInput").value = "";
}

function copy() {
  const modalD = document.getElementById("modal-download");
  const modal = document.getElementById("modal-copy");
  const betoTeste = document.getElementById("betoTeste");
  const textToCopy = betoTeste.innerText;

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      modal.style.display = "block";
      if (modalD.style.display == "block") {
        modalD.style.display = "none";
      }
      setTimeout(() => {
        modal.style.display = "none";
      }, 3000);
    })
    .catch((error) => {
      console.error("Erro ao copiar o texto: ", error);
      alert("Erro ao copiar o texto. Por favor, tente novamente.");
    });
}

function download() {
  const modalC = document.getElementById("modal-copy");
  const modal = document.getElementById("modal-download");
  const betoTeste = document.getElementById("betoTeste");

  const b = document.getElementById("bInput").value;
  const h = document.getElementById("e1Input").value;
  const co = document.getElementById("coInput").value;
  const cm = document.getElementById("cmInput").value;
  const pc = document.getElementById("pcInput").value;
  const e2 = document.getElementById("e2Input").value;
  const t = document.getElementById("tInput").value;
  const o = document.getElementById("oInput").value;
  const tA = document.getElementById("tAInput").value;
  const tS = document.getElementById("tSInput").value;
  const tH = document.getElementById("tHInput").value;
  const p = document.getElementById("pInput").value;
  const l = document.getElementById("lInput").value;
  const opo = document.getElementById("opoInput").value;
  const pu = document.getElementById("radioYes");
  const n = document.getElementById("nInput").value;
  const im = document.getElementById("imInput").value;

  const doc = new jsPDF();

  // Capturar estilos do elemento HTML
  const styles = window.getComputedStyle(betoTeste);

  // Configurar o estilo no PDF
  doc.setFontSize(parseInt(styles.fontSize));
  doc;
  doc.setTextColor(styles.color);

  let contagem = 0; let pix = 20;

  const B = doc.splitTextToSize(b, doc.internal.pageSize.width - 40);
  const H = doc.splitTextToSize(h, doc.internal.pageSize.width - 40);
  const Co = doc.splitTextToSize(co, doc.internal.pageSize.width - 40);
  const Cm = doc.splitTextToSize(cm, doc.internal.pageSize.width - 40);
  const Pc = doc.splitTextToSize(pc, doc.internal.pageSize.width - 40);
  const E2 = doc.splitTextToSize(e2, doc.internal.pageSize.width - 40);
  const T = doc.splitTextToSize(t, doc.internal.pageSize.width - 40);
  const O = doc.splitTextToSize(o, doc.internal.pageSize.width - 40);
  const TA = doc.splitTextToSize(tA, doc.internal.pageSize.width - 40);
  const TS = doc.splitTextToSize(tS, doc.internal.pageSize.width - 40);
  const TH = doc.splitTextToSize(tH, doc.internal.pageSize.width - 40);
  const L = doc.splitTextToSize(l, doc.internal.pageSize.width - 40);
  const Opo = doc.splitTextToSize(opo, doc.internal.pageSize.width - 40);
  const Pu = doc.splitTextToSize(pu, doc.internal.pageSize.width - 40);
  const N = doc.splitTextToSize(n, doc.internal.pageSize.width - 40);
  const Im = doc.splitTextToSize(im, doc.internal.pageSize.width - 40);
  const P = doc.splitTextToSize(p, doc.internal.pageSize.width - 40);

  // Iniciar a posição de Y
  let yPosition = 20;

  // Função para adicionar uma nova página se necessário
  const addNewPageIfNeeded = (doc, lineHeight, position) => {
    // Verificar se a próxima linha cabe na página atual
    if (position + lineHeight > doc.internal.pageSize.height - 20) {
      doc.addPage();
      yPosition = 20; // Reiniciar a posição de Y na nova página
      contagem = 0; // Reiniciar a contagem de linhas

    }
  };

  doc.text(15, yPosition, "Custumer Overview: ");
  yPosition += 10;;

  for (let i = 0; i < Co.length; i++) {
    addNewPageIfNeeded(doc, contagem, yPosition);
    doc.text(25, yPosition, Co[i]);
    yPosition += 10; // Atualizar a posição Y
    contagem++;
  }

  doc.text(15, yPosition + pix, "Customer Mission:  ");
  yPosition += 10;

  for (let i = 0; i < Cm.length; i++) {
    addNewPageIfNeeded(doc, contagem, yPosition);
    doc.text(25, yPosition + pix, Cm[i]);
    yPosition += 10;
    contagem++;
  }

  if (pc) {
    yPosition += 20;
    doc.text(15, yPosition + pix, "Project Contacts:  ");
    yPosition += 10;

    for (let i = 0; i < Pc.length; i++) {
      addNewPageIfNeeded(doc, contagem, yPosition);
      doc.text(25, yPosition + pix, Pc[i]);
      yPosition += 10;
      contagem++;
    }


  }
  yPosition += 10;


  doc.text(15, yPosition + pix, "Business:  ");
  yPosition += 10;

  for (let i = 0; i < B.length; i++) {
    addNewPageIfNeeded(doc, contagem, yPosition);
    doc.text(25, yPosition + pix, B[i]);
    yPosition += 10;
    contagem++;
  }

  doc.text(15, yPosition + pix, "Environment:  ");
  yPosition += 10;

  doc.text(15, yPosition + pix, "Helpers:  ");
  yPosition += 10;

  for (let i = 0; i < H.length; i++) {
    addNewPageIfNeeded(doc, contagem, yPosition);
    doc.text(25, yPosition + pix, H[i]);
    yPosition += 10;
    contagem++;
  }

  yPosition += 10;
  doc.text(15, yPosition + pix, "Blockers:  ");
  yPosition += 10;

  for (let i = 0; i < E2.length; i++) {
    addNewPageIfNeeded(doc, contagem, yPosition);
    doc.text(25, yPosition + pix, E2[i]);
    yPosition += 10;
    contagem++;
  }

  doc.text(15, yPosition + pix, "Technical:  ");
  yPosition += 10;

  for (let i = 0; i < T.length; i++) {
    addNewPageIfNeeded(doc, contagem, yPosition);
    doc.text(25, yPosition + pix, T[i]);
    yPosition += 10;
    contagem++;
  }

  yPosition += 10;
  doc.text(15, yPosition + pix, "Architecture:  ");
  yPosition += 10;

  for (let i = 0; i < TA.length; i++) {
    addNewPageIfNeeded(doc, contagem, yPosition);
    doc.text(25, yPosition + pix, TA[i]);
    yPosition += 10;
    contagem++;
  }

  doc.text(15, yPosition + pix, "Storage:  ");
  yPosition += 10;

  for (let i = 0; i < TS.length; i++) {
    addNewPageIfNeeded(doc, contagem, yPosition);
    doc.text(25, yPosition + pix, TS[i]);
    yPosition += 10;
    contagem++;
  }

  doc.text(15, yPosition + pix, "HA:  ");
  yPosition += 10;

  for (let i = 0; i < TH.length; i++) {
    addNewPageIfNeeded(doc, contagem, yPosition);
    doc.text(25, yPosition + pix, TH[i]);
    yPosition += 10;
    contagem++;
  }
  yPosition += 10;
  doc.text(15, yPosition + pix, "Outcome:  ");
  yPosition += 10;

  for (let i = 0; i < O.length; i++) {
    addNewPageIfNeeded(doc, contagem, yPosition);
    doc.text(25, yPosition + pix, O[i]);
    yPosition += 10;
    contagem++;
  }

  doc.text(15, yPosition + pix, "Lessons Learned:  ");
  yPosition += 10;

  for (let i = 0; i < L.length; i++) {
    addNewPageIfNeeded(doc, contagem, yPosition);
    doc.text(25, yPosition + pix, L[i]);
    yPosition += 10;
    contagem++;
  }

  yPosition += 10;
  doc.text(15, yPosition + pix, "Project phases:  ");
  yPosition += 10;

  for (let i = 0; i < P.length; i++) {
    addNewPageIfNeeded(doc, contagem, yPosition);
    doc.text(25, yPosition + pix, B[i]);
    yPosition += 10;
    contagem++;
  }
  yPosition += 10;
  doc.text(15, yPosition + pix, "Opportunity Identification:  ");
  yPosition += 10;

  for (let i = 0; i < Opo.length; i++) {
    addNewPageIfNeeded(doc, contagem, yPosition);
    doc.text(25, yPosition + pix, Opo[i]);
    yPosition += 10;
    contagem++;
  }

  doc.text(15, yPosition + pix, "Implementation:  ");
  yPosition += 10;

  for (let i = 0; i < Im.length; i++) {
    addNewPageIfNeeded(doc, contagem, yPosition);
    doc.text(25, yPosition + pix, Im[i]);
    yPosition += 10;
    contagem++;
  }

  // Salvar o arquivo PDF
  doc.save("beto.pdf");
  modal.style.display = "block";

  if (modalC.style.display == "block") {
    modalC.style.display = "none";
  }

  setTimeout(() => {
    modal.style.display = "none";
  }, 3000);
}

function closeCopy() {
  const modal = document.getElementById("modal-copy");
  modal.style.display = "none";
}

function closeDownload() {
  const modal = document.getElementById("modal-download");
  modal.style.display = "none";
}
