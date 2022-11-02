import React, { FC } from 'react'

// ** MUI imports
import Fab from '@mui/material/Fab'

// icons
import { MdAdd as AddIcon } from 'react-icons/md'

type FABButtonProps = {
  onClick: () => void
}

export const FABButton: FC<FABButtonProps> = ({ onClick, children }) => {
  return (
    <Fab
      sx={{
        position: 'fixed',
        bottom: '1rem',
        right: '1rem'
      }}
      color='primary'
      variant='extended'
      aria-label='add locations'
      onClick={onClick}
    >
      <AddIcon size={'1.2rem'} />
      {children}
    </Fab>
  )
}
