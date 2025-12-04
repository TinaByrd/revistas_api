export default async function Revistas() {

    const response = await fetch("https://69318a2611a8738467cf5e8c.mockapi.io/api/v1/revistas");

    const listRevistas = await response.json();

    console.log(listRevistas);

    const rows = [];
    for (const revista of listRevistas) {
        rows.push(
            <tr key={revista.id}>
                <td>{revista.id}</td>
                <td>{revista.titulo}</td>
                <td>{revista.quantidadePaginas}</td>
                <td>
                    <a href={`/revistas/delete/?id=${revista.id}`}>Excluir</a>
                </td>
            </tr>
        );
    }

    return (
        <div className="card">
            <h1 className="text-2xl font-bold mb-4">Lista de Revistas</h1>
            <table border={3}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Titulo</th>
                        <th>Quantidade de Páginas</th>
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
