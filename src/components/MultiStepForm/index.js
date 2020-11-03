import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { initalState } from '../templateCadastro/InitialState'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "white",
    padding: '1rem',
    borderRadius: '2%'
  },
  button: {
    marginRight: theme.spacing(1)
  },
  title: {
    textAlign: "center"
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps() {
  return ["Dados Pessoais", "Título Eleitoral", "Certidão", "CTPS", "RG", "Filiação", "Outros Dados", "Pessoa Física", "Submit"];
}

const MultiStep = ({children, activeStep, setActiveStep, inputsTipo, inputs, setInputs}) => {
  const classes = useStyles();
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const handleSubmit = () => {
    console.log(inputs.escolaridade)
  }

  const isStepOptional = (step) => {
    return null;
  };

  const clear = e => {
    e.preventDefault()
    setInputs(initalState)
    setActiveStep(0)
  }

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {

      throw new Error("Você não pode pular uma etapa que não seja opcional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Cadastro Único</h1>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (inputsTipo !== steps[7]) {
            steps[7] = "Pessoa Jurídica"
          }
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              Cadastro de Usuário feita com sucesso.
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Resetar
            </Button>
          </div>
        ) : (
          <div>
          {children}  
          <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Voltar
              </Button>
              <Button
                onClick={e => clear(e)}
                className={classes.button}
              >
                Limpar
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Pular
                </Button>
              )}
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
                }
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MultiStep