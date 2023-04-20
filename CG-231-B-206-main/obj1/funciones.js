//Funciones de traslacion 
function traslacionX(obj)
{
	obj.translateX(Tx);
	return obj;
}
function traslacionY(obj)
{
	obj.translateY(Ty);
	return obj;
}
function traslacionZ(obj)
{
	obj.translateZ(Tz);
	return obj;
}
//Funciones de rotacion
function RotacionX(obj)
{
	obj.rotation.x +=Rx;
	return obj;
}
function RotacionY(obj)
{
	obj.rotation.y +=Ry;
	return obj;
}
//Funciones de escalado
function EscaladoY(obj)
{
	obj.scale.setY(sy);
	return obj;
}
function EscaladoX(obj)
{
	obj.scale.setX(sx);
	return obj;
}
function EscaladoZ(obj)
{
	obj.scale.setZ(sz);
	return obj;
}

function transformaciones(esfera)//Esta funcion se encargara de realizar todas las transformaciones requeridas del parcial
{
	EscaladoX(esfera);
	EscaladoY(esfera)
	EscaladoZ(esfera)
	//Obtenemos la primera imagen 
	RotacionX(esfera);
	RotacionY(esfera);
	traslacionY(esfera);
	
	traslacionZ(esfera);
	//Obtenemos la imagen f

	return esfera;
}



   