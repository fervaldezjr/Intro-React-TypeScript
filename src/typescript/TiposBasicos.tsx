
export const TiposBasicos = () => {

  const nombre: string = 'Fernando';
  const edad: number = 24;
  const estaActivo: boolean = true;

  const poderes: string[] = ['Fuerza', 'Agilidad'];

  return (
    <>
        <h3> Tipos básicos </h3>
        {nombre}, {edad}, {estaActivo ? 'active' : 'inactive'}
        <br />
        {poderes.join(', ')}
    </>
  )
}
