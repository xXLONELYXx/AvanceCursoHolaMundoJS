    function nombreResolucion(ancho , alto) {
            if (ancho >= 7680 && alto > 4320 ) {
                return '8K';

            } else  if (ancho >= 3840 && alto > 2160) {
                return '4K'; 
            } else if (ancho >= 2560 && alto > 1440) {
                return 'WQHD';
            } else if (ancho >= 1920 && alto > 720 ) { 
                return 'FHD';
                    } else if (ancho >= 1280 && alto >720 ) {
                        return 'HD';
                    } else {
                        return false;
                    }
                            console.log("la resolucion es : " + nombreResolucion);
            } 

            let nombre = nombreResolucion(3840, 2160);
            console.log("la resolucion es : " + nombre)