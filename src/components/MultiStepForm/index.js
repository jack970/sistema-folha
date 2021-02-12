import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ColorlibConnector, ColorlibStepIcon, useStyles, getSteps } from "./styledStepForm";

const MultiStep = ({children, inputs, clear, handleNext, handleBack, activeStep}) => {
  const classes = useStyles();
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Cadastro Único</h1>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label) => {
           const inputsTipo = inputs.tipo
           if ( inputsTipo !== steps[7]) {
             steps[7] = "Pessoa Jurídica"
           }
          return(
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        )})}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              Cadastro de Usuário feita com sucesso.
            </Typography>
            <Button onClick={clear} className={classes.button}>
              Resetar
            </Button>
          </div>
        ) : (
          <div>
            {children}  
          <div>
              {/* <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Voltar
              </Button>
              <Button
                onClick={clear}
                className={classes.button}
              >
                Limpar
              </Button>
              { activeStep === steps.length - 1 ?
              <Button
                  variant="contained"
                  color="primary"
                  onClick={ handleSubmit }
                  className={classes.button}
                >
                  Finalizar
                </Button> :
                <Button
                  variant="contained"
                  color="primary"
                  onClick={ handleNext }
                  className={classes.button}
                >
                  Avançar
                </Button>
                } */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MultiStep