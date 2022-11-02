// ** Icon imports

// import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'

// ** React icons imports
import {

  MdHome,

} from "react-icons/md";



// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Inicio',
      icon: MdHome,
      path: '/app'

      // openInNewTab: true

    },
    {
      sectionTitle: 'Nombre de seccion'
    }

    // {
    //   sectionTitle: 'Reportes'
    // },

  ]
}

export default navigation
