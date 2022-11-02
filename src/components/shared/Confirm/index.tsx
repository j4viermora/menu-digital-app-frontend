import React, { FC } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'

type ConfirmProps = {
  onConfirm: () => void
  onClose: () => void
  isOpen: boolean
  bodyText: string
  headerText: string
}

export const Confirm: FC<ConfirmProps> = ({ isOpen, onClose, onConfirm, bodyText, headerText }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{headerText}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>{bodyText}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={onConfirm} autoFocus>
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
