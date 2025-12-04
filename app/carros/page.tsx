export default async function Carros() {

    const response = await fetch("https://69318a2611a8738467cf5e8c.mockapi.io/api/v1/carros");

    const listCarros = await response.json();

    console.log(listCarros);

    const rows = [];
    for (const carro of listCarros) {
        rows.push(
            <tr key={carro.id}>
                <td>{carro.id}</td>
                <td>{carro.marca}</td>
                <td>{carro.portas}</td>
                <td>
                    <a href={`/carros/delete/?id=${carro.id}`}>Excluir</a>
                </td>
            </tr>
        );
    }

    return (
        <div className="card">
            <h1 className="text-2xl font-bold mb-4">Lista de Carros</h1>
            <table border={3}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Marca</th>
                        <th>Portas</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
}
