import { useEffect } from "react";
import { useLocation, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import ROASPage from "../pages/ROASPage";


const ScrollToSection = () => {
    const location = useLocation();
    useEffect(() => {
        if (location.state && location.state.targetId) {
            const element = document.getElementById(location.state.targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return null;
};



function Router() {


    return (
        <>

            <ScrollToSection />
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route index element={<Navigate to='/' />} />
                    <Route path='roas' element={<ROASPage />}></Route>
                </Route>
            </Routes>

        </>
    );
}

export default Router;