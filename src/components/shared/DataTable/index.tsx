import { FC, useState, ChangeEvent } from 'react'

// mui imports
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import TablePagination from '@mui/material/TablePagination'

import Skeleton from '@mui/material/Skeleton'

type ColumConfig = {
  name: string
  label: string
  minWidth?: string
}

type OnChangeEvent = {
  rowPerPage: number
  page: number
}

type Props = {
  ActionsComponent: (e: any) => JSX.Element
  onChange: (onChangeEvent: OnChangeEvent) => void
  columnConfig: ColumConfig[]
  loading?: boolean
  noContentText?: string
  page: number
  registers: any[]
  totalRegisters: number
}

/**
 * @params columnConfig - configuracion de las columnas,  recibe label y name  para la columna de acciones mandar un string vacio como valor
 * @params registers  - array de objectos con el los registros  a mostrar
 * @params totalRegister - number total register
 * @params noContentText - texto a mostar cuando no hay registros para mostrar
 * @params loading - manejar el skeleton del data table
 * @params ActionsComponent - recibe un callback que retorna la informacion de la row
 *
 * */
export const HLDataTable: FC<Props> = ({
  ActionsComponent,
  columnConfig,
  loading = false,
  noContentText = 'Aun no tiene registros',
  onChange,
  registers,
  totalRegisters,
  page = 1
}) => {
  const [rowPerPage, updateRowPerPage] = useState(10)

  // const [pageState, updatePageState] = useState(page - 1)

  const handleChangePage = (_: any, pageSelected: number) => {
    if (pageSelected > totalRegisters) return

    // updatePageState(pageSelected)
    onChange({ rowPerPage, page: pageSelected + 1 })
  }
  const handleChangeRowsPerPage = ({ target }: ChangeEvent<HTMLInputElement>) => {
    updateRowPerPage(Number(target.value))
    onChange({ rowPerPage: Number(target.value), page })
  }

  const loadingRows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const loadingColumns = [0, 1, 2, 3]

  if (loading) {
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {loadingColumns.map(item => (
                <TableCell key={item}>
                  <Skeleton />
                </TableCell>
              ))}
            </TableRow>
            {loadingRows.map(item => (
              <TableRow key={item}>
                {loadingColumns.map(item => (
                  <TableCell key={item}>
                    <Skeleton />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
        </Table>
      </TableContainer>
    )
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columnConfig.map(({ label, minWidth }) => (
              <TableCell
                sx={{
                  minWidth
                }}
                key={label}
              >
                {loading ? <Skeleton /> : label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {registers.length === 0 ? (
            <h2>{noContentText}</h2>
          ) : (
            <>
              {registers.map(objectInfo => {
                return (
                  <TableRow key={Math.random()}>
                    {columnConfig.map(({ name }) => {
                      return (
                        <TableCell key={name}>
                          {loading ? (
                            <Skeleton />
                          ) : (
                            <>{objectInfo[name] ? objectInfo[name] : ActionsComponent(objectInfo)}</>
                          )}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
            </>
          )}
        </TableBody>
      </Table>
      <TablePagination
        labelRowsPerPage='Registros por pagina'
        rowsPerPageOptions={[10, 20, 30]}
        component='div'
        count={totalRegisters}
        rowsPerPage={rowPerPage}
        page={page - 1}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  )
}
