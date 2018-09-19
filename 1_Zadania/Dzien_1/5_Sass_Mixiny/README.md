<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Sass

> Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny, dobrze sformatowany kod.

## Zadanie rozwiązywane z wykładowcą

### Zadanie 1. Prosty mixin  (~ 5min - 10min)

Znajdź w pliku `index.html` element `section` o klasie `test-mixin`. Ostyluj elementy wewnątrz zgodnie z opisem ich klas (obramowanie, lewa strona, )
Nastepnie stwórz prosty mixin, który doda do  odpowiedniego elementu pseudoklasy `:before` i `:after`. Niech mixin ma nazwę **clearfix**.

-------------------------------------------------------------------------------

## Zadania do samodzielnego wykonania

### Zadanie 1. Mixin border  (~ 5min - 10min)
Stwórz mixin, który na podstawie przekazanego do niego parametru - `$color` - ustawi obramowanie w nastepujący sposób:
* górna kreska  - `1px solid $color`
* prawa kreska - `1px solid lighten($color, 20%)`
* lewa kreska - `2px dashed darken($color, 20%)`
* dolna kreska - `0`
dodatkowo ustawi również border-radius na 5px.
Dodaj mixin dla elementu `header` (plik `index.html`)

### Zadanie 2. Mixin arrow  (~ 5min - 10min)
Stwórz mixin, który na podstawie przekazanego do niego parametru - `$color` - stworzy strzałkę, zwróconą ku górze w podanym kolorze, np. wywołanie arrow(blue), stworzy strzałkę o kolorze niebieskim.
Strzałkę zrób za pomocą CSS, jeśli nie wiesz jak spróbuj znaleźć w Google.
