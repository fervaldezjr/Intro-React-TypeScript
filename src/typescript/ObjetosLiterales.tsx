import React from 'react'

interface Persona {
    nombre: string;
    edad: number;
    direccion: Direccion
}

interface Direccion {
    pais: string,
    casaNo: number
}

export const ObjetosLiterales = () => {
    const persona: Persona = {
        nombre: 'Fernando',
        edad: 24,
        direccion: {
            pais: 'Spain',
            casaNo: 410
        }
    }

  return (
    <>
        <h3>Objetos Literales</h3>
        <code>
            <pre>
                {JSON.stringify(persona, null, 2)}
            </pre>
        </code>
    </>
  )
}

