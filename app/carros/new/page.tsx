"use client";

export default function NewCarro() {

    async function saveCarro() {
        console.log("Acessou");

        const marca = document.getElementById("marca") as HTMLInputElement;
        const portas = document.getElementById("portas") as HTMLInputElement;

        const carro = {
            marca: marca.value,
            portas: Number(portas.value)
        };

        await fetch(`https://69318a2611a8738467cf5e8c.mockapi.io/api/v1/carros`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(carro)
        });

        
        window.location.href = "/carros";
    }

    return (
       <div className="card">
        <h1 className="text-2xl font-bold mb-4">Cadastrar Carro</h1>

        <input id="marca" className="input" placeholder="Marca" />
        <input id="portas" className="input" placeholder="Quantidade de portas" />

        <button className="btn" onClick={saveCar}>Salvar</button>
       </div>

    );
}
