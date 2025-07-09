import React, { useState, useEffect } from 'react';

function ContadorConMensaje() {
  const [contador, setContador] = useState(0);

  const aumentar = () => setContador(contador + 1);

  useEffect(() => {
    console.log(`El contador cambió a: ${contador}`);
  }, [contador]); // Se ejecuta cada vez que contador cambia

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Contador: {contador}</h2>
      <button onClick={aumentar}>Aumentar</button>
    </div>
  );
}

export default ContadorConMensaje;