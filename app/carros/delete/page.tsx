"use client";

import { useSearchParams } from "next/navigation";

export default function DeleteCarro() {

    const id = useSearchParams().get('id');

    async function deleteCarro() {
        console.log("Excluindo carro...");
        await fetch(`https://69318a2611a8738467cf5e8c.mockapi.io/api/v1/carros/${id}`, {
            method: "DELETE"
        });

        window.location.href = "/carros"; 
    }

    return (
        <div className="card text-center">
            <h1 className="text-xl font-bold mb-4">Confirmar Exclusão?</h1>

            <button className="btn-danger" onClick={deleteCar}>Excluir</button>
        </div>

    );
}
