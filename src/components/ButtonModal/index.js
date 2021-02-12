import React, { useState } from 'react'
import PdfGenerate from '../PdfGenerate'
import * as S from './styled'

const theme = {
    primaryColor: {
        background: "#007bff", borderColor: "#007bff"
    }
}

const ButtonModalPdf = ({data}) => {
    const [openModal, setOpenModal] = useState(false)
    const item = data[0]
    const title = item.mes + " / " + item.ano
    const urlPDF = PdfGenerate(data)
    return (
    <>
        <button className="btn btn-warning" onClick={() => setOpenModal(true)}>
          <i className="fa fa-print" />
        </button>
        {openModal && 
            <S.ModalWrapper>
                <S.ModalContent>
                    <S.ModalHeader>
                        <S.ModalTitle>Contra-Cheque: {title} </S.ModalTitle>
                        <S.ModalButtonClose onClick={() => setOpenModal(!openModal)}>×</S.ModalButtonClose>
                    </S.ModalHeader>
                    <S.ModalBody>
                        <S.ModalPDF src={urlPDF} type="application/pdf" width="100%" height="100%"/>
                    </S.ModalBody>
                    <S.ModalFooter>
                        <S.ModalButtonDownload theme={theme.secondColor} href={urlPDF} download={title}>Baixar</S.ModalButtonDownload>
                        <S.ModalButton theme={theme.primaryColor} onClick={() => setOpenModal(!openModal)}>Fechar</S.ModalButton>
                    </S.ModalFooter>
                </S.ModalContent>
            </S.ModalWrapper>}
    </>
    )
}

export default ButtonModalPdf
