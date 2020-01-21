import { isBisiesto } from "./core/bisiesto"
import { isHabil } from "./core/diahabil";
import { disgregarFecha } from "./core/disgregarfecha";
import { setFormatoFecha } from "./core/formatearfecha";
import { isNumero } from "./core/numeros";
import { addDias } from "./core/proximafecha";
import { addDiasHabiles } from "./core/proximafechahabil";
import { restarFechas } from "./core/restarfechas";
import { getUltimoDiaMes } from "./core/ultimodiames";
import { validarFecha } from "./core/validarfecha";
import { getFormatoFecha } from "./core/getformatofecha";
import { addNmeses } from "./core/sumarmeses";
import { getDiaHabilSiguiente } from "./core/diahabilsiguiente";

export {disgregarFecha,
        getDiaHabilSiguiente,
        getUltimoDiaMes,
        getFormatoFecha,
        setFormatoFecha,
        addDiasHabiles,
        addDias,
        addNmeses,
        restarFechas,
        validarFecha,
        isBisiesto, 
        isHabil,
        isNumero
};
