CSS GRID
.contenedor_padre{
   display:grid;
   grid-template-columns:repeat(3, 1fr);
   grid-temlate-rows:repeat(3, auto);
   grid-auto-rows:;
   grid-gap:1em;
   row-gap:1em;   (sep entre filas)
   column-gap:1em; (sep entre columnas)
   
}


contenedor_hijo{
    grid-column:1/3;   (columna del 1 al 3)
    grid-row:1/4;      (filas del 1 al 4)

    grid-area:1/2/3/5;
}