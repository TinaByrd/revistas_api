"use client";

export default function NewRevista() {

    async function saveRevista() {
        console.log("Acessou");

        const titulo = document.getElementById("titulo") as HTMLInputElement;
        const quantidadePaginas = document.getElementById("quantidadePaginas") as HTMLInputElement;

        const revista = {
            titulo: titulo.value,
            quantidadePaginas: Number(quantidadePaginas.value)
        };

        await fetch(`https://69318a2611a8738467cf5e8c.mockapi.io/api/v1/revistas`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(revista)
        });

        
        window.location.href = "/revistas";
    }

    return (
       <div className="card">
        <h1 className="text-2xl font-bold mb-4">Cadastrar Revista</h1>

        <input id="titulo" className="input" placeholder="Titulo" />
        <input id="quantidadePaginas" className="input" placeholder="Quantidade de paginas" />

        <button className="btn" onClick={saveRevista}>Salvar</button>
       </div>

    );
}
