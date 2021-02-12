import jsPDF from 'jspdf'
import { FormatReal } from './formatReal'
import { LogoIpasc, LogoPrefeitura } from './images'

const PdfGenerate = (data) => {
  const items = data
  const item = items[0]
  var doc = new jsPDF();
  var logoIpasc = LogoIpasc
  var logoPrefeitura = LogoPrefeitura
  doc.addImage(logoIpasc, 'PNG', 15, 13, 28, 14)
  doc.addImage(logoPrefeitura, 'PNG', 163, 11, 33, 18)
  
  // ------------- LINHAS DO RECIBO -----------------

  doc.rect(10,10,190,140) // Contorno Recibo

  doc.rect(10,10,40,20)  // cabeçalho Logo IPASC

  doc.rect(160,10,40,20) // cabeçalho Logo PREFEITURA

  doc.rect(10,10,190,20) // cabeçalho Titulo Empresa

  doc.rect(10,44,190,8) // cabeçalho informacoes pessoais

  doc.rect(10,44,23,106) // cabeçalho info lista title

  doc.rect(33,44,73,106) // cabeçalho info lista conteudo

  doc.rect(106,44,33,106) // cabeçalho informacoes pessoais

  doc.rect(139,44,33,106)

  doc.rect(10,150,190,16) // Linha FOOTER

  doc.rect(139,134,61,16)

  doc.rect(139,134,61,9) // linha divide TOTAIS VENCIMENTO, DESCONTOS E LIQUIDO

  // ----------- TÍTULO DO RECIBO -----------------------

  
  doc.setFontSize(12)
  doc.text("Recibo de Pagemento Mensal", 77, 15);

  doc.text(item.razao_nome, 58, 20);

  // ------------ INFOS DO EMPREGADO -------------------
  
  
  doc.setFontSize(12)
  doc.text(`CNPJ: ${item.cgc_cei}`, 52, 28);

  
  doc.setFontSize(12)
  doc.text(`${item.mes}/${item.ano}`, 125, 28);

  
  doc.setFontSize(12)
  doc.text(item.matricula, 14, 36);

  
  doc.setFontSize(12)
  doc.text(item.nome, 30, 36);
    
  
  doc.setFontSize(12)
  doc.text(item.cargo, 125, 36);

  doc.text(`Departamento: ${item.codigo_departamento} - ${item.departamento}`, 14, 42);

  doc.text(`CPF: ${item.cic}`, 110, 42);

  doc.text(`Admissão: ${new Date(item.admissao).toLocaleDateString()}`, 155, 42);

  // ----------- COLUNAS CABEÇALHO --------------------

  doc.setFontSize(10)
  doc.text("CÓDIGO", 15, 50);

  doc.text("DESCRIÇÃO", 35, 50);

  doc.text("REFERÊNCIA", 110, 50);

  doc.text("VENCIMENTOS", 142, 50);

  doc.text("DESCONTOS", 175, 50);

  // ------------- LISTA DE INFOS ------------------------

    
  doc.setFontSize(12)

const startY = 50;

doc.setFontSize(12);

function createCard(item,heightLine) {
  textWriter(item, startY + (heightLine * 7))
}

function textWriter(item, yAxis) {
  item.evento &&
  doc.text(item.evento, 15, yAxis);

  item.descricao &&
  doc.text(item.descricao, 35, yAxis);

  item.provento &&
  doc.text(FormatReal(item.provento.toString()), 142, yAxis);

  item.desconto && 
  doc.text(FormatReal(item.desconto.toString()), 175, yAxis);
}

for (var i = 0; i < items.length; i++) {
  createCard(items[i], i + 1);
}

  // ------------- SOMA TOTAIS DA LISTA ------------------

  doc.text("Líquido.......", 140, 148);
  doc.setFont("Times", "bold") 
  doc.text(FormatReal(item.liquido.toString()), 180, 148);

  doc.text(FormatReal(item.proventos.toString()), 150, 140);


  doc.text(FormatReal(item.descontos.toString()), 180, 140);

  // ------------------ FOOTER ---------------------
  doc.setFontSize(13)
  doc.setFont("Times", "normal") 
  doc.text("Salário Base", 24, 157);
  doc.text(FormatReal(item.SB.toString()), 30, 163);
  

  doc.text("Sal. Cont. INSS", 55, 157);
  doc.text(FormatReal(item.base_inss.toString()), 66, 163);

  doc.text("Base Cálc. FGTS", 90, 157);
  doc.text(FormatReal(item.base_fgts.toString()), 115, 163);

  doc.text("FGTS do Mês", 130, 157);
  doc.text(FormatReal(item.fgts.toString()), 150, 163);

  doc.text("Base Cálc. IRRF", 160, 157);
  doc.text(FormatReal(item.base_irrf.toString()), 170, 163);

  // ---------------- SALVA ARQUIVO -----------------
  
  var string = doc.output('datauristring');
  return string
  }

export default PdfGenerate