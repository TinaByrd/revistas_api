"use client";

import { useSearchParams } from "next/navigation";

export default function DeleteRevista() {

    const id = useSearchParams().get('id');

    async function deleteCarro() {
        console.log("Excluindo revista...");
        await fetch(`https://69318a2611a8738467cf5e8c.mockapi.io/api/v1/revistas/${id}`, {
            method: "DELETE"
        });

        window.location.href = "/revistas"; 
    }

    return (
        <div className="card text-center">
            <h1 className="text-xl font-bold mb-4">Confirmar Exclusão?</h1>

            <button className="btn-danger" onClick={deleteCarro}>Excluir</button>
        </div>

    );
}
