//Funcion de traslacionTHREE.




function transformaciones(esfera)//Esta funcion se encargara de realizar todas las transformaciones requeridas del parcial
{
	esfera.scale.setX(sx);
	esfera.scale.setY(sy);
	esfera.scale.setZ(sz);
	esfera.translateY(Ty);
	esfera.rotation.x +=Rx;
	esfera.rotation.y += -Ry;
	esfera.translateX(Tx);
	return esfera;
}



   