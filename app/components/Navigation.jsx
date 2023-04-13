import Link from "next/link"
import styles from './Navigation.module.css'

const links = [{
    label: 'Inicio',
    route: '/'
  },
  {
    label: 'Nosotros',
    route: '/about'
  },
  {
    label: 'Productos',
    route: '/products'
  },
  {
    label: 'Contactanos',
    route: '/contact'
  },
  ]

  export function Navigation (){
    return(
        <header className={styles.header}>
        <nav>
          <ul className={styles.navigation}>
          <span className="absolute">Ecommerce</span>
          <div className="flex justify-end space-x-4">
            {links.map(( { label, route }) => (
                <li className="" key={route}>
                  <Link href={route}>
                    {label}
                  </Link>
                </li>
              ) )}
          </div>
          </ul>
        </nav>
      </header>
    )
  }
