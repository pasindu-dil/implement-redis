import { Link } from "react-router"

const ListItem = ({ children, NavLink }) => {
    return (
        <>
            <li>
                <Link
                    to={NavLink}
                    className="flex py-2 text-base text-slate-100 font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-slate-700 lg:ml-12 lg:inline-flex"
                >
                    {children}
                </Link>
            </li>
        </>
    )
}

export default ListItem
