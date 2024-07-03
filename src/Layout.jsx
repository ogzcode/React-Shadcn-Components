import { Outlet, Link } from "react-router-dom"

import { Button } from "./components/ui/button"


export default function Layout() {
    return (
        <div className="grid grid-cols-4" style={{ overflow: "hidden", height: "100vh" }}>
            <nav className="col-span-1 border-r border-slate-300 p-4">
                <h1 className="text-xl text-left font-bold text-slate-800 mb-4">Components</h1>
                <hr className="border-slate-300 mb-4" />
                <Link to="/" className="mb-4 block">
                    <Button variant="secondary" className="w-full">
                        Home
                    </Button>
                </Link>
                <Link to="/multipleselect">
                    <Button variant="secondary" className="w-full">
                        Multiselect
                    </Button>
                </Link>
            </nav>
            <Outlet />
        </div>
    )
}