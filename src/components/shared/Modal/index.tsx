import React, { FC } from 'react'

// ** MUI imports
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { SxProps } from '@mui/material'
import { Theme } from '@mui/system'

type SimpleModalProps = {
  isOpen: boolean
  sx?: SxProps<Theme>,
  title: string,
  onClose?: () => void
}

/**
 * A React component that takes in a prop called isOpen and handle show/hide modal
 * UI.
 * @param SimpleModalProps
 * @returns A React component
 */
export const SimpleModal: FC<SimpleModalProps> = ({ title,  isOpen, children, sx, onClose }) => {
  return (
    <Dialog sx={sx} open={isOpen} onClose={onClose} fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}
