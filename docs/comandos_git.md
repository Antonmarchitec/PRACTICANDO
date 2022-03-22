PARA INICIALIZAR GIT Y SUBIR REPOSITORIOS
*****************************************

Instalar git

git version
git config --global user.name "mi nombre"
git config --global user.email "myemail@example.com"  (EL CORREO DEBE SER EL MISMO QUE EL DE GIBHUB)


// Muestra en una línea los commit realizados
git log --oneline

// Muestra en una línea los commit realizados pero más elegante
git log --oneline --decorate --all --graph

// Solo muestra los archivos modificados
git status -s

//Para limpiar la consola
cls   


comand//> git init

SUBIR EL PROYECTO COMPLETO
comand//> git add .

SUBIR SOLO ARCHIVOS SUELTOS
comand//> git add index.html
comand//> git add estilos.css

PARA INDICAR LA ACTUALIZACION EN EL REPOSITORIO
comand//> git commit -m "Portafolio_V.3"

PARA INDICAR REMOTAMENTE CON NUESTRO LINK
comand//> git remote add origin https://github.com/Antonmarchitec/Antonmarchitec.github.io.git

PARA CARGAR EL CONTENIDO EN EL LINK DE NUESTRO REPOSITORIO
comand//> git push -u origin master



POSIBLES CASOS:
****************************************************************
*************************************************************
ME PIDE USUARIO Y CONTRASEÑA SOLUCION
comand//> git config --global user.email "desarrollowebaps@gmail.com"
comand//> git config --local user.name "Antonio Ponce"
comand//> git config --list
comand//> git config --list --show-origin
*************************************************************
*************************************************************

REPOSITORIO REPETIDO EJECUTAR EL SIGUIENTE COMANDO PARA SOLUCIONAR
**************************************************
(error: remote origin already exists.)

comand//> git remote --verbose  (muestra en que repositorio esta clonado)
comand//> git remote set-url origin https://github.com/Antonmarchitec/Antonmarchitec.github.io.git   (sobrescribe el repositorio)
comand//> git remote --verbose
comand//> git push -u origin master   (empuja los datos a repositorio)

CREAR
******
gh-pages



LINKS UTILIZADOS
****************
https://www.youtube.com/watch?v=fHSkaccKfaA



SISTEMA DE ACTUALIZACION DE VERSIONES GIT
*****************************************

# Comandos utiles de GIT
1. git init                         (inicializar)
2. git add .                        (agregar)
3. git reset .                      (resetear)
4. git commit -m "primer_commit"    (colocar nombre)
5. git checkout -- .                (volver al ultimo commit)
6. git log                          (muestras todos los commits sales con la letra Q)
7. git commit --amend         (Editar el nombre del ultimo commit (tecla i) para salir Esc + :wq!)
8. git checkout -b rama-heroes      (crear una nueva rama ejemplo:rama-heroes)
9. git branch                       (ver cuantas ramas tengo)
10. git checkout master             (para volver a la rama principal) 
11. git merge rama-heroes           (incluir ramas secundarias a rama master)  
12. git branch -d rama-heroes       (para eliminar las ramas que ya no nos sirven)

# PARA HACER EL REPLIEGUE EN UN REPOSITORIO EXTERNO COMO EJEMPLO GIBHUB
  COPIAR LOS COMANDOS 
  1. git remote add origin https://github.com/Antonmarchitec/ProyectoDePruebaGIT.git
  2. git branch -M main
  3. git push -u origin main


# PARA COLOCAR EN EL REPOSITORIO CREADO EN GITHUB
  1. git branch -m main gh-pages                 (colocar el nombre del proyecto rama creada en github direccionar)
  2. git branch                                  (verificamos si estamos en la rama correcta)
  3. git push -u origin gh-pages                 (subimos al github el proyecto y ponemos como origen el nuevo archivo)
  4. git push origin HEAD                        (suele pedir para empujar al repositorio anterior por el nuevo)                       
  5. git push origin --delete nombre_de_rama     (eliminar la rama que no sirve del repositorio github)
  6. git clone url_del_proyecto                  (para clonar proyecto copiamos su url)
       - cd url_del_proyecto      (accedemos a nuestra carpeta del pro)
       - code .                   (abrir nuestro pro en visual estudio) 
       - npm install              (instalar npm)
       - npm start                (abrimos el proyecto)
 
# CUANDO SE QUIERE EDITAR Y EL PROYECTO YA ESTA EN EL REPOSITORIO SOLO SERA 
  1. git push
  2. git commit -am "mensaje"     (reemplaza al git add . // git commit -m "comentario")

  ENLACE DEL VIDEO AYUDA:
  https://youtu.be/iT4UOkyI09k
  https://www.youtube.com/watch?v=rApDq6twjGg


ENLACE TURISMO
https://www.youtube.com/watch?v=xr7HrtEHFIk&t=260s