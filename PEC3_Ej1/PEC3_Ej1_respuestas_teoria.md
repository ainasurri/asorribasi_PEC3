Analitza el codi a JavaScript i la seva versió a TypeScript.
Exercici JavaScript (Ejer1.js):

S'ha declarat una variable anomenada dog sense especificar de quin tipus és.
S'ha assignat un objecte a dog amb propietats kind de tipus string i weight, de tipus numèric.
De nou, s'assigna un nou objecte a dog amb kind com a booleà i weight de tipus numèric.
La funció baby rep dos paràmetres i retorna un nou objecte que combina les propietats dels dos com a arguments.

Exercici TypeScript (Ejer1.ts):

S'ha creat una interface anomenada Dog que serveix com a plantilla per a l'objecte Dog. Aquesta  interface especifica que tot objecte que s'ajusti a Dog ha de tenir una propietat kind e tipus string i una propietat weight de tipus numèric.
S'ha declarat una variable dog que es tipifica com l'interfície Dog. Això significa que qualsevol valor que s'assigni a dog ha de complir amb l'estructura definida per l'interfície Dog.
La següent línia caua un error de compilació, ja que s'espera qe la propietat kind sigui un string, però es proporciona un booleà. Aquí, TypeScript ajuda a prevenir errors en temps de desenvolupament forçant que les assignacions compleixin amb els tipus esperats.
Finalment, s'ha definint una funció anomenada baby que rep dos paràmetres, tots dos tipats com a Dog, i retorna un objecte que també s'ajusta a l'interfície Dog. Aquesta funció crea un nou objecte Dog que té el kind del primer Dog i un weight que suma del pes dels dos Dogs passats com a arguments i els divideix entre 4. S'empra as Dog per a indicar que l'objecte retornat ha de ser tractat com un objecte que compleix amb l'interface Dog.



Explica els principals avantatges que aporta l'ús de TypeScript sobre JavaScript

TypeScript amplia JavaScript afegint tipat estàtic i funcionalitats d'orientació a objectes, com interfaces i generics, que millora la detecció d'errors durant el desenvolupament, ofereix millors eines d'auto-completat i refactorització. També facilita la gestió de codi més complex i la seva mantenibilitat. Tot això contribueix a una major eficiència en el desenvolupament i redueix els errors en temps d'execució, convertint TypeScript en una opció robusta per a aplicacions empresarials i sistemes a gran escala.