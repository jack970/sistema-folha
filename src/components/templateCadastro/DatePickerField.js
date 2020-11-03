import React from "react";
import DateFnsUtils from '@date-io/date-fns';
import { ptBR } from "date-fns/locale";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Box } from "@material-ui/core";

const KeyboardDatePickerComponent = ({ valueDate, setInputs, name, label }) => {

  return (
  <Box m={2}>
    <MuiPickersUtilsProvider locale={ptBR} utils={DateFnsUtils}>
      <KeyboardDatePicker
        clearable
        label={label}
        inputVariant="outlined"
        invalidDateMessage="Formato Inválido"
        value={valueDate}
        placeholder="10/10/2018"
        onChange={(date) => setInputs(inputs => ({ ...inputs, [name]: date }))}
        format="dd/MM/yyyy"
        maxDate={new Date()}
      />
    </MuiPickersUtilsProvider>
  </Box>
  );
}

export default KeyboardDatePickerComponent;