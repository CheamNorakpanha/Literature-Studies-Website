import React, { useEffect } from "react";
import PoisonSummary from '../components/summary/PoisonSummary';
import NavBar from "../components/nav/NavBar";
import LoadingScreen from "../components/loadingscreen/LoadingScreen";
import useLoading from "../hooks/UseLoading";

function Poison() {
    useEffect(() => {
        document.title = "Poison - Roald Dahl";
    }, []);

    const loading = useLoading(1000);

    return (
        <div>
            {loading ? (<LoadingScreen />) : (
                <div>
                    <NavBar />

                    <div className="bg-body-tertiary py-4 overflow-hidden">
                        <PoisonSummary />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Poison;