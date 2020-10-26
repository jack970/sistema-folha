import React from 'react'
import jsPDF from 'jspdf'
import { FormatReal } from './formatReal'

const PdfGenerate = (data) => {
    const items = data.data
    
    const jsPdfGenerator = () => {
        var doc = new jsPDF();


        
        // ------------- LINHAS DO RECIBO -----------------

        doc.rect(10,10,190,140) // Contorno Recibo

        doc.rect(10,10,40,20)  // cabeçalho Logo titulo

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
        doc.text("Recibo de Pagemento Mensal", 92, 15);

        doc.text(items[0].razao_nome, 75, 20);

        // ------------ INFOS DO EMPREGADO -------------------
        
        
        doc.setFontSize(12)
        doc.text(`CNPJ: ${items[0].cgc_cei}`, 52, 28);

        
        doc.setFontSize(12)
        doc.text(`${items[0].mes}/${items[0].ano}`, 152, 28);

        
        doc.setFontSize(12)
        doc.text(items[0].matricula, 14, 36);

        
        doc.setFontSize(12)
        doc.text(items[0].nome, 30, 36);
         
        
        doc.setFontSize(12)
        doc.text(items[0].cargo, 125, 36);
    
        doc.text(`Departamento: ${items[0].codigo_departamento} - ${items[0].departamento}`, 14, 42);

        doc.text(`CPF: ${items[0].cic}`, 110, 42);

        doc.text(`Admissão: ${new Date(items[0].admissao).toLocaleDateString()}`, 155, 42);

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
        doc.text(FormatReal(items[0].liquido.toString()), 180, 148);

        doc.text(FormatReal(items[0].proventos.toString()), 150, 140);


        doc.text(FormatReal(items[0].descontos.toString()), 180, 140);

        // ------------------ FOOTER ---------------------
        doc.setFontSize(13)
        doc.setFont("Times", "normal") 
        doc.text("Salário Base", 24, 157);
        doc.text(FormatReal(items[0].SB.toString()), 30, 163);

        doc.text("Sal. Cont. INSS", 55, 157);
        doc.text(FormatReal(items[0].base_inss.toString()), 66, 163);

        doc.text("Base Cálc. FGTS", 90, 157);
        doc.text(FormatReal(items[0].base_fgts.toString()), 115, 163);

        doc.text("FGTS do Mês", 130, 157);
        doc.text(FormatReal(items[0].fgts.toString()), 150, 163);

        doc.text("Base Cálc. IRRF", 160, 157);
        doc.text(FormatReal(items[0].base_irrf.toString()), 170, 163);

        // ---------------- SALVA ARQUIVO -----------------
        
        var string = doc.output('datauristring');
        var embed = "<embed width='100%' height='100%' src='" + string + "'/>"
        var x = window.open();
        x.document.open();
        x.document.write(embed);
        x.document.close();

    }

    return(
        <button className="btn btn-warning" onClick={() => jsPdfGenerator()}>
                    <i className="fa fa-print" />
        </button>
    )
}

export default PdfGenerate